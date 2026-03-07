"use client";
import React, { useState } from "react";
import Section from "../ui/Section";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Input from "../ui/input";
import { contactFields, Field } from "../../lib/formFields";

// Define the strict form data type
type FormData = {
  [key in Field["name"]]: string;
};

const ContactCTA = () => {
  // Initialize state with empty strings for each field
  const [formData, setFormData] = useState<FormData>(
    contactFields.reduce(
      (acc, field) => ({ ...acc, [field.name]: "" }),
      {} as FormData
    )
  );

  // Handle input change
  const handleChange = (name: Field["name"], value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Stop page reload
    console.log("Form submitted:", formData);

     // Reset form
    setFormData(contactFields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {} as FormData));


  };

  return (
    <Section className="bg-[#0b0b0b] text-white py-24">
      <Container className="max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Looking for <br /> software services?
            </h2>

            <p className="text-gray-300 mt-4 mb-10 max-w-md text-sm leading-relaxed">
              We'd love to hear from you. Let's talk about how we can help your business thrive
              by leveraging technology. Let's build your success story together.
            </p>

            {/* FORM */}
            <form className="space-y-5" onSubmit={handleSubmit}>
              {contactFields.map((field) => (
                <Input
                  key={field.name}
                  label={field.label}
                  value={formData[field.name]}
                  onChange={(val) => handleChange(field.name, val)}
                  placeholder={field.placeholder}
                  type={field.type}
                  rows={field.name === "message" ? 4 : undefined}
                />
              ))}

              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative w-full hidden lg:block lg:h-full">
            <img
              src="/contactSection.png"
              alt="Corporate buildings"
              className="object-cover rounded-md w-full h-full"
            />
          </div>
        </div>
      </Container>

    </Section>
  );
};

export default ContactCTA;