import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function AdminPage() {
  // This is a placeholder. In a real application, you would fetch these messages from a database.
  const messages = [
    { id: 1, name: 'Jane Doe', email: 'jane@example.com', message: 'I love your new collection! When will the winter jackets be back in stock?' },
    { id: 2, name: 'John Smith', email: 'john@example.com', message: 'I have a question about my recent order #12345.' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', message: 'Just wanted to say hi! Your website is beautiful.' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <Card>
        <CardHeader>
          <CardTitle>Contact Messages</CardTitle>
          <CardDescription>Messages submitted through the contact form.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Message</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {messages.map((msg) => (
                <TableRow key={msg.id}>
                  <TableCell className="font-medium">{msg.name}</TableCell>
                  <TableCell>{msg.email}</TableCell>
                  <TableCell>{msg.message}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
