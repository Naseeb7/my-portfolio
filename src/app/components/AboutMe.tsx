import React from "react";
import AboutMeHeader from "./AboutMeHeader";
import SocialLinks from "./About/SocialLinks";
import AboutSkillsSection from "./About/AboutSkillsSection";
import AboutContactSection from "./About/AboutContactSection";

const AboutMe = () => {
  return (
    <div className="flex flex-col w-full gap-3 h-full overflow-y-auto">
      {/* Header */}
      <AboutMeHeader />

      {/* About and Social Links */}
      <SocialLinks />

      {/* Skills */}
      <AboutSkillsSection />

      {/* Contact Section */}
      <AboutContactSection />
    </div>
  );
};

export default AboutMe;
