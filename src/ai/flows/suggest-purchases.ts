// src/ai/flows/suggest-purchases.ts
'use server';

/**
 * @fileOverview Provides AI-driven purchase suggestions based on the user's spending habits and remaining balance.
 *
 * - suggestPurchases - A function that returns purchase suggestions.
 * - SuggestPurchasesInput - The input type for the suggestPurchases function.
 * - SuggestPurchasesOutput - The return type for the suggestPurchases function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';
import {Item} from '@/services/item-service';

const SuggestPurchasesInputSchema = z.object({
  balance: z.number().describe('The user\'s remaining balance.'),
  purchasedItems: z.array(z.object({itemId: z.string(), quantity: z.number()})).describe('The items the user has already purchased with quantity.'),
  availableItems: z.array(z.object({
    id: z.string(),
    name: z.string(),
    imageUrl: z.string(),
    cost: z.number(),
  })).describe('All available items for purchase.'),
});

export type SuggestPurchasesInput = z.infer<typeof SuggestPurchasesInputSchema>;

const SuggestPurchasesOutputSchema = z.object({
  suggestions: z.array(z.object({
    itemId: z.string().describe('The ID of the suggested item.'),
    reason: z.string().describe('The reason why this item is suggested.'),
  })).describe('A list of suggested items with reasons.'),
});

export type SuggestPurchasesOutput = z.infer<typeof SuggestPurchasesOutputSchema>;

export async function suggestPurchases(input: SuggestPurchasesInput): Promise<SuggestPurchasesOutput> {
  return suggestPurchasesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestPurchasesPrompt',
  input: {
    schema: z.object({
      balance: z.number().describe('The user\'s remaining balance.'),
      purchasedItems: z.array(z.object({itemId: z.string(), quantity: z.number()})).describe('The items the user has already purchased with quantity.'),
      availableItems: z.array(z.object({
        id: z.string(),
        name: z.string(),
        imageUrl: z.string(),
        cost: z.number(),
      })).describe('All available items for purchase.'),
    }),
  },
  output: {
    schema: z.object({
      suggestions: z.array(z.object({
        itemId: z.string().describe('The ID of the suggested item.'),
        reason: z.string().describe('The reason why this item is suggested, with a bit of humor.'),
      })).describe('A list of suggested items with reasons.'),
    }),
  },
  prompt: `You are a humorous AI assistant helping a user spend Elon Musk\'s money. The user has a remaining balance of {{balance}}. They have already purchased the following items:

{{#each purchasedItems}}
  - {{quantity}} x {{itemId}}
{{/each}}

Suggest some items from the following list of available items for purchase, taking into account their balance and what they\'ve already purchased. Include a humorous reason for each suggestion.

{{#each availableItems}}
  - {{id}}: {{name}} (Cost: {{cost}})
{{/each}}
`,
});

const suggestPurchasesFlow = ai.defineFlow<
  typeof SuggestPurchasesInputSchema,
  typeof SuggestPurchasesOutputSchema
>({
  name: 'suggestPurchasesFlow',
  inputSchema: SuggestPurchasesInputSchema,
  outputSchema: SuggestPurchasesOutputSchema,
}, async input => {
  const {output} = await prompt(input);
  return output!;
});
