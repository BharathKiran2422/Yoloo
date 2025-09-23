// src/app/actions.ts

'use server';

import { z } from 'zod';
import { aiSizeRecommendation } from '@/ai/flows/ai-size-recommendation';
import type { AiSizeRecommendationInput } from '@/ai/flows/ai-size-recommendation';
import { addMessage } from '@/lib/message-store';

export async function handleSizeRecommendation(input: AiSizeRecommendationInput) {
  try {
    const result = await aiSizeRecommendation(input);
    return result;
  } catch (error) {
    console.error('Size recommendation error:', error);
    throw new Error('Failed to get size recommendation');
  }
}

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function handleContactFormSubmission(
  values: z.infer<typeof contactFormSchema>
): Promise<{ success: boolean; message: string }> {
  try {
    // Validate input first
    const validatedData = contactFormSchema.parse(values);
    
    // Add message to database
    await addMessage(validatedData);
    
    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error('Contact form submission error:', error);
    
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        message: 'Invalid form data: ' + error.errors.map(e => e.message).join(', ')
      };
    }
    
    return { 
      success: false, 
      message: 'Failed to send message. Please try again.' 
    };
  }
}

export async function verifyAdminPassword(password: string): Promise<boolean> {
  try {
    // This is a more secure way to check the password.
    // The environment variable is only accessed on the server.
    return password === process.env.ADMIN_PASSWORD;
  } catch (error) {
    console.error('Admin password verification error:', error);
    return false;
  }
}

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

// // src/app/actions.ts

// 'use server';

// import { z } from 'zod';
// import { aiSizeRecommendation } from '@/ai/flows/ai-size-recommendation';
// import type { AiSizeRecommendationInput } from '@/ai/flows/ai-size-recommendation';
// import { addMessage } from '@/lib/message-store';

// export async function handleSizeRecommendation(input: AiSizeRecommendationInput) {
//   const result = await aiSizeRecommendation(input);
//   return result;
// }

// const contactFormSchema = z.object({
//   name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
//   email: z.string().email({ message: 'Please enter a valid email.' }),
//   message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
// });

// export async function handleContactFormSubmission(values: z.infer<typeof contactFormSchema>) {
//   try {
//     await addMessage(values);
//     return { success: true, message: 'Message Sent!' };
//   } catch (error) {
//     console.error('Contact form submission error:', error);
//     return { success: false, message: 'Something went wrong. Please try again.' };
//   }
// }

// export async function verifyAdminPassword(password: string): Promise<boolean> {
//   // This is a more secure way to check the password.
//   // The environment variable is only accessed on the server.
//   return password === process.env.ADMIN_PASSWORD;
// }
