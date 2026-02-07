import { NextRequest, NextResponse } from "next/server"
import { predictDiseases } from "@/lib/prediction-engine"
import { symptoms } from "@/lib/data/symptoms"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { symptomIds } = body as { symptomIds: string[] }

    if (!Array.isArray(symptomIds) || symptomIds.length < 2) {
      return NextResponse.json(
        { error: "Please provide at least 2 symptoms" },
        { status: 400 }
      )
    }

    // Validate symptom IDs
    const validIds = new Set(symptoms.map((s) => s.id))
    const validatedSymptoms = symptomIds.filter((id) => validIds.has(id))

    if (validatedSymptoms.length < 2) {
      return NextResponse.json(
        { error: "Please provide at least 2 valid symptoms" },
        { status: 400 }
      )
    }

    const predictions = predictDiseases(validatedSymptoms)

    return NextResponse.json({
      predictions: predictions.map((p) => ({
        disease: {
          id: p.disease.id,
          name: p.disease.name,
          description: p.disease.description,
          severity: p.disease.severity,
          commonAge: p.disease.commonAge,
          explanation: p.disease.explanation,
        },
        confidence: Math.round(p.confidence * 10) / 10,
        matchedSymptoms: p.matchedSymptoms,
        totalSymptoms: p.totalSymptoms,
        topInfluencingSymptoms: p.topInfluencingSymptoms,
        medicines: p.medicines.map((m) => ({
          id: m.id,
          localName: m.localName,
          scientificName: m.scientificName,
          englishName: m.englishName,
          plantType: m.plantType,
          partUsed: m.partUsed,
          preparationMethod: m.preparationMethod,
          traditionalUsage: m.traditionalUsage,
          safetyNotes: m.safetyNotes,
          region: m.region,
        })),
      })),
      selectedSymptomCount: validatedSymptoms.length,
    })
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    )
  }
}
