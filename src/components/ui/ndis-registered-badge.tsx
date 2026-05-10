import Link from "next/link";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function NdisRegisteredBadge({
  className,
  compact,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-4 text-sm text-card-foreground shadow-sm",
        className,
      )}
    >
      <div className={cn("font-extrabold tracking-tight", compact && "text-sm")}>
        NDIS & SDA Registered Provider
      </div>
      <div className="mt-1 text-muted-foreground">
        <span className="font-semibold text-card-foreground">
          Registration #:
        </span>{" "}
        {SITE.ndisRegistrationNumber}
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Link
          href="https://www.ndis.gov.au/contact/feedback-and-enquiries/ndis-logo-guidelines"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-semibold text-foreground hover:bg-accent"
        >
          NDIS logo guidelines
        </Link>
        <Link
          href="https://www.ndiscommission.gov.au/providers/registered-ndis-providers"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-semibold text-foreground hover:bg-accent"
        >
          Registered provider info
        </Link>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        NDIS references are for service description only and do not imply NDIA
        endorsement.
      </p>
    </div>
  );
}

