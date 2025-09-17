'use server';

// This is a simple in-memory store for messages.
// It's not suitable for production use as it will be reset on every server restart.
// For a real application, you would use a database like Firestore.

export type Message = {
  id: number;
  name: string;
  email: string;
  message: string;
  status: 'read' | 'unread';
  createdAt: Date;
};

let messages: Message[] = [
  { id: 1, name: 'Jane Doe', email: 'jane@example.com', message: 'I love your new collection! When will the winter jackets be back in stock?', status: 'unread', createdAt: new Date() },
  { id: 2, name: 'John Smith', email: 'john@example.com', message: 'I have a question about my recent order #12345.', status: 'unread', createdAt: new Date() },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', message: 'Just wanted to say hi! Your website is beautiful.', status: 'read', createdAt: new Date() },
];

let nextId = messages.length + 1;

// We wrap these operations in functions that return Promises to better simulate
// a real database interaction, which would be asynchronous.

export async function getMessages(): Promise<Message[]> {
  // Return messages sorted by newest first
  return Promise.resolve([...messages].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()));
}

export async function addMessage(data: { name: string; email: string; message: string }): Promise<Message> {
  const newMessage: Message = {
    id: nextId++,
    ...data,
    status: 'unread',
    createdAt: new Date(),
  };
  messages.push(newMessage);
  return Promise.resolve(newMessage);
}

export async function toggleMessageStatus(id: number): Promise<Message | undefined> {
   const message = messages.find(m => m.id === id);
   if (message) {
     message.status = message.status === 'read' ? 'unread' : 'read';
     return Promise.resolve(message);
   }
   return Promise.resolve(undefined);
}

export async function deleteMessage(id: number): Promise<boolean> {
  const index = messages.findIndex(m => m.id === id);
  if (index !== -1) {
    messages.splice(index, 1);
    return Promise.resolve(true);
  }
  return Promise.resolve(false);
}
