import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { VideoCard } from "@/components/home/VideoCard";
import { demoVideos } from "@/content/videos";

export function VideoSection() {
  return (
    <Section aria-labelledby="video-heading">
      <Container>
        <SectionHeading
          id="video-heading"
          eyebrow="See it actually work"
          title="Less Pitch. More Proof."
          subtitle="Short, real demos of the kind of busywork we make disappear. No jargon — just the before, the automation, and the result."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {demoVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
