'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useState } from 'react';
import { handleSizeRecommendation } from '@/app/actions';
import type { AiSizeRecommendationOutput } from '@/ai/flows/ai-size-recommendation';
import { Loader2, Sparkles, Wand2 } from 'lucide-react';

const formSchema = z.object({
  height: z.coerce.number().min(50, { message: 'Height must be at least 50 cm.' }).max(250),
  weight: z.coerce.number().min(20, { message: 'Weight must be at least 20 kg.' }).max(300),
  clothingType: z.string().min(1, { message: 'Please select a clothing type.' }),
  usualFitPreference: z.string().min(1, { message: 'Please select your usual fit.' }),
});

export function AiStylist() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AiSizeRecommendationOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      height: 175,
      weight: 70,
      clothingType: '',
      usualFitPreference: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    setError(null);
    try {
      const recommendation = await handleSizeRecommendation(values);
      setResult(recommendation);
    } catch (e) {
      setError('Sorry, we couldn\'t generate a recommendation at this time. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="ai-stylist" className="py-16 md:py-24 bg-secondary/30 dark:bg-card/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold inline-flex items-center">
            <Wand2 className="mr-3 h-8 w-8 text-primary dark:text-primary-foreground" />
            AI Personal Stylist
          </h2>
          <p className="text-lg text-muted-foreground mt-2">Get the perfect fit, every time. Powered by AI.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <Card>
            <CardHeader>
              <CardTitle>Find Your Size</CardTitle>
              <CardDescription>Fill in your details and let our AI do the rest.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="height"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Height (cm)</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="e.g., 175" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="weight"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Weight (kg)</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="e.g., 70" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="clothingType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Clothing Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a clothing type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="shirt">Shirt</SelectItem>
                            <SelectItem value="t-shirt">T-Shirt</SelectItem>
                            <SelectItem value="pants">Pants</SelectItem>
                            <SelectItem value="jacket">Jacket</SelectItem>
                            <SelectItem value="dress">Dress</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="usualFitPreference"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Usual Fit Preference</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your preferred fit" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="slim">Slim</SelectItem>
                            <SelectItem value="regular">Regular</SelectItem>
                            <SelectItem value="oversized">Oversized</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...</>
                    ) : (
                      <>Get Recommendation</>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          <div className="flex items-center justify-center min-h-[300px] bg-background/50 rounded-lg p-8">
            {isLoading && (
              <div className="text-center text-muted-foreground">
                <Loader2 className="mx-auto h-12 w-12 animate-spin mb-4" />
                <p className="font-semibold">Our AI is working its magic...</p>
              </div>
            )}
            {error && <p className="text-destructive text-center">{error}</p>}
            {result && (
              <Card className="w-full bg-background animate-fade-in-bounce">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Sparkles className="mr-2 h-6 w-6 text-primary dark:text-primary-foreground" />
                    Your Recommendation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-center">
                  <p className="text-muted-foreground">We recommend size:</p>
                  <p className="text-4xl font-bold font-headline text-primary dark:text-primary-foreground">{result.sizeRecommendation}</p>
                  <p className="text-sm text-muted-foreground pt-4">{result.reasoning}</p>
                </CardContent>
              </Card>
            )}
            {!isLoading && !result && !error && (
                <div className="text-center text-muted-foreground">
                    <Wand2 className="mx-auto h-12 w-12 mb-4" />
                    <p className="font-semibold">Your recommendation will appear here.</p>
                </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
