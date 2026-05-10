import Image from "next/image";
import Container from "@/components/Container";
import { cn } from "@/lib/utils";

export default function PageHeader({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-white">
      <Container className="py-14 sm:py-20">
        <div className={cn("grid gap-10 lg:grid-cols-2 lg:items-start")}>
          <div>
            {eyebrow ? (
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {eyebrow}
              </div>
            ) : null}
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              {title}
            </h1>
            {description ? (
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-700">
                {description}
              </p>
            ) : null}
            {children ? <div className="mt-6">{children}</div> : null}
          </div>

          {imageSrc ? (
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <Image
                src={imageSrc}
                alt={imageAlt ?? ""}
                width={1600}
                height={900}
                className="h-72 w-full object-cover sm:h-96"
                priority
              />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

