
'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { handleContactFormSubmission } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full h-12 text-lg sheen-effect bg-gradient-to-r from-primary to-blue-400 hover:from-primary/90 hover:to-blue-400/90">
      {pending ? 'Sending...' : <>Send Message <Send /></>}
    </Button>
  );
}

export function ContactForm() {
  const initialState = { message: '', errors: {}, success: false };
  const [state, dispatch] = useActionState(handleContactFormSubmission, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      toast({
        title: 'Message Sent!',
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state.message && !state.errors) {
       toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={dispatch} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <Input id="name" name="name" placeholder="Your Name" required />
          {state.errors?.name && <p className="text-destructive text-sm">{state.errors.name[0]}</p>}
        </div>
        <div className="space-y-2">
          <Input id="email" name="email" type="email" placeholder="Your Email" required />
          {state.errors?.email && <p className="text-destructive text-sm">{state.errors.email[0]}</p>}
        </div>
      </div>
      <div className="space-y-2">
        <Textarea id="message" name="message" placeholder="Your Message" rows={5} required />
        {state.errors?.message && <p className="text-destructive text-sm">{state.errors.message[0]}</p>}
      </div>
      <SubmitButton />
    </form>
  );
}
