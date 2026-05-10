import Image from "next/image";
import { GradientBackground } from "@/components/ui/gradient-background";

export default function GradientDemoPage() {
  const oceanGradients = [
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  ];

  return (
    <GradientBackground
      gradients={oceanGradients}
      animationDuration={8}
      overlay={true}
      overlayOpacity={0.2}
      animationDelay={0}
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center text-white">
        <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur">
          <Image
            src="/brand/logo-mark-128.png"
            alt="Guardian Health Professionals crest"
            width={48}
            height={48}
            className="h-12 w-12 rounded-xl bg-white/80 p-1"
            priority
          />
          <div className="text-left">
            <div className="text-sm font-extrabold tracking-tight">
              Guardian Health Professionals
            </div>
            <div className="text-xs text-white/90">
              NDIS & SDA Registered Provider
            </div>
          </div>
        </div>

        <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
          Premium Gradient Background
        </h1>
        <p className="text-lg leading-relaxed text-white/90 sm:text-2xl">
          Animated, accessible and brand-friendly backgrounds for hero sections.
        </p>

        <div className="mt-3 overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-2xl">
          {/* Unsplash Source always returns an image; using <img> avoids Next remote config */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://source.unsplash.com/1200x700/?disability,community"
            alt="Stock photo from Unsplash (random disability and community theme)"
            className="h-64 w-[min(78vw,52rem)] object-cover sm:h-80"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </GradientBackground>
  );
}
