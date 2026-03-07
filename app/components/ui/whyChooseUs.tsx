import React from "react";

type FeatureCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex items-start gap-4 bg-black p-5 rounded-lg shadow-md lg:bg-transparent lg:p-0 lg:shadow-none transition-all duration-300 hover:scale-[1.02]">
      <div className="bg-[#3a3a3a] p-3 rounded-full text-gray-200 text-lg flex-shrink-0 shadow-inner">
        <Icon />
      </div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-300 text-sm mt-1 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}