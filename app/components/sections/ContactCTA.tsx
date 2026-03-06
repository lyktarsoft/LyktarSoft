import Image from "next/image";
import Button from "../ui/Button";
import Section from "../ui/Section";
import Container from "../ui/Container";

// type Props = {};

const ContactCTA = () => {
  return (
    <Section className="bg-[#0b0b0b] text-white py-24">
      <Container className="max-w-6xl ">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Looking for <br /> software services?
            </h2>

            <p className="text-gray-300 mt-4 mb-10 max-w-md text-sm leading-relaxed">
              We&apos;d love to hear from you. Let&apos;s talk about how we can
              help your business thrive by leveraging technology. Let&apos;s
              build your success story together.
            </p>

            {/* FORM */}
            <form className="space-y-5">
              <Input label="Full name" placeholder="Noel Okanlade" />

              <Input label="Email" placeholder="mail@domain.com" />

              <Input label="Phone number" placeholder="Phone number" />

              <div>
                <label className="text-sm text-gray-300">Message</label>
                <textarea
                  placeholder="Send a message..."
                  rows={4}
                  className="w-full mt-2 bg-[#2f2f2f] border border-gray-600 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-orange-400"
                />
              </div>

              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative w-full hidden lg:block lg:h-full ">
            <Image
              src="/contactSection.png"
              alt="Corporate buildings"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

function Input({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="text-sm text-gray-300">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full mt-2 bg-[#2f2f2f] border border-gray-600 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#feb201]"
      />
    </div>
  );
}

export default ContactCTA;
