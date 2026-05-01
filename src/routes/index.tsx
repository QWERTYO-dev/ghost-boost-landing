import { createFileRoute } from "@tanstack/react-router";
import "@fontsource/orbitron/400.css";
import "@fontsource/orbitron/700.css";
import "@fontsource/orbitron/900.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "GHOST SCRIPT 2026 — Kill Input Lag. Boost FPS by 40%." },
      { name: "description", content: "1-Click PC optimization. Reduce latency, boost FPS by 40%. Safe & anti-cheat friendly." },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background bg-grid overflow-hidden">
      {/* Scanline overlay */}
      <div className="pointer-events-none fixed inset-0 bg-scanlines z-50 opacity-30" />

      {/* Top ambient glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--neon), transparent 70%)" }}
      />

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        {/* Badge */}
        <div className="mb-6 px-4 py-1.5 rounded-full border border-neon/30 bg-neon/5 text-neon text-xs font-display uppercase tracking-[0.3em]">
          v2026 · Now Available
        </div>

        {/* Title */}
        <h1 className="font-display font-900 text-5xl sm:text-7xl md:text-8xl text-center leading-[0.95] tracking-tight text-neon text-neon-glow uppercase">
          Ghost Script
          <span className="block text-foreground text-3xl sm:text-4xl md:text-5xl mt-2 tracking-[0.2em] opacity-80" style={{ textShadow: "none" }}>
            2026
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-8 font-display text-xl sm:text-2xl md:text-3xl text-foreground text-center font-bold tracking-wide">
          Kill Input Lag. Boost FPS by <span className="text-neon text-neon-glow">40%</span>.
        </p>

        {/* CTA Button */}
        <a
          href="https://payhip.com/b/KzPZM"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-3 px-10 py-5 bg-neon text-neon-foreground font-display font-bold text-lg sm:text-xl uppercase tracking-widest rounded-md box-neon-glow-lg animate-pulse-neon transition-all duration-300 hover:scale-105 hover:brightness-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Now for $5
        </a>

        {/* Bullet points */}
        <ul className="mt-14 space-y-4 text-center sm:text-left">
          {[
            "1-Click Optimization",
            "Safe & Anti-Cheat Friendly",
            "Permanent Latency Reduction",
          ].map((text) => (
            <li key={text} className="flex items-center gap-3 text-foreground text-base sm:text-lg font-medium">
              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-neon box-neon-glow" />
              {text}
            </li>
          ))}
        </ul>

        {/* Bottom decorative line */}
        <div className="mt-20 w-40 h-px bg-gradient-to-r from-transparent via-neon/50 to-transparent" />
        <p className="mt-4 text-muted-foreground text-xs font-display uppercase tracking-[0.2em]">
          Instant Delivery · Windows 10/11
        </p>
      </main>
    </div>
  );
}
