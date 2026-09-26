import React from "react";

export default function SectionMarker({
  children,
  right,
}: {
  children: React.ReactNode;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex items-baseline justify-between border-b border-border pb-2 mb-5">
      <h2 className="mono text-[11px] md:text-[12px] font-medium tracking-[0.14em] text-foreground">
        <span className="text-primary">~/</span>
        {children}
      </h2>
      {right && (
        <span className="mono text-[10px] md:text-[11px] text-muted-foreground">{right}</span>
      )}
    </div>
  );
}
