import Container from "../ui/Container";
import Image from "next/image";
import Button from "../ui/Button";

// type Props = {}

const MissionVision = () => {
  return (
    <section className="bg-[#2B2B2B] py-24">
      <Container className="max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center">
          Our Mission & Vision
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="relative w-full hidden lg:block lg:h-155 ">
            <Image
              src="/missionVision.png"
              alt="Corporate buildings"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Mission
              </h2>
              <p className=" leading-relaxed">
                At Lyktar Soft, we are committed to delivering innovative and
                effective software solutions that drive business growth and
                efficiency. We believe in the power of technology to solve
                real-world problems and are dedicated to creating products that
                make a tangible impact.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Vision
              </h2>

              <p className=" leading-relaxed">
                We understand that each business has its own set of challenges
                and goals. That&apos;s why we take a personalized approach to
                software development, collaborating closely with our clients to
                ensure that every solution is tailored to their specific needs.
                From initial consultation to deployment and ongoing support, we
                are with you every step of the way.
              </p>
            </div>
            <Button className="w-fit">Contact Us</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MissionVision;
