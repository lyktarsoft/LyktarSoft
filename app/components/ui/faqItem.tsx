// ui/FAQItem.tsx
"use client";

import { useRef, useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FAQItemProps {
  question: string;
  answer: string;
  isActive: boolean;
  toggle: () => void;
}

export default function FAQItem({ question, answer, isActive, toggle }: FAQItemProps) {
  const contentRef = useRef<HTMLParagraphElement>(null);
  const [maxHeight, setMaxHeight] = useState<string>("0px");

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isActive ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isActive]);

  return (
    <div
      className="bg-[#2B2B2B] border border-[#2B2B2B] rounded-lg overflow-hidden transition-all duration-300"
      onClick={toggle}
    >
      <div className="flex justify-between items-center p-4 cursor-pointer">
        <span className="font-semibold">{question}</span>
        {isActive ? <FaChevronUp className="text-white" size={16} /> : <FaChevronDown className="text-white" size={16} />}
      </div>

      <div
        className="px-4 overflow-hidden transition-[max-height] duration-500 ease-in-out"
        style={{ maxHeight }}
      >
        <p ref={contentRef} className="text-sm leading-relaxed pb-4  text-gray-300">
          {answer}
        </p>
      </div>
    </div>
  );
}