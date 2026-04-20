'use client';

const CITATION = `Athikinasetti, S., et al. (2024). Quantifying Sentiment Shifts in Political Reddit Communities During High-Stakes Sociopolitical Events. Proc. ACM Hum.-Comput. Interact., CSCW.`;

export function CitationCopy() {
  return (
    <button
      type="button"
      className="btn"
      onClick={() => {
        void navigator.clipboard?.writeText(CITATION);
      }}
    >
      Copy citation
    </button>
  );
}
