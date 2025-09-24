
'use server';

import { addMessage, getMessages, deleteMessage, toggleMessageStatus } from '@/lib/message-store';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const ContactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
});

export async function handleContactFormSubmission(prevState: any, formData: FormData) {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed. Please check your input.',
    };
  }

  try {
    await addMessage(validatedFields.data);
    revalidatePath('/'); // Revalidate the homepage if the contact form is there
    revalidatePath('/admin'); // Revalidate admin page to show new message
    return {
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
    };
  } catch (error) {
    console.error('Error submitting message:', error);
    return {
      message: 'An unexpected error occurred. Please try again.',
    };
  }
}

export async function verifyAdminPassword(password: string): Promise<boolean> {
  // Directly compare the provided password with the one from environment variables
  return password === process.env.ADMIN_PASSWORD;
}


export async function getAdminMessages() {
  return await getMessages();
}

export async function deleteAdminMessage(id: string) {
  const success = await deleteMessage(id);
  revalidatePath('/admin');
  return success;
}

export async function toggleAdminMessageStatus(id: string) {
  const success = await toggleMessageStatus(id);
  revalidatePath('/admin');
  return success;
}

    