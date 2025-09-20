
'use server';

import { db } from './firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, serverTimestamp, orderBy, query } from 'firebase/firestore';

export type Message = {
  id: string; // Firestore document ID
  name: string;
  email: string;
  message: string;
  status: 'read' | 'unread';
  createdAt: any; // Firestore Timestamp
};

const messagesCollection = collection(db, 'contactMessages');

export async function getMessages(): Promise<Message[]> {
  const q = query(messagesCollection, orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Message));
}

export async function addMessage(data: { name: string; email: string; message: string }): Promise<Message> {
  const newMessage = {
    ...data,
    status: 'unread' as const,
    createdAt: serverTimestamp(),
  };
  const docRef = await addDoc(messagesCollection, newMessage);
  return { id: docRef.id, ...newMessage };
}

export async function toggleMessageStatus(id: string): Promise<Message | undefined> {
   const docRef = doc(db, 'contactMessages', id);
   const messages = await getMessages();
   const message = messages.find(m => m.id === id);
   if (message) {
     const newStatus = message.status === 'read' ? 'unread' : 'read';
     await updateDoc(docRef, { status: newStatus });
     return { ...message, status: newStatus };
   }
   return undefined;
}

export async function deleteMessage(id: string): Promise<boolean> {
  try {
    const docRef = doc(db, 'contactMessages', id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error("Error deleting message: ", error);
    return false;
  }
}
