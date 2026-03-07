import React from "react";
import Section from "../ui/Section";
import FeatureCard from "../ui/whyChooseUs";
import { whyChooseUsFeatures } from "../../lib/whyChooseUs";
import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <Section className="bg-linear-to-b from-[#2c2c2c] to-[#1f1f1f] text-white py-24 px-10">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-16">
          Why Choose Us
        </h2>

        <div className="grid max-lg:justify-center lg:grid-cols-2 gap-14 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-6 lg:space-y-8">
            {whyChooseUsFeatures.map((feature, idx) => (
              <FeatureCard
                key={idx}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative w-full h-80 lg:h-95 hidden lg:block">
            <Image
              src="/whySection.png"
              alt="Team discussing strategy"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}