"use client"

import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import { symptoms, symptomCategories, type Symptom } from "@/lib/data/symptoms"
import { cn } from "@/lib/utils"
import { Search, X, Check, ArrowRight, AlertTriangle } from "lucide-react"

export function SymptomSelector() {
  const router = useRouter()
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [isSubmitting, setIsSubmitting] = useState(false)

  const filteredSymptoms = useMemo(() => {
    let filtered = symptoms
    if (activeCategory !== "All") {
      filtered = filtered.filter((s) => s.category === activeCategory)
    }
    if (search.trim()) {
      const q = search.toLowerCase()
      filtered = filtered.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q)
      )
    }
    return filtered
  }, [search, activeCategory])

  const groupedSymptoms = useMemo(() => {
    const groups: Record<string, Symptom[]> = {}
    for (const s of filteredSymptoms) {
      if (!groups[s.category]) groups[s.category] = []
      groups[s.category].push(s)
    }
    return groups
  }, [filteredSymptoms])

  function toggleSymptom(id: string) {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  function handleSubmit() {
    if (selected.size < 2) return
    setIsSubmitting(true)
    const params = new URLSearchParams()
    params.set("symptoms", Array.from(selected).join(","))
    router.push(`/results?${params.toString()}`)
  }

  const selectedSymptoms = symptoms.filter((s) => selected.has(s.id))

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
      {/* Main selector panel */}
      <div className="flex-1">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search symptoms..."
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

        {/* Category tabs */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          <button
            onClick={() => setActiveCategory("All")}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
              activeCategory === "All"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            )}
          >
            All
          </button>
          {symptomCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Symptom list */}
        <div className="mt-6 flex flex-col gap-6">
          {Object.entries(groupedSymptoms).map(([category, categorySymptoms]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-foreground">{category}</h3>
              <div className="mt-2 grid gap-1.5 sm:grid-cols-2">
                {categorySymptoms.map((symptom) => {
                  const isSelected = selected.has(symptom.id)
                  return (
                    <button
                      key={symptom.id}
                      onClick={() => toggleSymptom(symptom.id)}
                      className={cn(
                        "flex items-center gap-3 rounded-lg border px-3 py-2.5 text-left transition-colors",
                        isSelected
                          ? "border-primary bg-primary/5"
                          : "border-border bg-card hover:border-primary/30 hover:bg-muted/50"
                      )}
                    >
                      <div
                        className={cn(
                          "flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors",
                          isSelected
                            ? "border-primary bg-primary"
                            : "border-muted-foreground/30"
                        )}
                      >
                        {isSelected && (
                          <Check className="h-3 w-3 text-primary-foreground" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-foreground">
                          {symptom.name}
                        </p>
                        <p className="truncate text-xs text-muted-foreground">
                          {symptom.description}
                        </p>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          ))}

          {filteredSymptoms.length === 0 && (
            <div className="rounded-lg border border-dashed bg-muted/30 py-12 text-center">
              <p className="text-sm text-muted-foreground">
                No symptoms found matching your search.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar: selected symptoms + submit */}
      <div className="lg:w-80">
        <div className="sticky top-20 rounded-xl border bg-card p-5">
          <h3 className="text-sm font-semibold text-foreground">
            Selected Symptoms ({selected.size})
          </h3>

          {selectedSymptoms.length === 0 ? (
            <p className="mt-3 text-sm text-muted-foreground">
              Select at least 2 symptoms to get a prediction.
            </p>
          ) : (
            <div className="mt-3 flex flex-col gap-1.5">
              {selectedSymptoms.map((s) => (
                <div
                  key={s.id}
                  className="flex items-center justify-between rounded-md bg-primary/5 px-3 py-2"
                >
                  <span className="text-sm text-foreground">{s.name}</span>
                  <button
                    onClick={() => toggleSymptom(s.id)}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {selected.size >= 1 && selected.size < 2 && (
            <div className="mt-3 flex items-center gap-2 rounded-md bg-accent/10 px-3 py-2">
              <AlertTriangle className="h-3.5 w-3.5 text-accent-foreground" />
              <span className="text-xs text-accent-foreground">
                Select at least one more symptom
              </span>
            </div>
          )}

          <button
            onClick={handleSubmit}
            disabled={selected.size < 2 || isSubmitting}
            className={cn(
              "mt-4 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-colors",
              selected.size >= 2
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "cursor-not-allowed bg-muted text-muted-foreground"
            )}
          >
            {isSubmitting ? (
              "Analyzing..."
            ) : (
              <>
                Get Prediction
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>

          {selected.size > 0 && (
            <button
              onClick={() => setSelected(new Set())}
              className="mt-2 w-full text-center text-xs text-muted-foreground hover:text-foreground"
            >
              Clear all
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
