
'use server';

import { db } from './firebase';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  serverTimestamp,
  orderBy,
  getDoc,
  Timestamp,
  query,
} from 'firebase/firestore';

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

const messagesCollection = collection(db, 'messages');

// Create
export async function addMessage(message: NewMessage): Promise<string> {
  const docRef = await addDoc(messagesCollection, {
    ...message,
    timestamp: serverTimestamp(),
    isRead: false,
  });
  return docRef.id;
}

// Read
export async function getMessages(): Promise<Message[]> {
  const querySnapshot = await getDocs(
    query(messagesCollection, orderBy('timestamp', 'desc'))
  );
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
    await deleteDoc(doc(db, 'messages', id));
    return true;
  } catch (error) {
    console.error("Error deleting document: ", error);
    return false;
  }
}

// Update
export async function toggleMessageStatus(id: string): Promise<boolean> {
   try {
    const messageRef = doc(db, 'messages', id);
    const messageSnap = await getDoc(messageRef);

    if (!messageSnap.exists()) {
      console.log('No such document!');
      return false;
    }
    
    const currentStatus = messageSnap.data().isRead;
    await updateDoc(messageRef, {
      isRead: !currentStatus,
    });
     return true;
  } catch (error) {
    console.error("Error updating document: ", error);
    return false;
  }
}
