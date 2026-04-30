import { type Section } from "@/types/section";
import { WhoAreWeSection } from "./about/WhoAreWeSection";
import { VisionMissionSection } from "./about/VisionMissionSection";
import { ProgrammesSection } from "./about/ProgrammesSection";

export default function AboutSection({ description, title }: Section) {
  return (
    <>
      <WhoAreWeSection description={description} title={title} />
      <VisionMissionSection />
      <ProgrammesSection />
    </>
  );
}
