"use client";

import { useState } from "react";
import Section from "../ui/Section";
import Container from "../ui/Container";
import FAQItem from "../ui/faqItem";
import { faqs, type FAQ } from "../../lib/faqsData";

export default function FAQSection() {
  const [activeFAQId, setActiveFAQId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setActiveFAQId((prev) => (prev === id ? null : id)); 
  };

  return (
    <Section className="py-24 bg-[#141313]">
      <Container className="max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-sm text-gray-300">
            Find quick answers to common inquiries. Can’t find what you’re looking for? Contact us, and we’ll be happy to assist you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-4 space-y-4">
          {faqs.map((faq: FAQ) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isActive={activeFAQId === faq.id}
              toggle={() => toggleFAQ(faq.id)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}