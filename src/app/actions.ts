// src/app/actions.ts

'use server';

import { aiSizeRecommendation } from '@/ai/flows/ai-size-recommendation';
import type { AiSizeRecommendationInput } from '@/ai/flows/ai-size-recommendation';

export async function handleSizeRecommendation(input: AiSizeRecommendationInput) {
  try {
    const result = await aiSizeRecommendation(input);
    return result;
  } catch (error) {
    console.error('Size recommendation error:', error);
    throw new Error('Failed to get size recommendation');
  }
}
