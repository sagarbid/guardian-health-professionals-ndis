import Link from "next/link";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";
import type { Service } from "@/lib/services";

export default function ServiceCard({
  service,
  compact,
}: {
  service: Service;
  compact?: boolean;
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",
        compact ? "p-4" : "p-5",
      )}
    >
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-gradient-to-br from-blue-50 to-emerald-50 p-2 text-blue-700">
          <Icon name={service.icon} className="h-6 w-6" />
        </div>
        <div className="min-w-0">
          <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-800">
            {service.title}
          </div>
          <div className="mt-1 text-sm text-slate-700">{service.short}</div>
          <div className="mt-3 inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
            NDIS-funded
          </div>
        </div>
      </div>
    </Link>
  );
}

