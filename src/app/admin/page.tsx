'use client';

import { useState, useEffect, useTransition } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AdminLogin } from '@/components/sections/admin-login';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trash2, MailOpen, Mail, LogOut, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { getMessages, toggleMessageStatus, deleteMessage as deleteMessageAction } from '@/lib/message-store';
import type { Message } from '@/lib/message-store';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const loadMessages = () => {
    startTransition(async () => {
      const fetchedMessages = await getMessages();
      setMessages(fetchedMessages);
    });
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadMessages();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <AdminLogin onLoginSuccess={() => setIsAuthenticated(true)} />;
  }

  const handleToggleStatus = (id: number) => {
    startTransition(async () => {
      await toggleMessageStatus(id);
      loadMessages();
    });
  };

  const handleDeleteMessage = (id: number) => {
    startTransition(async () => {
      await deleteMessageAction(id);
      loadMessages();
       toast({
        title: "Message Deleted",
        description: "The message has been successfully deleted.",
      });
    });
  };

  const filteredMessages = (filter: 'all' | 'read' | 'unread') => {
    if (filter === 'all') return messages;
    return messages.filter(msg => msg.status === filter);
  };
  
  const handleLogout = () => {
      setIsAuthenticated(false);
  }

  const renderMessageRows = (msgs: Message[]) => (
    <TableBody>
      {msgs.length > 0 ? msgs.map((msg) => (
        <TableRow key={msg.id} className={msg.status === 'unread' ? 'bg-muted/50' : ''}>
          <TableCell className="font-medium">{msg.name}</TableCell>
          <TableCell>{msg.email}</TableCell>
          <TableCell>{msg.message}</TableCell>
          <TableCell className="text-right space-x-2">
            <Button variant="ghost" size="icon" onClick={() => handleToggleStatus(msg.id)}>
              {msg.status === 'read' ? <MailOpen className="h-4 w-4" /> : <Mail className="h-4 w-4" />}
               <span className="sr-only">Mark as {msg.status === 'read' ? 'Unread' : 'Read'}</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => handleDeleteMessage(msg.id)}>
              <Trash2 className="h-4 w-4 text-destructive" />
              <span className="sr-only">Delete</span>
            </Button>
          </TableCell>
        </TableRow>
      )) : (
        <TableRow>
            <TableCell colSpan={4} className="h-24 text-center">No messages in this category.</TableCell>
        </TableRow>
      )}
    </TableBody>
  );

  return (
    <div className="container mx-auto px-4 py-12">
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle>Contact Messages</CardTitle>
                    <CardDescription>Messages submitted through the contact form.</CardDescription>
                </div>
                 <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" onClick={loadMessages} disabled={isPending}>
                        <RefreshCw className={`h-4 w-4 ${isPending ? 'animate-spin' : ''}`} />
                        <span className="sr-only">Refresh Messages</span>
                    </Button>
                    <Button variant="outline" onClick={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                    </Button>
                 </div>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="all">
                    <TabsList>
                        <TabsTrigger value="all">All ({messages.length})</TabsTrigger>
                        <TabsTrigger value="unread">Unread ({messages.filter(m => m.status === 'unread').length})</TabsTrigger>
                        <TabsTrigger value="read">Read ({messages.filter(m => m.status === 'read').length})</TabsTrigger>
                    </TabsList>
                    <div className="mt-4">
                        <TabsContent value="all">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Message</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                {renderMessageRows(filteredMessages('all'))}
                            </Table>
                        </TabsContent>
                        <TabsContent value="unread">
                             <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Message</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                {renderMessageRows(filteredMessages('unread'))}
                            </Table>
                        </TabsContent>
                        <TabsContent value="read">
                             <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Message</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                {renderMessageRows(filteredMessages('read'))}
                            </Table>
                        </TabsContent>
                    </div>
                </Tabs>
            </CardContent>
        </Card>
    </div>
  );
}
