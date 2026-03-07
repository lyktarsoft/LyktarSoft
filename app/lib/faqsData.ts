// lib/faqs.ts
export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "We provide end-to-end software development services including MVP development, technical consultation, system architecture design, and custom application development. Our team builds scalable web, mobile, and enterprise solutions tailored to business needs.",
  },
  {
    id: 2,
    question: "What is an MVP?",
    answer:
      "An MVP (Minimum Viable Product) is the simplest functional version of your product that solves a core problem for users. It allows startups to test their ideas quickly, gather feedback from real users, and improve the product before investing heavily in full development.",
  },
  {
    id: 3,
    question: "How do you keep projects on track and within budget?",
    answer:
      "We follow a structured development process that includes clear project milestones, transparent communication, and regular progress updates. By working in agile development cycles, we ensure that priorities stay aligned with business goals while maintaining control over timelines and costs.",
  },
  {
    id: 4,
    question: "How do you ensure the quality and security of your software solutions?",
    answer:
      "Quality and security are built into our development process. We use best coding practices, code reviews, automated testing, and security checks to ensure every product we deliver is reliable, scalable, and protected against common vulnerabilities.",
  },
  {
    id: 5,
    question: "Can you help with ongoing maintenance and support?",
    answer:
      "Yes. We provide ongoing maintenance, feature updates, performance monitoring, and technical support to ensure your software continues to run smoothly and evolves as your business grows.",
  },
  {
    id: 6,
    question: "How do I get started working with Lyktar?",
    answer:
      "Getting started is simple. Reach out through our contact form or schedule a consultation with our team. We'll discuss your idea, understand your requirements, and propose the best technical approach to bring your vision to life.",
  },
];