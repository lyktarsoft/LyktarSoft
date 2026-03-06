import Section from "../ui/Section";
import Image from "next/image";
import Button from "../ui/Button";

const About = () => {
  return (
    <Section className="bg-[#121212]  overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:block relative w-full h-105 sm:h-120 lg:h-130">
          <Image
            src="/aboutUs.png"
            alt="about us"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative overflow-hidden">
          <Image
            src="/vector1.png"
            alt="about us"
            width={400}
            height={400}
            className="absolute top-0 left-0 -translate-x-85"
            priority
          />
          <Image
            src="/vector2.png"
            alt="decorative vector"
            width={280}
            height={280}
            className="absolute bottom-0 -right-20 md:right-0 opacity-90 pointer-events-none"
          />

          <div className="relative flex items-center h-full max-w-xl lg:max-w-125 mx-auto px-10 py-16 lg:py-0 ">
            <div className="  space-y-6 text-center lg:text-left">
              <h2 className=" text-3xl sm:text-4xl lg:text-5xl font-medium">
                Who we are
              </h2>
              <p className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 px-6 lg:px-0">
                Lyktar Soft is dedicated to guiding businesses toward success
                through innovative and effective software solutions. Our mission
                is to transform your vision into a market advantage by
                developing custom digital products that accelerate growth,
                address unique challenges, and provide a competitive edge in
                your industry.​
              </p>
              <div>
                <Button className="bg-white">Learn more</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
