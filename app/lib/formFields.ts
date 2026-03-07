// lib/formFields.ts
export type Field = {
  name: "fullName" | "email" | "phone" | "message"; // restrict to exact keys
  label: string;
  placeholder: string;
  type?: string;
};

export const contactFields: Field[] = [
  { name: "fullName", label: "Full name", placeholder: "Noel Okanlade" },
  { name: "email", label: "Email", placeholder: "mail@domain.com", type: "email" },
  { name: "phone", label: "Phone number", placeholder: "Phone number" },
  { name: "message", label: "Message", placeholder: "Send a message...", type: "textarea" },
];