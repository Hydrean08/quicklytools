"use client";

import { useEffect } from "react";

interface AdSlotProps {
  slot?: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  className?: string;
  label?: string;
}

export default function AdSlot({
  slot = "PLACEHOLDER",
  format = "auto",
  className = "",
  label = "Advertisement",
}: AdSlotProps) {
  const isDev = process.env.NODE_ENV === "development";

  useEffect(() => {
    if (!isDev) {
      try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      } catch {
        // adsbygoogle not loaded
      }
    }
  }, [isDev]);

  if (isDev) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg min-h-[90px] text-gray-400 text-sm font-medium ${className}`}
        aria-hidden="true"
        role="presentation"
      >
        <span>Ad — {label} ({slot})</span>
      </div>
    );
  }

  return (
    <div className={className} aria-label={label}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-PLACEHOLDER"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
