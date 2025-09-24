
'use client';

import { useState, useEffect, useCallback } from 'react';
import { getAdminMessages, deleteAdminMessage, toggleAdminMessageStatus, verifyAdminPassword } from '@/app/actions';
import type { Message } from '@/lib/message-store';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { formatDistanceToNow } from 'date-fns';
import { Trash2, CheckCircle, Mail, RefreshCw } from 'lucide-react';
import { PageTransitionWrapper } from '@/components/page-transition-wrapper';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/layout/logo';

function AdminLogin({ onLogin }: { onLogin: (success: boolean) => void }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const success = await verifyAdminPassword(password);
      if (success) {
        sessionStorage.setItem('isAdminAuthenticated', 'true');
        onLogin(true);
      } else {
        setError('Incorrect password. Please try again.');
        onLogin(false);
      }
    } catch (err) {
      setError('An error occurred during verification.');
      onLogin(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <PageTransitionWrapper>
        <Card className="w-full max-w-md mx-auto shadow-2xl border-primary/20">
           <CardHeader className="text-center items-center">
            <Logo className="h-24 w-24 mb-4" />
            <CardTitle className="text-3xl font-bold text-primary">Admin Access</CardTitle>
            <CardDescription>Enter the password to view messages.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="text-center text-lg"
                  required
                />
              </div>
              {error && <p className="text-destructive text-center text-sm">{error}</p>}
              <Button type="submit" className="w-full text-lg h-12 sheen-effect" disabled={loading}>
                {loading ? 'Verifying...' : 'Login'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </PageTransitionWrapper>
    </div>
  );
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { toast } = useToast();

  const fetchMessages = useCallback(async () => {
    try {
      const fetchedMessages = await getAdminMessages();
      setMessages(fetchedMessages);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to fetch messages. Ensure Firestore rules allow reads.',
        variant: 'destructive',
      });
    }
  }, [toast]);

  useEffect(() => {
    const authStatus = sessionStorage.getItem('isAdminAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      setLoading(true);
      fetchMessages().finally(() => setLoading(false));
    }
  }, [isAuthenticated, fetchMessages]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchMessages();
    setIsRefreshing(false);
    toast({
        title: 'Refreshed',
        description: 'Message list updated.',
    });
  };

  const handleDelete = async (id: string) => {
    try {
      const success = await deleteAdminMessage(id);
      if (success) {
        setMessages((prev) => prev.filter((msg) => msg.id !== id));
        toast({ title: 'Success', description: 'Message deleted.' });
      } else {
        throw new Error();
      }
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to delete message.', variant: 'destructive' });
    }
  };

  const handleToggleStatus = async (id: string) => {
    try {
      const success = await toggleAdminMessageStatus(id);
      if (success) {
        setMessages((prev) =>
          prev.map((msg) => (msg.id === id ? { ...msg, isRead: !msg.isRead } : msg))
        );
        toast({ title: 'Success', description: 'Message status updated.' });
      } else {
        throw new Error();
      }
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to update status.', variant: 'destructive' });
    }
  };

  const toDate = (timestamp: any): Date => {
    if (timestamp instanceof Date) {
      return timestamp;
    }
    // Handle serialized timestamps (ISO string)
    if (typeof timestamp === 'string') {
      return new Date(timestamp);
    }
    // Fallback for Firestore Timestamp-like objects that might not have the toDate method
    if (timestamp && typeof timestamp.seconds === 'number' && typeof timestamp.nanoseconds === 'number') {
      return new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
    }
    return new Date();
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={setIsAuthenticated} />;
  }

  return (
    <PageTransitionWrapper>
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-foreground">Customer Messages</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={handleRefresh} disabled={isRefreshing} title="Refresh Messages">
              <RefreshCw className={cn("h-5 w-5", isRefreshing && "animate-spin")} />
            </Button>
            <Button variant="outline" onClick={() => {
              sessionStorage.removeItem('isAdminAuthenticated');
              setIsAuthenticated(false);
            }}>Logout</Button>
          </div>
        </div>
        
        {loading ? (
          <p>Loading messages...</p>
        ) : messages.length === 0 ? (
          <div className="text-center py-20 bg-card rounded-lg border">
            <p className="text-muted-foreground text-lg">No messages found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {messages.map((msg) => (
              <Card key={msg.id} className={`shadow-md hover:shadow-xl transition-shadow ${msg.isRead ? 'bg-card/60' : 'bg-card'}`}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{msg.name}</CardTitle>
                      <CardDescription className="text-sm text-primary">{msg.email}</CardDescription>
                    </div>
                     <span className={`text-xs ${msg.isRead ? 'text-green-500' : 'text-amber-500'}`}>
                        {msg.isRead ? 'Read' : 'Unread'}
                     </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{msg.message}</p>
                  <p className="text-xs text-muted-foreground/80 border-t pt-2">
                    Received {msg.createdAt ? formatDistanceToNow(toDate(msg.createdAt), { addSuffix: true }) : 'just now'}
                  </p>
                  <div className="flex justify-end space-x-2 mt-4">
                    <Button variant="ghost" size="icon" onClick={() => handleToggleStatus(msg.id)} title={msg.isRead ? 'Mark as Unread' : 'Mark as Read'}>
                      {msg.isRead ? <Mail className="h-5 w-5" /> : <CheckCircle className="h-5 w-5 text-green-500" />}
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(msg.id)} title="Delete Message">
                      <Trash2 className="h-5 w-5 text-destructive" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </PageTransitionWrapper>
  );
}
