import Section from "../ui/Section";
import Container from "../ui/Container";
import ServiceCard from "../ui/serviceCard";
import { services } from "../../lib/services";

export default function Services() {
  return (
    <Section className="py-24 bg-[#0b0b0b] text-white">

      <Container className="max-w-6xl">

        {/* Title */}

        <div className="text-center mb-10">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Our Services
          </h2>

          <p className="mt-3 max-w-md mx-auto text-sm text-gray-400">
            From concept to continuous improvement, here’s how we bring your ideas to life.
          </p>

        </div>

        {/* Grid */}

       <div className="grid md:grid-cols-2 gap-6">
  {services.map((service, index) => {
    let position: "top-left" | "top-right" | "bottom-left" | "bottom-right";

    switch (index) {
      case 0:
        position = "top-left";
        break;
      case 1:
        position = "top-right";
        break;
      case 2:
        position = "bottom-left";
        break;
      case 3:
        position = "bottom-right";
        break;
      default:
        position = "top-left"; // fallback
    }

    return (
      <ServiceCard
        key={index}
        icon={service.icon}
        title={service.title}
        description={service.description}
        position={position}
      />
    );
  })}
</div>

      </Container>

    </Section>
  );
}