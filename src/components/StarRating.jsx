export default function StarRating({ rating = 0, size = "3.5" }) {
  // Map size values to complete, explicitly written Tailwind class names
  const sizeMap = {
    "3.5": "w-3.5 h-3.5",
    "4": "w-4 h-4",
    "5": "w-5 h-5",
    "6": "w-6 h-6",
  };

  // Fallback to "w-3.5 h-3.5" if an unknown size is passed
  const dimensions = sizeMap[size] || "w-3.5 h-3.5";

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((starIndex) => {
          const isFull = rating >= starIndex;
          const isHalf = !isFull && rating >= starIndex - 0.7;

          return (
            <span key={starIndex} className="text-amber-500">
              {isFull ? (
                /* Full Amber Star */
                <svg className={`${dimensions} fill-current`} viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ) : isHalf ? (
                /* Half Amber / Half Slate Star */
                <svg className={`${dimensions} fill-current`} viewBox="0 0 24 24">
                  <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27V2z" />
                  <path
                    className="text-slate-700 fill-current"
                    d="M12 2v15.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2z"
                  />
                </svg>
              ) : (
                /* Empty Slate Star */
                <svg className={`${dimensions} text-slate-700 fill-current`} viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              )}
            </span>
          );
        })}
      </div>

      <span className="text-xs font-semibold text-slate-300 ml-0.5">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}