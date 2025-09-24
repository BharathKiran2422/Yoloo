
'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { getAdminMessages, deleteAdminMessage, toggleAdminMessageStatus, verifyAdminPassword } from '@/app/actions';
import type { Message } from '@/lib/message-store';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { formatDistanceToNow } from 'date-fns';
import { Trash2, CheckCircle, Mail, RefreshCw, ArrowLeft, Inbox, Pen, MessageSquare } from 'lucide-react';
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
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [activeTab, setActiveTab] = useState('all');
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
        setSelectedMessage(null);
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
        const updatedMessages = messages.map((msg) => 
            msg.id === id ? { ...msg, isRead: !msg.isRead } : msg
        );
        setMessages(updatedMessages);
        setSelectedMessage(prev => prev && prev.id === id ? { ...prev, isRead: !prev.isRead } : prev);
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
    if (typeof timestamp === 'string') {
      return new Date(timestamp);
    }
    if (timestamp && typeof timestamp.seconds === 'number') {
      return new Date(timestamp.seconds * 1000 + (timestamp.nanoseconds || 0) / 1000000);
    }
    return new Date();
  };

  const filteredMessages = useMemo(() => {
    if (activeTab === 'read') return messages.filter(m => m.isRead);
    if (activeTab === 'unread') return messages.filter(m => !m.isRead);
    return messages;
  }, [messages, activeTab]);

  if (!isAuthenticated) {
    return <AdminLogin onLogin={setIsAuthenticated} />;
  }

  const MessageList = ({ messages }: { messages: Message[] }) => {
    if (loading) {
      return <div className="p-4 text-center text-muted-foreground">Loading messages...</div>;
    }

    if (messages.length === 0) {
      return (
        <div className="text-center py-20 px-4">
          <Inbox className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
          <p className="text-lg font-medium text-muted-foreground">No messages here</p>
          <p className="text-sm text-muted-foreground/80">
            {activeTab === 'all' ? 'Your inbox is empty.' : `You have no ${activeTab} messages.`}
          </p>
        </div>
      );
    }

    return (
      <ul className="divide-y">
        {messages.map((msg) => (
          <li key={msg.id}>
            <button 
              onClick={() => setSelectedMessage(msg)}
              className={cn(
                "w-full text-left p-4 hover:bg-accent transition-colors duration-200 relative",
                selectedMessage?.id === msg.id && "bg-accent",
              )}
            >
              {!msg.isRead && (
                <span className="absolute left-1.5 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" title="Unread"></span>
              )}
              <div className="flex justify-between items-start">
                <div className="flex-1 truncate">
                  <p className={cn("font-semibold", !msg.isRead && "text-foreground")}>{msg.name}</p>
                  <p className="text-sm text-muted-foreground truncate">{msg.email}</p>
                   <p className="text-sm text-muted-foreground truncate mt-1">{msg.message}</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap pl-2">
                  {msg.createdAt ? formatDistanceToNow(toDate(msg.createdAt), { addSuffix: true }) : 'just now'}
                </span>
              </div>
            </button>
          </li>
        ))}
      </ul>
    );
  };
  
  return (
    <PageTransitionWrapper>
      <div className="container mx-auto px-4 py-8 mb-16">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Inbox</h1>
            <p className="text-muted-foreground">View and manage your messages.</p>
          </div>
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
        
        <div className="flex h-[60vh] border rounded-lg bg-card overflow-hidden shadow-sm">
          {/* Message List Pane */}
          <div className={cn(
            "w-full md:w-[400px] border-r overflow-y-auto flex-shrink-0",
            selectedMessage && "hidden md:flex flex-col"
          )}>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="m-2">
                <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
                <TabsTrigger value="unread" className="flex-1">Unread</TabsTrigger>
                <TabsTrigger value="read" className="flex-1">Read</TabsTrigger>
              </TabsList>
              <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                      <MessageList messages={filteredMessages} />
                  </motion.div>
              </AnimatePresence>
            </Tabs>
          </div>

          {/* Message Detail Pane */}
          <div className={cn("w-full overflow-y-auto", !selectedMessage && "hidden md:flex items-center justify-center")}>
            {selectedMessage ? (
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6 pb-4 border-b">
                    <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSelectedMessage(null)}>
                        <ArrowLeft className="h-5 w-5" />
                    </Button>
                    <div className="flex-1">
                        <h2 className="text-xl font-bold">{selectedMessage.name}</h2>
                        <p className="text-sm text-muted-foreground">{selectedMessage.email}</p>
                    </div>
                     <span className="text-xs text-muted-foreground">
                        {formatDistanceToNow(toDate(selectedMessage.createdAt), { addSuffix: true })}
                    </span>
                </div>

                <div className="flex-grow prose prose-sm dark:prose-invert max-w-none text-muted-foreground mb-4">
                  {selectedMessage.message}
                </div>
                
                <div className="border-t pt-4 mt-auto">
                    <div className="flex justify-end space-x-2">
                        <Button variant="outline" onClick={() => handleToggleStatus(selectedMessage.id)} title={selectedMessage.isRead ? 'Mark as Unread' : 'Mark as Read'}>
                            {selectedMessage.isRead ? <Mail className="h-5 w-5" /> : <CheckCircle className="h-5 w-5 text-green-500" />}
                            {selectedMessage.isRead ? 'Mark as Unread' : 'Mark as Read'}
                        </Button>
                        <Button variant="destructive" onClick={() => handleDelete(selectedMessage.id)} title="Delete Message">
                            <Trash2 className="h-5 w-5" /> Delete
                        </Button>
                    </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-muted-foreground p-8">
                <MessageSquare className="h-16 w-16 mx-auto mb-4" />
                <p className="text-lg">Select a message to read</p>
                <p className="text-sm">No message selected</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageTransitionWrapper>
  );
}

// Add motion and AnimatePresence to dependencies if not already there
import { motion, AnimatePresence } from 'framer-motion';

    

    