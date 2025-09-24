
'use server';

import { adminDb } from './firebase-admin';
import {
  Timestamp,
} from 'firebase-admin/firestore';

export interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: Timestamp;
  isRead: boolean;
}

export interface NewMessage {
  name: string;
  email: string;
  message: string;
}

const messagesCollection = adminDb.collection('messages');

// Create
export async function addMessage(message: NewMessage): Promise<string> {
  const docRef = await messagesCollection.add({
    ...message,
    timestamp: Timestamp.now(),
    isRead: false,
  });
  return docRef.id;
}

// Read
export async function getMessages(): Promise<Message[]> {
  const querySnapshot = await messagesCollection.orderBy('timestamp', 'desc').get();
  return querySnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      } as Message)
  );
}

// Delete
export async function deleteMessage(id: string): Promise<boolean> {
  try {
    await messagesCollection.doc(id).delete();
    return true;
  } catch (error) {
    console.error("Error deleting document: ", error);
    return false;
  }
}

// Update
export async function toggleMessageStatus(id: string): Promise<boolean> {
   try {
    const messageRef = messagesCollection.doc(id);
    const messageSnap = await messageRef.get();

    if (!messageSnap.exists) {
      console.log('No such document!');
      return false;
    }
    
    const currentStatus = messageSnap.data()!.isRead;
    await messageRef.update({
      isRead: !currentStatus,
    });
     return true;
  } catch (error) {
    console.error("Error updating document: ", error);
    return false;
  }
}
