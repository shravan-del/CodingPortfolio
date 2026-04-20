'use client';

/** BibTeX-style string — replace author ordering with the exact proceedings line when you have the PDF. */
const CITATION = `S. Athikinasetti et al. (2024). Quantifying Sentiment Shifts in Political Reddit Communities During High-Stakes Sociopolitical Events. Proc. ACM Hum.-Comput. Interact., CSCW. (Verify author order against the official ACM record.)`;

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
