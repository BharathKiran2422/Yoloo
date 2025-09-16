'use server';

import { z } from 'zod';
import { aiSizeRecommendation } from '@/ai/flows/ai-size-recommendation';
import type { AiSizeRecommendationInput } from '@/ai/flows/ai-size-recommendation';

export async function handleSizeRecommendation(input: AiSizeRecommendationInput) {
  const result = await aiSizeRecommendation(input);
  return result;
}

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function handleContactFormSubmission(values: z.infer<typeof contactFormSchema>) {
  try {
    // Here you would typically send an email, e.g., using a service like Resend or Nodemailer.
    // For this example, we'll just log it to the console and simulate a success response.
    console.log('New contact form submission:');
    console.log(`- Name: ${values.name}`);
    console.log(`- Email: ${values.email}`);
    console.log(`- Message: ${values.message}`);
    console.log('Simulating email to hello@brandsyoloo.co.in');
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return { success: false };
  }
}
