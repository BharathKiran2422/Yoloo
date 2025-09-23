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
    const validatedData = contactFormSchema.parse(values);
    await addMessage(validatedData);
    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        message: 'Invalid form data: ' + error.errors.map(e => e.message).join(', ')
      };
    }
    console.error('Contact form submission error:', error);
    return { 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    };
  }
}

export async function verifyAdminPassword(password: string): Promise<boolean> {
  try {
    return password === process.env.ADMIN_PASSWORD;
  } catch (error) {
    console.error('Admin password verification error:', error);
    return false;
  }
}
