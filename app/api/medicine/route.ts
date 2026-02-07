import { NextRequest, NextResponse } from "next/server"
import { getMedicinesForDisease, getAllMedicines } from "@/lib/prediction-engine"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const disease = searchParams.get("disease")

  if (disease) {
    const medicines = getMedicinesForDisease(disease)
    return NextResponse.json({ medicines })
  }

  const allMedicines = getAllMedicines()
  return NextResponse.json({ medicines: allMedicines })
}
