import ArrowRightButton from "../../common/buttons/ArrowRightButton";

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

export default function HomeTrailsSkeleton({ name1, name2 }) {
  if (typeof document !== "undefined") injectStyles();

  return (
    <section
      className="w-full py-6 md:px-10 px-5"
      aria-busy="true"
      aria-label="Loading trails"
    >
      <h1 className="font-bold text-black md:text-4xl text-3xl">
        <span className="text-sky-600">{name1}</span> {name2}
      </h1>
      <div
        className="grid gap-3 justify-center mt-5 w-full
                   grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <TrailCardSkeleton key={i} />
        ))}
      </div>
      {name1 === "Popular" && (
        <ArrowRightButton
          buttonTitle={"Explore All Trails"}
          buttonLink={"trails"}
        />
      )}
    </section>
  );
}
