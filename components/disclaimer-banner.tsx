"use client"

import { useState } from "react"
import { AlertTriangle, X } from "lucide-react"

export function DisclaimerBanner() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className="border-b bg-accent/10">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2.5 lg:px-8">
        <AlertTriangle className="h-4 w-4 shrink-0 text-accent-foreground" />
        <p className="flex-1 text-xs text-accent-foreground sm:text-sm">
          <strong>Disclaimer:</strong> TibebMed is for educational purposes only. It is not a
          substitute for professional medical advice or diagnosis.
        </p>
        <button
          onClick={() => setDismissed(true)}
          className="shrink-0 rounded p-1 text-accent-foreground/60 hover:text-accent-foreground"
          aria-label="Dismiss"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}
