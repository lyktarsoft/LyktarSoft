import About from "./components/sections/About";
import ContactCTA from "./components/sections/ContactCTA";
import FAQ from "./components/sections/FAQ";
import Hero from "./components/sections/Hero";
import MissionVision from "./components/sections/MissionVision";
import Services from "./components/sections/Services";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import ScrollToTop from "./components/ui/ScrollToTop";

export default function Home() {
  return (
    <>
      <Hero />
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
      <FAQ />
      <ScrollToTop />
    </>
  );
}
