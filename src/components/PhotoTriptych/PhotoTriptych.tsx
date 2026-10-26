import { useEffect, useRef, useState } from "react";
import type { EntryPhoto } from "../../types/portfolio";

interface Props {
  photos: [EntryPhoto, EntryPhoto, EntryPhoto];
  title: string;
  id: string;
}

/** Three static photo links progressively enhanced with a native dialog. */
export default function PhotoTriptych({ photos, title, id }: Props) {
  const [active, setActive] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const captionId = `photo-caption-${id}`;
  const photo = active === null ? null : photos[active];

  useEffect(() => {
    if (active !== null && dialog.current && !dialog.current.open) {
      dialog.current.showModal();
    }
  }, [active]);

  function step(direction: number) {
    setActive((index) =>
      index === null
        ? null
        : (index + direction + photos.length) % photos.length,
    );
  }

  return (
    <div className="photo-journal">
      <div className="photo-triptych" aria-label={`Photos from ${title}`}>
        {photos.map((item, index) => (
          <a
            className={`photo-shot photo-shot-${index + 1}`}
            href={item.src}
            key={`${item.src}-${index}`}
            aria-label={`Enlarge photo ${index + 1}: ${item.alt}`}
            onClick={(event) => {
              event.preventDefault();
              setActive(index);
            }}
          >
            <img
              src={item.src}
              alt={item.alt}
              width="640"
              height="800"
              loading="lazy"
              style={{ objectPosition: item.position || "center" }}
            />
            <span className="photo-shot-number mono" aria-hidden="true">
              0{index + 1}
            </span>
            <span className="photo-shot-caption">
              {item.caption}
              <span aria-hidden="true">↗</span>
            </span>
          </a>
        ))}
      </div>
      <div className="photo-journal-footer mono">
        <span>Three moments, one story.</span>
        <span>Click to explore ↗</span>
      </div>
      <dialog
        className="photo-dialog"
        ref={dialog}
        aria-label={`Photo gallery: ${title}`}
        aria-describedby={photo ? captionId : undefined}
        onClose={() => setActive(null)}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            step(event.key === "ArrowRight" ? 1 : -1);
          }
        }}
      >
        {photo && (
          <div className="photo-viewer">
            <div className="photo-viewer-toolbar">
              <span className="mono">
                {String((active ?? 0) + 1).padStart(2, "0")} / 03
              </span>
              <p>{title}</p>
              <button
                className="photo-control"
                type="button"
                onClick={() => dialog.current?.close()}
                aria-label="Close photos"
                autoFocus
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <img
              className="photo-viewer-image"
              src={photo.src}
              alt={photo.alt}
              width="1200"
              height="900"
            />
            <div className="photo-viewer-bottom">
              <p id={captionId}>{photo.caption}</p>
              <div className="photo-viewer-controls">
                <button
                  className="photo-control"
                  type="button"
                  aria-label="Previous photo"
                  onClick={() => step(-1)}
                >
                  ←
                </button>
                <button
                  className="photo-control"
                  type="button"
                  aria-label="Next photo"
                  onClick={() => step(1)}
                >
                  →
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
