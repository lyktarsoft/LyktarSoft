"use client";
import React, { useState } from "react";
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
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Services</Button>
          <Button variant="ghost">Contact</Button>
        </Container>
        <div className="hidden lg:block">
          <Button>Contact us</Button>
        </div>

        {/* Hamburger Button */}
        <button
          className="lg:hidden flex flex-col gap-1"
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
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">About</Button>
              <Button variant="ghost">Services</Button>
              {/* <Button variant="ghost">Contact</Button> */}
              <Button>Contact us</Button>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
};

export default Navbar;
