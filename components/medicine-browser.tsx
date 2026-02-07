"use client"

import { useState, useMemo } from "react"
import { traditionalMedicines } from "@/lib/data/medicines"
import { diseases } from "@/lib/data/diseases"
import { cn } from "@/lib/utils"
import {
  Search,
  X,
  Leaf,
  MapPin,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

const plantTypes = [
  "All",
  "Herb",
  "Tree",
  "Shrub",
  "Bulb",
  "Rhizome",
  "Succulent",
  "Bee product",
] as const

export function MedicineBrowser() {
  const [search, setSearch] = useState("")
  const [activePlantType, setActivePlantType] = useState("All")
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const diseaseNameMap = useMemo(
    () => new Map(diseases.map((d) => [d.id, d.name])),
    []
  )

  const filtered = useMemo(() => {
    let items = traditionalMedicines
    if (activePlantType !== "All") {
      items = items.filter(
        (m) => m.plantType.toLowerCase() === activePlantType.toLowerCase()
      )
    }
    if (search.trim()) {
      const q = search.toLowerCase()
      items = items.filter(
        (m) =>
          m.localName.toLowerCase().includes(q) ||
          m.englishName.toLowerCase().includes(q) ||
          m.scientificName.toLowerCase().includes(q) ||
          m.traditionalUsage.toLowerCase().includes(q)
      )
    }
    return items
  }, [search, activePlantType])

  return (
    <div>
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, plant, or usage..."
          className="h-11 w-full rounded-lg border bg-card pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Plant type filter */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {plantTypes.map((type) => (
          <button
            key={type}
            onClick={() => setActivePlantType(type)}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
              activePlantType === type
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            )}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="mt-4 text-sm text-muted-foreground">
        Showing {filtered.length} of {traditionalMedicines.length} remedies
      </p>

      {/* Medicine cards */}
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {filtered.map((medicine) => {
          const isExpanded = expandedId === medicine.id
          return (
            <div
              key={medicine.id}
              className="rounded-xl border bg-card overflow-hidden"
            >
              <div className="p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Leaf className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-lg font-bold text-foreground">
                      {medicine.localName}
                    </h3>
                    <p className="text-sm italic text-muted-foreground">
                      {medicine.scientificName}
                    </p>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                        {medicine.englishName}
                      </span>
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
                        {medicine.plantType}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {medicine.traditionalUsage}
                </p>

                {/* Diseases this helps */}
                <div className="mt-3 flex flex-wrap gap-1">
                  {medicine.diseases.map((dId) => (
                    <span
                      key={dId}
                      className="rounded-full border bg-muted/50 px-2 py-0.5 text-xs text-foreground"
                    >
                      {diseaseNameMap.get(dId) || dId}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() =>
                    setExpandedId(isExpanded ? null : medicine.id)
                  }
                  className="mt-3 flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80"
                >
                  {isExpanded ? "Show less" : "Show details"}
                  {isExpanded ? (
                    <ChevronUp className="h-3.5 w-3.5" />
                  ) : (
                    <ChevronDown className="h-3.5 w-3.5" />
                  )}
                </button>

                {isExpanded && (
                  <div className="mt-4 flex flex-col gap-3 border-t pt-4">
                    <div>
                      <p className="text-xs font-semibold text-foreground">
                        Part Used
                      </p>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {medicine.partUsed}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground">
                        Preparation Method
                      </p>
                      <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                        {medicine.preparationMethod}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        {medicine.region}
                      </p>
                    </div>
                    <div className="rounded-lg bg-accent/10 p-3">
                      <div className="flex items-center gap-1.5">
                        <AlertTriangle className="h-3.5 w-3.5 text-accent-foreground" />
                        <p className="text-xs font-semibold text-accent-foreground">
                          Safety Notes
                        </p>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-accent-foreground/80">
                        {medicine.safetyNotes}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <div className="mt-6 rounded-lg border border-dashed bg-muted/30 py-12 text-center">
          <p className="text-sm text-muted-foreground">
            No medicines found matching your search.
          </p>
        </div>
      )}
    </div>
  )
}
