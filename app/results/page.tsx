import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { PredictionResults } from "@/components/prediction-results"

export const metadata: Metadata = {
  title: "Prediction Results - TibebMed",
  description: "View your disease prediction results and traditional medicine recommendations.",
}

export default async function ResultsPage({
  searchParams,
}: {
  searchParams: Promise<{ symptoms?: string }>
}) {
  const params = await searchParams
  const symptomsParam = params.symptoms

  if (!symptomsParam) {
    redirect("/symptom-checker")
  }

  const symptomIds = symptomsParam.split(",").filter(Boolean)

  if (symptomIds.length < 2) {
    redirect("/symptom-checker")
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 lg:px-8 lg:py-12">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-foreground">
          Prediction Results
        </h1>
        <p className="mt-2 text-muted-foreground">
          Based on your selected symptoms, here are the most likely conditions
          and recommended Ethiopian traditional medicines.
        </p>
      </div>

      <PredictionResults symptomIds={symptomIds} />
    </div>
  )
}
