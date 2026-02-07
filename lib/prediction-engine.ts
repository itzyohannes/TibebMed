import { diseases, type Disease } from "./data/diseases"
import { traditionalMedicines, type TraditionalMedicine } from "./data/medicines"

export interface PredictionResult {
  disease: Disease
  confidence: number
  matchedSymptoms: string[]
  totalSymptoms: number
  medicines: TraditionalMedicine[]
  topInfluencingSymptoms: { symptomId: string; weight: number }[]
}

/**
 * Prediction engine using a weighted scoring algorithm that simulates
 * Random Forest-style classification based on symptom-disease associations.
 *
 * For each disease, it computes a weighted score based on:
 * 1. Sum of weights for matched symptoms
 * 2. Proportion of the disease's symptoms that were matched
 * 3. Normalization to produce a confidence score
 */
export function predictDiseases(selectedSymptomIds: string[]): PredictionResult[] {
  if (selectedSymptomIds.length === 0) return []

  const results: PredictionResult[] = []

  for (const disease of diseases) {
    // Find matched symptoms
    const matchedSymptoms = selectedSymptomIds.filter((s) =>
      disease.symptoms.includes(s)
    )

    if (matchedSymptoms.length === 0) continue

    // Calculate weighted score
    let weightedScore = 0
    for (const symptom of matchedSymptoms) {
      weightedScore += disease.symptomWeights[symptom] || 0.5
    }

    // Calculate max possible score for this disease
    const maxPossibleScore = Object.values(disease.symptomWeights).reduce(
      (sum, w) => sum + w,
      0
    )

    // Coverage: what proportion of the disease's symptoms are present
    const coverage = matchedSymptoms.length / disease.symptoms.length

    // Precision: what proportion of selected symptoms match this disease
    const precision = matchedSymptoms.length / selectedSymptomIds.length

    // Weighted confidence combining multiple factors
    const scoreRatio = maxPossibleScore > 0 ? weightedScore / maxPossibleScore : 0
    const confidence = (scoreRatio * 0.45 + coverage * 0.35 + precision * 0.2) * 100

    // Get top influencing symptoms (sorted by weight)
    const topInfluencingSymptoms = matchedSymptoms
      .map((s) => ({ symptomId: s, weight: disease.symptomWeights[s] || 0.5 }))
      .sort((a, b) => b.weight - a.weight)
      .slice(0, 5)

    // Find related traditional medicines
    const medicines = traditionalMedicines.filter((m) =>
      m.diseases.includes(disease.id)
    )

    results.push({
      disease,
      confidence: Math.min(confidence, 97), // Cap at 97% to avoid false certainty
      matchedSymptoms,
      totalSymptoms: disease.symptoms.length,
      medicines,
      topInfluencingSymptoms,
    })
  }

  // Sort by confidence descending, return top 3
  return results.sort((a, b) => b.confidence - a.confidence).slice(0, 3)
}

export function getMedicinesForDisease(diseaseId: string): TraditionalMedicine[] {
  return traditionalMedicines.filter((m) => m.diseases.includes(diseaseId))
}

export function getAllMedicines(): TraditionalMedicine[] {
  return traditionalMedicines
}

export function getDiseaseById(id: string): Disease | undefined {
  return diseases.find((d) => d.id === id)
}
