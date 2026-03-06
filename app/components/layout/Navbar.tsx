"use client";
import { useState } from "react";
import Section from "../ui/Section";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Section className="max-w-6xl mx-auto py-4">
      <Container className="flex justify-between items-center relative">
        {/* logo */}
        <div className="text-xl font-bold flex items-center">
          <Image
            src="/logo.png"
            alt="LyktarSoft Logo"
            width={32}
            height={32}
            className=" mr-2"
          />
          LyktarSoft
        </div>
        {/* desktop menu */}
        <Container className="hidden lg:flex gap-6 items-center">
          <Button variant="ghost">
            <a href="#hero">Home</a>
          </Button>
          <Button variant="ghost">
            <a href="#about">About</a>
          </Button>
          <Button variant="ghost">
            <a href="#services">Services</a>
          </Button>
          <Button variant="ghost">
            <a href="#contact">Contact</a>
          </Button>
        </Container>
        <div className="hidden lg:block">
          <Button>
            <a href="#contact">Contact us</a>
          </Button>
        </div>

        {/* Hamburger Button */}
        <button
          className="lg:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-all ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          />
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-[#2B2B2B] border-t border-gray-700 lg:hidden">
            <div className="flex flex-col gap-4 p-6">
              <Button variant="ghost">
                <a href="#hero" onClick={() => setIsOpen(false)}>
                  Home
                </a>
              </Button>
              <Button variant="ghost">
                <a href="#about" onClick={() => setIsOpen(false)}>
                  About
                </a>
              </Button>
              <Button variant="ghost">
                <a href="#services" onClick={() => setIsOpen(false)}>
                  Services
                </a>
              </Button>
              <Button>
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  Contact us
                </a>
              </Button>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
};

export default Navbar;
