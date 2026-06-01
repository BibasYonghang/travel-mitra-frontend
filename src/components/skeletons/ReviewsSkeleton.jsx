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
  if (document.getElementById("reviews-skeleton-styles")) return;
  const style = document.createElement("style");
  style.id = "reviews-skeleton-styles";
  style.textContent = SHIMMER_STYLE;
  document.head.appendChild(style);
}

// ── base skeleton block ──
function SkeletonBox({ className = "", rounded = "rounded-xl" }) {
  return (
    <div className={`trails-sk ${rounded} ${className}`} aria-hidden="true" />
  );
}

// ── single review card skeleton ──
function ReviewCardSkeleton() {
  return (
    <div className="flex-shrink-0 w-[280px] md:w-[320px] lg:w-[350px] min-h-[380px] bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between">
      {/* Avatar + name */}
      <div className="flex items-center gap-3 mb-6">
        <SkeletonBox className="w-14 h-14 rounded-full" />

        <div className="space-y-2 flex-1">
          <SkeletonBox className="h-4 w-24" rounded="rounded-full" />
          <SkeletonBox className="h-3 w-32" rounded="rounded-full" />
        </div>
      </div>

      {/* Comment */}
      <div className="space-y-2 flex-1">
        <SkeletonBox className="h-3 w-full" />
        <SkeletonBox className="h-3 w-[90%]" />
        <SkeletonBox className="h-3 w-[80%]" />
        <SkeletonBox className="h-3 w-[70%]" />
      </div>

      {/* Stars */}
      <div className="flex items-center justify-between mt-6 pt-3 border-t border-slate-100">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <SkeletonBox key={i} className="w-4 h-4" rounded="rounded-sm" />
          ))}
        </div>

        <SkeletonBox className="h-3 w-16" rounded="rounded-full" />
      </div>
    </div>
  );
}

// ── main skeleton ──
export default function ReviewsSkeleton({ count = 6 }) {
  if (typeof document !== "undefined") injectStyles();

  return (
    <section
      className="w-full py-4 md:px-10 px-5 overflow-hidden"
      aria-busy="true"
      aria-label="Loading reviews"
    >
      <h2 className="font-bold text-3xl md:text-4xl mb-10">
        User <span className="text-sky-600">Reviews</span>
      </h2>

      {/* horizontal scroll row */}
      <div className="flex gap-6 overflow-hidden">
        {Array.from({ length: count }).map((_, i) => (
          <ReviewCardSkeleton key={i} />
        ))}
      </div>

      <ArrowRightButton
        buttonTitle={"See More & Leave a Review"}
        buttonLink={"user-review"}
      />
    </section>
  );
}
