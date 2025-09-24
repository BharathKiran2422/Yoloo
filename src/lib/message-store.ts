
import { db } from './firebase';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  serverTimestamp,
  query,
  orderBy,
  Timestamp,
  getDoc,
} from 'firebase/firestore';

export interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Timestamp | string;
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
    createdAt: serverTimestamp(),
    isRead: false,
  });
  return docRef.id;
}

// Read
export async function getMessages(): Promise<Message[]> {
  const q = query(messagesCollection, orderBy('createdAt', 'desc'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => {
    const data = doc.data();
    // Convert Firestore Timestamp to a serializable format (ISO string)
    const createdAt = data.createdAt;
    return {
      id: doc.id,
      ...data,
      createdAt: createdAt instanceof Timestamp ? createdAt.toDate().toISOString() : new Date().toISOString(),
    } as Message;
  });
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

    