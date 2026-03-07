import {
  FaRegLightbulb,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

export type Feature = {
  icon: React.ElementType;
  title: string;
  description: string;
};

export const whyChooseUsFeatures: Feature[] = [
  {
    icon: FaRegLightbulb,
    title: "Smarter Operations",
    description:
      "Automate workflows and streamline processes to boost efficiency and reduce manual overhead.",
  },
  {
    icon: FaUsers,
    title: "Stronger Customer Connections",
    description:
      "Engage your audience through digital experiences that drive loyalty and satisfaction.",
  },
  {
    icon: FaChartLine,
    title: "Scalable Growth, Sensible Spend",
    description:
      "Build high-quality systems that grow with your business without breaking your budget.",
  },
  {
    icon: FaShieldAlt,
    title: "Guidance That Drives Results",
    description:
      "Make informed, strategic decisions backed by expert insight and hands-on consulting.",
  },
];