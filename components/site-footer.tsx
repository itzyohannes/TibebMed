import { Leaf } from "lucide-react"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Leaf className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">TibebMed</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Bridging modern symptom analysis with Ethiopia{"'"}s rich tradition of natural healing.
              For educational purposes only.
            </p>
          </div>
          <div className="flex gap-12">
            <div>
              <h4 className="text-sm font-semibold text-foreground">Platform</h4>
              <nav className="mt-3 flex flex-col gap-2">
                <Link href="/symptom-checker" className="text-sm text-muted-foreground hover:text-foreground">
                  Symptom Checker
                </Link>
                <Link href="/medicines" className="text-sm text-muted-foreground hover:text-foreground">
                  Traditional Medicines
                </Link>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </nav>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground">Legal</h4>
              <nav className="mt-3 flex flex-col gap-2">
                <span className="text-sm text-muted-foreground">Privacy Policy</span>
                <span className="text-sm text-muted-foreground">Terms of Use</span>
                <span className="text-sm text-muted-foreground">Disclaimer</span>
              </nav>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t pt-6">
          <p className="text-center text-xs text-muted-foreground">
            TibebMed is for educational and informational purposes only. It is not a substitute for
            professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified
            healthcare provider.
          </p>
        </div>
      </div>
    </footer>
  )
}
