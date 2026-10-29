import { Hero } from "@/components/home/Hero";
import { MarqueeStrip } from "@/components/home/MarqueeStrip";
import { ToolFatigue } from "@/components/home/ToolFatigue";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { VideoSection } from "@/components/home/VideoSection";
import { WorkflowDemo } from "@/components/home/WorkflowDemo";
import { WhoWeHelp } from "@/components/home/WhoWeHelp";
import { ProcessSection } from "@/components/home/ProcessSection";
import { WhyUs } from "@/components/home/WhyUs";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import { LeadCTA } from "@/components/contact/LeadCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <ExperienceSection />
      <ToolFatigue />
      <ProblemSection />
      <ServicesOverview />
      <VideoSection />
      <WorkflowDemo />
      <WhoWeHelp />
      <ProcessSection />
      <WhyUs />
      <PortfolioPreview />
      <HomeFAQ />
      <LeadCTA />
    </>
  );
}
