const SHIMMER_STYLE = `
  @keyframes shimmer {
    0%   { background-position: -700px 0; }
    100% { background-position:  700px 0; }
  }
  .trails-sk {
    background: linear-gradient(
      90deg,
      #e2e8f0 0%,
      #f0f7ff 38%,
      #bae6fd 50%,
      #f0f7ff 62%,
      #e2e8f0 100%
    );
    background-size: 700px 100%;
    animation: shimmer 1.8s ease-in-out infinite;
  }
`;

function injectStyles() {
  if (document.getElementById("trails-skeleton-styles")) return;
  const tag = document.createElement("style");
  tag.id = "trails-skeleton-styles";
  tag.textContent = SHIMMER_STYLE;
  document.head.appendChild(tag);
}

function SkeletonBox({ className = "", rounded = "rounded-xl", style = {} }) {
  return (
    <div
      className={`trails-sk ${rounded} ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
}

function TrailCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
      {/* Image area */}
      <SkeletonBox
        className="w-full"
        rounded="rounded-none"
        style={{ height: 200 }}
      />

      {/* Card body */}
      <div className="p-4 space-y-3">
        {/* Trail name */}
        <SkeletonBox className="h-4 w-3/4" rounded="rounded-full" />

        {/* Star row */}
        <div className="flex items-center gap-1.5">
          {[...Array(5)].map((_, i) => (
            <SkeletonBox key={i} className="h-3.5 w-3.5" rounded="rounded-sm" />
          ))}
          <SkeletonBox className="h-3 w-8 ml-1" rounded="rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default function TrailsSkeleton({ cardCount = 8 }) {
  // inject shimmer styles once
  if (typeof document !== "undefined") injectStyles();

  return (
    <section
      className="w-full py-6 md:px-10 px-5"
      aria-busy="true"
      aria-label="Loading trails"
    >
      <div className="flex items-center gap-3">
        {/* "Discover" word */}
        <SkeletonBox
          className="h-8 md:h-10 w-32 md:w-40"
          rounded="rounded-lg"
        />
        <SkeletonBox
          className="h-8 md:h-10 w-24 md:w-28"
          rounded="rounded-lg"
          style={{ opacity: 0.7 }}
        />
      </div>

      <div
        className="grid gap-3 justify-center mt-5 w-full
                   grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
      >
        {Array.from({ length: cardCount }).map((_, i) => (
          <TrailCardSkeleton key={i} />
        ))}
      </div>

      <div className="mt-10">
        <SkeletonBox className="h-10 w-36" rounded="rounded-full" />
      </div>
    </section>
  );
}
