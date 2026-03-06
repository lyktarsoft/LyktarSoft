import Link from "next/link";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLifeRing,
} from "react-icons/fa";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Image from "next/image";
import Section from "../ui/Section";

const Footer = () => {
  return (
    <Section className="bg-linear-to-b from-[#2a2a2a] to-[#1f1f1f] text-white">
      <Container className="max-w-6xl  py-10">
        {/* TOP ROW */}
        <div className="flex  md:flex-row md:items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-xl font-bold flex items-center">
            <Image
              src="/logo.png"
              alt="LyktarSoft Logo"
              width={32}
              height={32}
              className=" mr-2"
            />
            <h3 className="text-white font-semibold text-lg">LyktarSoft</h3>
          </div>
          {/* Navigation */}
          <Container className="hidden md:flex gap-4 text-sm ">
            <Button size="sm" variant="ghost">
              <a href="#hero">Home</a>
            </Button>
            <Button size="sm" variant="ghost">
              <a href="#about">About</a>
            </Button>
            <Button size="sm" variant="ghost">
              <a href="#services">Services</a>
            </Button>
            <Button size="sm" variant="ghost">
              <a href="#contact">Contact</a>
            </Button>
          </Container>

          {/* Help */}
          <div className="flex items-center gap-2 text-sm hover:text-white cursor-pointer transition">
            <FaLifeRing size={18} />
            Help and Support
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-8"></div>

        {/* BOTTOM ROW */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm">
          {/* Copyright */}
          <p className="">
            Todos os direitos reservados. Veja nossa{" "}
            <Link href="#" className="underline hover:text-white">
              Privacy Policy
            </Link>{" "}
            e{" "}
            <Link href="#" className="underline hover:text-white">
              Termos e Serviço
            </Link>
          </p>

          {/* Socials */}
          <div className="flex items-center gap-5">
            <span>Social media</span>

            <FaTwitter
              size={18}
              className="cursor-pointer hover:text-gray-300 transition"
            />

            <FaInstagram
              size={18}
              className="cursor-pointer hover:text-gray-300 transition"
            />

            <FaFacebookF
              size={18}
              className="cursor-pointer hover:text-gray-300 transition"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Footer;
