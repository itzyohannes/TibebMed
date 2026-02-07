import type { Metadata } from "next"
import { SymptomSelector } from "@/components/symptom-selector"
import { AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Symptom Checker - TibebMed",
  description:
    "Select your symptoms to receive disease predictions and Ethiopian traditional medicine recommendations.",
}

export default function SymptomCheckerPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8 lg:py-12">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-foreground">
          Symptom Checker
        </h1>
        <p className="mt-2 text-muted-foreground">
          Select the symptoms you are experiencing. Our prediction engine will analyze them
          to suggest possible conditions and traditional Ethiopian remedies.
        </p>
        <div className="mt-4 flex items-start gap-2.5 rounded-lg border border-destructive/20 bg-destructive/5 p-3">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
          <p className="text-xs leading-relaxed text-destructive">
            This tool is for educational purposes only and does not provide medical diagnoses.
            If you are experiencing severe symptoms such as chest pain, difficulty breathing,
            or loss of consciousness, please seek immediate medical attention.
          </p>
        </div>
      </div>

      <SymptomSelector />
    </div>
  )
}
