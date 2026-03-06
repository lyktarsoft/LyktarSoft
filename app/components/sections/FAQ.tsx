"use client";
import { useState } from "react";
import Section from "../ui/Section";
import Container from "../ui/Container";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// type Props = {}

const FAQ = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We provide end-to-end software development services including MVP development, technical consultation, system architecture design, and custom application development. Our team builds scalable web, mobile, and enterprise solutions tailored to business needs.",
    },
    {
      question: "What is an MVP?",
      answer:
        "An MVP (Minimum Viable Product) is the simplest functional version of your product that solves a core problem for users. It allows startups to test their ideas quickly, gather feedback from real users, and improve the product before investing heavily in full development.",
    },
    {
      question: "How do you keep projects on track and within budget?",
      answer:
        "We follow a structured development process that includes clear project milestones, transparent communication, and regular progress updates. By working in agile development cycles, we ensure that priorities stay aligned with business goals while maintaining control over timelines and costs.",
    },
    {
      question:
        "How do you ensure the quality and security of your software solutions?",
      answer:
        "Quality and security are built into our development process. We use best coding practices, code reviews, automated testing, and security checks to ensure every product we deliver is reliable, scalable, and protected against common vulnerabilities.",
    },
    {
      question: "Can you help with ongoing maintenance and support?",
      answer:
        "Yes. We provide ongoing maintenance, feature updates, performance monitoring, and technical support to ensure your software continues to run smoothly and evolves as your business grows.",
    },
    {
      question: "How do I get started working with Lyktar?",
      answer:
        "Getting started is simple. Reach out through our contact form or schedule a consultation with our team. We'll discuss your idea, understand your requirements, and propose the best technical approach to bring your vision to life.",
    },
  ];

  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveQuestion((prev) => (prev === index ? null : index));
  };

  return (
    <Section className="py-24 bg-[#141313]">
      <Container className="max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Frequently Asked Questions
          </h2>
          <p className=" mt-3 max-w-xl mx-auto text-sm">
            Find quick answers to common inquiries. Can’t find what you’re
            looking for? Contact us, and we’ll be happy to assist you.
          </p>
        </div>
        <div className=" max-w-3xl mx-auto mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#2B2B2B] border border-[#2B2B2B] rounded-lg p-4 cursor-pointer transition-all duration-300"
              onClick={() => toggleQuestion(index)}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold">{faq.question}</span>
                {activeQuestion === index ? (
                  <FaChevronUp className="text-[#ffffff]" size={16} />
                ) : (
                  <FaChevronDown className="text-[#ffffff]" size={16} />
                )}
              </div>

              {activeQuestion === index && (
                <p className="mt-3 text-sm leading-relaxed">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;
