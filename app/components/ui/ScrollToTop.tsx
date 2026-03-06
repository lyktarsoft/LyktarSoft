"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    // Run on mount in case page is already scrolled
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-10 right-10 z-50 w-10 h-10 bg-[#faa435] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 scrollUp_pulse"
      aria-label="Scroll to top"
    >
      <FaArrowUp color="white" size={18} />
    </button>
  );
};

export default ScrollToTop;
