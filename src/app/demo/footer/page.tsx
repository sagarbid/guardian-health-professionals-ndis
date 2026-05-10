import Footer4Col from "@/components/ui/footer-column";

export default function FooterDemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
          Footer demo
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          This page exists to preview the shadcn-style footer component in
          isolation.
        </p>
      </div>
      <Footer4Col />
    </div>
  );
}

