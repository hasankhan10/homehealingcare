import SymptomCheckerForm from "@/components/symptom-checker-form";
import { Bot, AlertTriangle } from "lucide-react";

export default function SymptomCheckerPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
            <Bot className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold font-headline">AI Symptom Checker</h1>
            <p className="mt-4 text-lg sm:text-xl text-muted-foreground">
              Describe your symptoms below to get preliminary guidance. This tool is for informational purposes only.
            </p>
        </div>

        <div className="mt-8 max-w-3xl mx-auto">
            <SymptomCheckerForm />
        </div>

        <div className="mt-8 max-w-3xl mx-auto bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md" role="alert">
          <div className="flex">
            <div className="py-1">
              <AlertTriangle className="h-6 w-6 text-yellow-500 mr-4" />
            </div>
            <div>
              <p className="font-bold">Disclaimer</p>
              <p className="text-sm">
                This symptom checker does not provide a medical diagnosis. It is intended for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
