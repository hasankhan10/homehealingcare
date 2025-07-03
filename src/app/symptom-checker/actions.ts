"use server";

import { symptomChecker, type SymptomCheckerInput } from "@/ai/flows/symptom-checker";

export async function getGuidance(input: SymptomCheckerInput) {
  try {
    const output = await symptomChecker(input);
    return { success: true, guidance: output.preliminaryGuidance };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to get guidance. Please try again." };
  }
}
