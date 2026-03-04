import React from "react";
import Section from "../ui/Section";
import Container from "../ui/Container";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <Section className="min-h-screen flex items-center bg-black text-white">
      <Container className="max-w-3xl text-center ">
        <h1 className="text-4xl md:text-6xl font-semibold ">
          Guide your business to success with effective software solutions
        </h1>
        <p className="font-onest mt-3 text-[#A8A8A8] text-lg">
          Transform your vision into market advantage
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          {/* mt-4 flex justify-center gap-4 */}
          <Button>Contact us</Button>
          <Button>Contact us</Button>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
