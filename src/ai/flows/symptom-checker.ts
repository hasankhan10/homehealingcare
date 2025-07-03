'use server';

/**
 * @fileOverview This file defines a Genkit flow for an AI-powered symptom checker.
 *
 * The flow takes a description of symptoms as input and returns preliminary guidance
 * and potential health concerns.
 *
 * @fileOverview
 * symptomChecker - A function that takes symptom descriptions and returns health guidance.
 * SymptomCheckerInput - The input type for the symptomChecker function.
 * SymptomCheckerOutput - The output type for the symptomChecker function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SymptomCheckerInputSchema = z.object({
  symptoms: z
    .string()
    .describe('A description of the symptoms experienced by the patient.'),
});
export type SymptomCheckerInput = z.infer<typeof SymptomCheckerInputSchema>;

const SymptomCheckerOutputSchema = z.object({
  preliminaryGuidance: z
    .string()
    .describe(
      'Preliminary guidance based on the described symptoms. Includes potential health concerns, recommended next steps, and potential over-the-counter medications.'
    ),
});
export type SymptomCheckerOutput = z.infer<typeof SymptomCheckerOutputSchema>;

export async function symptomChecker(input: SymptomCheckerInput): Promise<SymptomCheckerOutput> {
  return symptomCheckerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'symptomCheckerPrompt',
  input: {schema: SymptomCheckerInputSchema},
  output: {schema: SymptomCheckerOutputSchema},
  prompt: `You are an AI-powered symptom checker. Your goal is to provide short, effective, and preliminary guidance.

  Based on the symptoms provided:
  {{symptoms}}

  List potential health concerns, suggest possible next steps, and mention relevant over-the-counter medications that could help alleviate the symptoms.

  You must strongly emphasize that this is not a medical diagnosis and the user must consult a healthcare professional for proper advice and treatment. Do not generate a long response. Keep it concise.`,
});

const symptomCheckerFlow = ai.defineFlow(
  {
    name: 'symptomCheckerFlow',
    inputSchema: SymptomCheckerInputSchema,
    outputSchema: SymptomCheckerOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
