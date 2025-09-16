'use server';

/**
 * @fileOverview An AI agent that provides personalized style suggestions based on user preferences and browsing history.
 *
 * - getStyleSuggestions - A function that generates style suggestions for the user.
 * - StyleSuggestionsInput - The input type for the getStyleSuggestions function.
 * - StyleSuggestionsOutput - The return type for the getStyleSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const StyleSuggestionsInputSchema = z.object({
  preferences: z
    .string()
    .describe('The user\u0027s style preferences, such as favorite colors, brands, and clothing types.'),
  browsingHistory: z
    .string()
    .describe('The user\u0027s recent browsing history on the Yoloo! website.'),
  height: z.number().describe('The user\u0027s height in centimeters.'),
  weight: z.number().describe('The user\u0027s weight in kilograms.'),
  usualFit: z
    .string()
    .describe(
      'The user\u0027s usual fit preferences, such as slim, regular, or oversized.'
    ),
});
export type StyleSuggestionsInput = z.infer<typeof StyleSuggestionsInputSchema>;

const StyleSuggestionsOutputSchema = z.object({
  styleSuggestions: z
    .string()
    .describe('A list of personalized style suggestions based on the user\u0027s preferences and browsing history.'),
  recommendedSize: z
    .string()
    .describe(
      'The recommended clothing size for the user based on their height, weight, and usual fit preferences.'
    ),
});
export type StyleSuggestionsOutput = z.infer<typeof StyleSuggestionsOutputSchema>;

export async function getStyleSuggestions(
  input: StyleSuggestionsInput
): Promise<StyleSuggestionsOutput> {
  return getStyleSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'styleSuggestionsPrompt',
  input: {schema: StyleSuggestionsInputSchema},
  output: {schema: StyleSuggestionsOutputSchema},
  prompt: `You are a personal stylist for Yoloo!, an online fashion retailer.

  Based on the user's preferences, browsing history, height, weight and usual fit, provide personalized style suggestions and a recommended clothing size.

  Preferences: {{{preferences}}}
  Browsing History: {{{browsingHistory}}}
  Height (cm): {{{height}}}
  Weight (kg): {{{weight}}}
  Usual Fit: {{{usualFit}}}

  Style Suggestions:
  Recommended Size: `,
});

const getStyleSuggestionsFlow = ai.defineFlow(
  {
    name: 'getStyleSuggestionsFlow',
    inputSchema: StyleSuggestionsInputSchema,
    outputSchema: StyleSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
