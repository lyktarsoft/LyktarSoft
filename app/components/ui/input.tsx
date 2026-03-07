// ui/Input.tsx
import React from "react";

type InputProps = {
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
  type?: string;
  rows?: number;
};

export default function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  rows = 4,
}: InputProps) {
  if (type === "textarea") {
    return (
      <div>
        <label className="text-sm text-gray-300">{label}</label>
        <textarea
          rows={rows}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full mt-2 bg-[#2f2f2f] border border-gray-600 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#feb201]"
        />
      </div>
    );
  }

  return (
    <div>
      <label className="text-sm text-gray-300">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full mt-2 bg-[#2f2f2f] border border-gray-600 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#feb201]"
      />
    </div>
  );
}