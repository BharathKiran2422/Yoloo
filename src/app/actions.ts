
'use server';

import { z } from 'zod';
import { aiSizeRecommendation } from '@/ai/flows/ai-size-recommendation';
import type { AiSizeRecommendationInput } from '@/ai/flows/ai-size-recommendation';
import { addMessage } from '@/lib/message-store';

export async function handleSizeRecommendation(input: AiSizeRecommendationInput) {
  const result = await aiSizeRecommendation(input);
  return result;
}

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function handleContactFormSubmission(values: z.infer<typeof contactFormSchema>) {
  try {
    // Save the message to Firestore
    await addMessage(values);
    
    // Simulate network delay for better user experience
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true, message: 'Message Sent!' };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return { success: false, message: 'Something went wrong. Please try again.' };
  }
}

export async function verifyAdminPassword(password: string): Promise<boolean> {
  // This is a more secure way to check the password.
  // The environment variable is only accessed on the server.
  return password === process.env.ADMIN_PASSWORD;
}
