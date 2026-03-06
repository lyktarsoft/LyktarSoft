import React from "react";
import {
  FaRegSquare,
  FaLaptopCode,
  FaCogs,
  FaClipboardCheck,
} from "react-icons/fa";
import Section from "../ui/Section";
import Container from "../ui/Container";

const Services = () => {
  return (
    <Section
      className=" flex relative py-24 bg-[#0b0b0b] text-white overflow-hidden"
      style={{
        backgroundImage: "url('/serviceBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container className="max-w-6xl">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Our Services
          </h2>
          <p className=" mt-3 max-w-92.5 mx-auto text-sm">
            From concept to continuous improvement, here&apos;s how we bring
            your ideas to life.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <ServiceCard
            icon={<FaRegSquare />}
            title="Consultation & Road mapping"
            description="We provide expert guidance and cost-effective planning to refine your product ideas, align them with user needs, and ensure market relevance from day one."
          />

          {/* Card 2 */}
          <ServiceCard
            icon={<FaClipboardCheck />}
            title="MVP Validation & Development"
            description="Turn your vision into a functional prototype with our MVP-first approach, helping you validate concepts, collect feedback, and iterate quickly before scaling."
          />

          {/* Card 3 */}
          <ServiceCard
            icon={<FaLaptopCode />}
            title="Web & Mobile App Development"
            description="From sleek websites to high-performance mobile apps, we craft digital experiences that are tailored, scalable, and built for long-term success."
          />

          {/* Card 4 */}
          <ServiceCard
            icon={<FaCogs />}
            title="Digital Transformation & Automation"
            description="Empower your business with modern technology. We streamline workflows, integrate smart tools, and position your operations for sustainable growth and global scalability."
          />
        </div>
      </Container>
    </Section>
  );
};

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative bg-[#1b1b1b] p-7 rounded-lg border border-transparent bg-clip-padding hover:border-[#d4a373] transition duration-300">
      <div className="flex items-start gap-4">
        <div className="text-[#d4a373] text-xl mt-1">{icon}</div>

        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>

          <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
