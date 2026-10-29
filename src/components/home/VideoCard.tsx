import { PlayCircle, Clapperboard } from "lucide-react";
import type { DemoVideo } from "@/content/videos";

/**
 * Renders a real <video> when a source exists, otherwise a branded animated
 * placeholder with the hook — so the section looks intentional and complete
 * before any footage is filmed (never a broken/empty embed).
 */
export function VideoCard({ video }: { video: DemoVideo }) {
  return (
    <article className="surface-card card-accent flex flex-col overflow-hidden p-0">
      <div className="relative aspect-video w-full overflow-hidden bg-[var(--color-bg-2)]">
        {video.src ? (
          <video
            className="h-full w-full object-cover"
            controls
            preload="none"
            poster={video.poster ?? undefined}
          >
            <source src={video.src} type="video/mp4" />
            Your browser doesn&apos;t support embedded video.
          </video>
        ) : (
          <div className="absolute inset-0">
            <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 50% 45%, rgba(229,57,53,0.18), transparent 60%)",
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-red-border)] bg-[rgba(229,57,53,0.1)]">
                <PlayCircle className="h-7 w-7 text-[var(--color-red-bright)]" aria-hidden="true" />
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 text-xs font-medium text-[var(--color-text-dim)]">
                <Clapperboard className="h-3.5 w-3.5" aria-hidden="true" />
                Demo video coming soon
              </span>
            </div>
          </div>
        )}
        {video.duration ? (
          <span className="absolute bottom-2 right-2 rounded bg-black/60 px-1.5 py-0.5 text-[11px] font-medium text-white">
            {video.duration}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <p className="text-sm font-medium italic text-[var(--color-red-bright)]">
          {video.hook}
        </p>
        <h3 className="text-base font-semibold">{video.title}</h3>
        <p className="text-sm text-[var(--color-text-dim)]">{video.description}</p>
      </div>
    </article>
  );
}
