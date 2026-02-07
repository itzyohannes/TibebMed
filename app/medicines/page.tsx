import type { Metadata } from "next"
import { MedicineBrowser } from "@/components/medicine-browser"
import { Leaf } from "lucide-react"

export const metadata: Metadata = {
  title: "Traditional Ethiopian Medicines - TibebMed",
  description:
    "Browse Ethiopian traditional herbal medicines, plants, and natural remedies with preparation methods and safety information.",
}

export default function MedicinesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8 lg:py-12">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Leaf className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="font-serif text-3xl font-bold text-foreground">
              Traditional Medicines
            </h1>
            <p className="text-muted-foreground">
              Ethiopian herbal remedies and natural healing traditions
            </p>
          </div>
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Ethiopia has a rich heritage of traditional medicine, with knowledge passed through
          generations. Below is a curated collection of commonly used herbal remedies,
          including local names, preparation methods, and safety information. This database
          is for educational purposes and is continuously expanding.
        </p>
      </div>

      <MedicineBrowser />
    </div>
  )
}
