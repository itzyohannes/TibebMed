import Link from "next/link"
import { DisclaimerBanner } from "@/components/disclaimer-banner"
import {
  Leaf,
  Search,
  Brain,
  Flower2,
  ShieldCheck,
  ArrowRight,
  Heart,
  BookOpen,
} from "lucide-react"

export default function Home() {
  return (
    <>
      <DisclaimerBanner />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(152_55%_28%/0.12),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm text-muted-foreground">
              <Leaf className="h-3.5 w-3.5 text-primary" />
              Powered by symptom-based prediction
            </div>
            <h1 className="text-balance font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Ethiopian Traditional Medicine Meets Modern Diagnosis
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Describe your symptoms and receive disease predictions alongside time-tested
              Ethiopian herbal remedies. Bridging ancestral wisdom with data-driven health analysis.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/symptom-checker"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                Check Your Symptoms
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/medicines"
                className="inline-flex items-center gap-2 rounded-lg border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-muted"
              >
                Explore Medicines
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground">
              How It Works
            </h2>
            <p className="mt-3 text-muted-foreground">
              Three simple steps from symptoms to traditional remedies
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Search,
                step: "01",
                title: "Select Symptoms",
                description:
                  "Choose from a categorized list of symptoms. Search by name or browse by body system.",
              },
              {
                icon: Brain,
                step: "02",
                title: "Get Predictions",
                description:
                  "Our prediction engine analyzes your symptoms to identify the most likely conditions with confidence scores.",
              },
              {
                icon: Flower2,
                step: "03",
                title: "Discover Remedies",
                description:
                  "Receive curated Ethiopian traditional medicine recommendations with preparation methods and safety notes.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative rounded-xl border bg-card p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xs font-bold text-muted-foreground">
                    STEP {item.step}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Rooted in Ethiopian Healing Traditions
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Ethiopia has one of the richest traditions of herbal medicine in Africa,
                with knowledge passed down through generations. TibebMed documents and
                preserves this heritage while making it accessible through modern technology.
              </p>
              <div className="mt-8 flex flex-col gap-4">
                {[
                  {
                    icon: Leaf,
                    title: "16+ Traditional Remedies",
                    description: "Documented herbs, plants, and natural medicines with preparation methods",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Safety Information",
                    description: "Dosage guidance, pregnancy warnings, and age-specific precautions",
                  },
                  {
                    icon: Heart,
                    title: "Cultural Preservation",
                    description: "Local names, regional origins, and traditional usage documented",
                  },
                  {
                    icon: BookOpen,
                    title: "Scientific Names",
                    description: "Each remedy mapped to its botanical classification for cross-reference",
                  },
                ].map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border bg-card p-8">
              <div className="flex flex-col gap-4">
                <div className="rounded-lg bg-primary/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Example Result
                  </p>
                  <p className="mt-2 font-serif text-xl font-semibold text-foreground">
                    Common Cold
                  </p>
                  <div className="mt-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Confidence</span>
                      <span className="font-medium text-foreground">78%</span>
                    </div>
                    <div className="mt-1.5 h-2 rounded-full bg-muted">
                      <div className="h-2 rounded-full bg-primary" style={{ width: "78%" }} />
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Recommended Remedy
                  </p>
                  <div className="mt-2 flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Flower2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Damakese</p>
                      <p className="text-xs text-muted-foreground">Ocimum lamiifolium</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Fresh leaves crushed and inhaled for fever relief
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-destructive/5 p-3">
                  <p className="text-xs text-destructive">
                    This is a demonstration only. Always consult a qualified healthcare provider.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-primary-foreground">
            Ready to explore?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-primary-foreground/80">
            Start by selecting your symptoms. Our engine will analyze them and recommend
            traditional Ethiopian medicines for educational purposes.
          </p>
          <Link
            href="/symptom-checker"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-card/90"
          >
            Start Symptom Checker
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
