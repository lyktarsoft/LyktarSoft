import React from "react";
import {
  FaRegLightbulb,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";
import Image from "next/image";
import Section from "../ui/Section";

// type Props = {}

const WhyChooseUs = () => {
  return (
    <Section className="bg-linear-to-b from-[#2c2c2c] to-[#1f1f1f] text-white py-24 px-10">
      <div className="max-w-6xl mx-auto ">
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-16">
          Why Choose Us
        </h2>

        <div className="grid max-lg:justify-center lg:grid-cols-2 gap-14 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <Feature
              icon={<FaRegLightbulb />}
              title="Smarter Operations"
              description="Automate workflows and streamline processes to boost efficiency and reduce manual overhead."
            />

            <Feature
              icon={<FaUsers />}
              title="Stronger Customer Connections"
              description="Engage your audience through digital experiences that drive loyalty and satisfaction."
            />

            <Feature
              icon={<FaChartLine />}
              title="Scalable Growth, Sensible Spend"
              description="Build high-quality systems that grow with your business without breaking your budget."
            />

            <Feature
              icon={<FaShieldAlt />}
              title="Guidance That Drives Results"
              description="Make informed, strategic decisions backed by expert insight and hands-on consulting."
            />
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative w-full h-80 lg:h-95">
            <Image
              src="/whySection.png"
              alt="Team discussing strategy"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-[#3a3a3a] p-3 rounded-full text-gray-200 text-lg">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-300 text-sm mt-1 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default WhyChooseUs;
