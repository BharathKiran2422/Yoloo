'use server';

import { z } from 'zod';
import { aiSizeRecommendation } from '@/ai/flows/ai-size-recommendation';
import type { AiSizeRecommendationInput } from '@/ai/flows/ai-size-recommendation';

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
    // Here you would typically send an email or save to a database.
    // For this example, we'll just log it to the console and simulate a success response.
    console.log('New contact form submission:');
    console.log(`- Name: ${values.name}`);
    console.log(`- Email: ${values.email}`);
    console.log(`- Message: ${values.message}`);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true, message: 'Message Sent!' };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return { success: false, message: 'Something went wrong.' };
  }
}
