import About from "./components/sections/About";
import ContactCTA from "./components/sections/ContactCTA";
import Hero from "./components/sections/Hero";
import MissionVision from "./components/sections/MissionVision";
import Services from "./components/sections/Services";
import WhyChooseUs from "./components/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>

      <WhyChooseUs />

      <section id="contact">
        <ContactCTA />
      </section>

      <MissionVision />
    </>
  );
}
