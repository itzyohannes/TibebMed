import type { Metadata } from "next"
import Link from "next/link"
import {
  Brain,
  Database,
  Flower2,
  ShieldCheck,
  ArrowRight,
  AlertTriangle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "About - TibebMed",
  description:
    "Learn about TibebMed, our disease prediction methodology, and commitment to preserving Ethiopian traditional medicine.",
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 lg:px-8 lg:py-12">
      <h1 className="font-serif text-3xl font-bold text-foreground">
        About TibebMed
      </h1>
      <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
        TibebMed (from Amharic: {"\""}Tibeb{"\""} meaning wisdom) is a platform that bridges
        modern symptom-based disease prediction with Ethiopia{"'"}s centuries-old tradition
        of herbal and natural medicine.
      </p>

      {/* Mission */}
      <section className="mt-10">
        <h2 className="font-serif text-2xl font-bold text-foreground">
          Our Mission
        </h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Ethiopia is home to one of the most diverse and ancient traditions of herbal medicine
          in Africa. An estimated 80% of the population relies on traditional medicine for
          primary healthcare. Yet much of this knowledge remains undocumented and risks being
          lost to modernization. TibebMed aims to digitally preserve and make accessible
          this invaluable heritage while combining it with data-driven health analysis.
        </p>
      </section>

      {/* How it works */}
      <section className="mt-10">
        <h2 className="font-serif text-2xl font-bold text-foreground">
          How the Prediction Engine Works
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            {
              icon: Database,
              title: "Symptom-Disease Dataset",
              description:
                "Our database contains 20+ conditions with 80+ symptoms, each mapped with weighted associations based on clinical significance.",
            },
            {
              icon: Brain,
              title: "Weighted Scoring Algorithm",
              description:
                "The engine uses a multi-factor scoring model that considers symptom weights, coverage ratio, and precision to produce confidence scores.",
            },
            {
              icon: Flower2,
              title: "Medicine Mapping",
              description:
                "16+ Ethiopian traditional remedies are linked to conditions, each with local names, scientific classifications, preparation methods, and safety notes.",
            },
            {
              icon: ShieldCheck,
              title: "Safety First",
              description:
                "Every recommendation includes safety warnings covering dosage limits, pregnancy precautions, age restrictions, and drug interaction notes.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border bg-card p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-3 font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mt-10">
        <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-6">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <h2 className="font-serif text-xl font-bold text-destructive">
              Important Disclaimer
            </h2>
          </div>
          <div className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-destructive/80">
            <p>
              TibebMed is strictly for <strong>educational and informational purposes</strong>.
              It does not provide medical diagnoses, treatment plans, or clinical advice.
            </p>
            <p>
              The traditional medicine information represents cultural heritage and should
              not be used as a replacement for evidence-based medical treatment. Some herbal
              remedies may have side effects or interact with medications.
            </p>
            <p>
              <strong>Always consult a qualified healthcare professional</strong> before
              making any health-related decisions. If you are experiencing a medical
              emergency, contact your local emergency services immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Special warnings */}
      <section className="mt-10">
        <h2 className="font-serif text-2xl font-bold text-foreground">
          Special Warnings
        </h2>
        <div className="mt-4 flex flex-col gap-3">
          {[
            {
              title: "Pregnant & Breastfeeding Women",
              description:
                "Many traditional herbs are contraindicated during pregnancy. Always consult your healthcare provider before using any herbal remedy while pregnant or breastfeeding.",
            },
            {
              title: "Children",
              description:
                "Dosages and safety profiles differ significantly for children. Never administer traditional medicines to children without guidance from both a traditional healer and a healthcare provider.",
            },
            {
              title: "Severe Symptoms",
              description:
                "If you are experiencing chest pain, difficulty breathing, severe bleeding, loss of consciousness, or any life-threatening symptoms, seek emergency medical care immediately.",
            },
          ].map((warning) => (
            <div
              key={warning.title}
              className="rounded-lg border bg-accent/5 p-4"
            >
              <h3 className="text-sm font-semibold text-foreground">
                {warning.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {warning.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mt-10 flex justify-center">
        <Link
          href="/symptom-checker"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
        >
          Try the Symptom Checker
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
