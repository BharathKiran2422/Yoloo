// src/lib/message-store.ts

import { db } from './firebase';
import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  serverTimestamp, 
  orderBy, 
  query, 
  getDoc,
  Timestamp 
} from 'firebase/firestore';

export type Message = {
  id: string; // Firestore document ID
  name: string;
  email: string;
  message: string;
  status: 'read' | 'unread';
  createdAt: Timestamp | Date; // More specific typing
};

const messagesCollection = collection(db, 'messages');

export async function getMessages(): Promise<Message[]> {
  try {
    const q = query(messagesCollection, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ 
      id: doc.id, 
      ...doc.data() 
    } as Message));
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw new Error('Failed to fetch messages');
  }
}

export async function addMessage(
  data: { name: string; email: string; message: string }
): Promise<void> {
  try {
    const newMessage = {
      name: data.name,
      email: data.email,
      message: data.message,
      status: 'unread' as const,
      createdAt: serverTimestamp(),
    };
    
    await addDoc(messagesCollection, newMessage);
  } catch (error) {
    console.error('Error adding message:', error);
    throw new Error('Failed to save message');
  }
}

export async function toggleMessageStatus(id: string): Promise<Message | null> {
  try {
    const docRef = doc(db, 'messages', id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const message = { id: docSnap.id, ...docSnap.data() } as Message;
      const newStatus = message.status === 'read' ? 'unread' : 'read';
      await updateDoc(docRef, { status: newStatus });
      return { ...message, status: newStatus };
    }
    return null;
  } catch (error) {
    console.error('Error toggling message status:', error);
    throw new Error('Failed to update message status');
  }
}

export async function deleteMessage(id: string): Promise<void> {
  try {
    const docRef = doc(db, 'messages', id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Error deleting message:', error);
    throw new Error('Failed to delete message');
  }
}