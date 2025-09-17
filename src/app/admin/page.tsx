'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AdminLogin } from '@/components/sections/admin-login';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trash2, MailOpen, Mail, LogOut } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { on } from '@/lib/events';

type Message = {
  id: number;
  name: string;
  email: string;
  message: string;
  status: 'read' | 'unread';
};

// This is a placeholder for messages. In a real application, you would fetch these from a database.
const initialMessages: Message[] = [
  { id: 1, name: 'Jane Doe', email: 'jane@example.com', message: 'I love your new collection! When will the winter jackets be back in stock?', status: 'unread' },
  { id: 2, name: 'John Smith', email: 'john@example.com', message: 'I have a question about my recent order #12345.', status: 'unread' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', message: 'Just wanted to say hi! Your website is beautiful.', status: 'read' },
];

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const { toast } = useToast();

  useEffect(() => {
    const handleNewMessage = (newMessage: Omit<Message, 'id' | 'status'>) => {
        setMessages(prevMessages => [
            { 
                ...newMessage, 
                id: prevMessages.length > 0 ? Math.max(...prevMessages.map(m => m.id)) + 1 : 1, 
                status: 'unread' 
            },
            ...prevMessages
        ]);
        toast({
            title: "New Message Received!",
            description: `From: ${newMessage.name}`,
        });
    };

    on('newMessage', handleNewMessage);

    return () => {
        // In a real app you might need a way to turn this off, but for this demo it's fine.
    };
  }, [toast]);

  if (!isAuthenticated) {
    return <AdminLogin onLoginSuccess={() => setIsAuthenticated(true)} />;
  }

  const toggleStatus = (id: number) => {
    setMessages(messages.map(msg => msg.id === id ? { ...msg, status: msg.status === 'read' ? 'unread' : 'read' } : msg));
  };

  const deleteMessage = (id: number) => {
    setMessages(messages.filter(msg => msg.id !== id));
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
            <Button variant="ghost" size="icon" onClick={() => toggleStatus(msg.id)}>
              {msg.status === 'read' ? <MailOpen className="h-4 w-4" /> : <Mail className="h-4 w-4" />}
               <span className="sr-only">Mark as {msg.status === 'read' ? 'Unread' : 'Read'}</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => deleteMessage(msg.id)}>
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
                <Button variant="outline" onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                </Button>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="all">
                    <TabsList>
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="unread">Unread ({messages.filter(m => m.status === 'unread').length})</TabsTrigger>
                        <TabsTrigger value="read">Read</TabsTrigger>
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
