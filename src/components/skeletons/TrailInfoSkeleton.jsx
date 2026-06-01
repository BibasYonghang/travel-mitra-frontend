import { useEffect } from "react";

const SHIMMER_STYLE = `
  @keyframes trailShimmer {
    0%   { background-position: -700px 0; }
    100% { background-position:  700px 0; }
  }
  .trail-sk {
    background: linear-gradient(
      90deg,
      #e2e8f0 0%,
      #f0f7ff 38%,
      #bae6fd 50%,
      #f0f7ff 62%,
      #e2e8f0 100%
    );
    background-size: 700px 100%;
    animation: trailShimmer 1.8s ease-in-out infinite;
  }
`;

function injectStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("trail-info-sk-styles")) return;
  const tag = document.createElement("style");
  tag.id = "trail-info-sk-styles";
  tag.textContent = SHIMMER_STYLE;
  document.head.appendChild(tag);
}

function Sk({ className = "", rounded = "rounded-xl", style = {} }) {
  return (
    <div
      className={`trail-sk ${rounded} ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
}

function SkLine({ width = "100%", className = "" }) {
  return (
    <Sk
      rounded="rounded-full"
      className={`h-3 ${className}`}
      style={{ width }}
    />
  );
}

export default function TrailInfoSkeleton() {
  useEffect(() => {
    injectStyles();
  }, []);

  return (
    <div
      className="min-h-screen bg-slate-50 md:p-8 p-2"
      aria-busy="true"
      aria-label="Loading trail information"
    >
      <div className="w-[95vw] mx-auto bg-white/90 rounded-2xl shadow-lg overflow-hidden border border-sky-200">
        <header className="bg-gradient-to-r from-sky-700 to-sky-500 p-2 md:p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Avatar + name + location */}
            <div className="flex items-center gap-4">
              <Sk
                className="w-16 h-16 shrink-0"
                rounded="rounded-xl"
                style={{ opacity: 0.45 }}
              />
              <div className="space-y-2.5">
                <Sk
                  rounded="rounded-lg"
                  className="h-7 md:h-9"
                  style={{ width: 220, opacity: 0.5 }}
                />
                <Sk
                  rounded="rounded-full"
                  className="h-3.5"
                  style={{ width: 120, opacity: 0.4 }}
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Sk
                  className="h-4 w-4"
                  rounded="rounded-sm"
                  style={{ opacity: 0.45 }}
                />
                <Sk
                  rounded="rounded-full"
                  className="h-4"
                  style={{ width: 100, opacity: 0.4 }}
                />
              </div>
              <Sk
                rounded="rounded-lg"
                className="h-10 w-36"
                style={{ opacity: 0.4 }}
              />
            </div>
          </div>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-6 md:p-6 p-2 mb-4">
          {/* LEFT col-span-2 */}
          <section className="md:col-span-2 space-y-8">
            {/* Hero image */}
            <Sk
              rounded="rounded-xl"
              className="w-full"
              style={{ height: "66vh" }}
            />

            {/* Photo thumbnails */}
            <section className="space-y-2">
              <div className="flex items-center gap-2">
                <Sk rounded="rounded-full" className="h-5 w-28" />
                <Sk
                  rounded="rounded-full"
                  className="h-5 w-32"
                  style={{ opacity: 0.65 }}
                />
              </div>
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <Sk
                    key={i}
                    rounded="rounded-md"
                    className="w-24 h-16 shrink-0"
                    style={{ opacity: 1 - i * 0.1 }}
                  />
                ))}
              </div>
            </section>

            {/* About description */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <Sk rounded="rounded-full" className="h-5 w-24" />
                <Sk
                  rounded="rounded-full"
                  className="h-5 w-16"
                  style={{ opacity: 0.65 }}
                />
              </div>
              <div className="space-y-2">
                <SkLine width="100%" />
                <SkLine width="97%" />
                <SkLine width="100%" />
                <SkLine width="92%" />
                <SkLine width="100%" />
                <SkLine width="88%" />
                <SkLine width="65%" />
              </div>
              <div className="space-y-2 pt-1">
                <SkLine width="100%" />
                <SkLine width="95%" />
                <SkLine width="100%" />
                <SkLine width="73%" />
              </div>
            </div>
          </section>

          {/* RIGHT col-span-1 */}
          <aside className="space-y-4">
            {/* Trail Stats */}
            <div className="rounded-xl p-4 bg-white border border-sky-200 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Sk rounded="rounded-full" className="h-5 w-14" />
                <Sk
                  rounded="rounded-full"
                  className="h-5 w-16"
                  style={{ opacity: 0.65 }}
                />
              </div>
              <ul className="grid grid-cols-2 gap-3">
                {[...Array(8)].map((_, i) => (
                  <li key={i} className="p-3 rounded-lg bg-sky-50 space-y-2">
                    <Sk rounded="rounded-full" className="h-2.5 w-3/4" />
                    <Sk rounded="rounded-full" className="h-4 w-5/6" />
                  </li>
                ))}
              </ul>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-sm border border-sky-200">
              <div className="p-4 bg-white border-b border-sky-200 flex items-center gap-2">
                <Sk rounded="rounded-full" className="h-5 w-20" />
                <Sk
                  rounded="rounded-full"
                  className="h-5 w-12"
                  style={{ opacity: 0.65 }}
                />
              </div>
              <Sk
                rounded="rounded-none"
                className="w-full"
                style={{ height: 272 }}
              />
            </div>
          </aside>
        </main>

        <footer className="px-6 pb-6 pt-4 border-t border-sky-400 bg-white">
          <Sk rounded="rounded-full" className="h-10 w-36" />
        </footer>
      </div>
    </div>
  );
}
