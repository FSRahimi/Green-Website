import { BookOpen, HeartPulse, ShieldCheck, Sparkles, Star, TreeDeciduous, Users, Leaf } from "lucide-react";

export const donateOptions = [
  {
    value: 10,
    title: "Plant Trees",
    description: "Restore native forests across vulnerable landscapes.",
    icon: TreeDeciduous,
  },
  {
    value: 25,
    title: "Support Education",
    description: "Fund local conservation training and youth programs.",
    icon: BookOpen,
  },
  {
    value: 50,
    title: "Protect Wildlife",
    description: "Help safeguard endangered species and habitats.",
    icon: HeartPulse,
  },
  {
    value: 0,
    title: "Custom Support",
    description: "Enter a specific amount in the form.",
    icon: Sparkles,
  },
];

export const benefits = [
  {
    title: "Transparent impact",
    description: "Donations are tracked and directed to projects that restore forests and strengthen communities.",
    icon: ShieldCheck,
  },
  {
    title: "Local leadership",
    description: "We partner with local teams who understand the land, culture, and long-term needs.",
    icon: Users,
  },
  {
    title: "Sustainable change",
    description: "Your gift helps build resilient ecosystems and stable livelihoods for the future.",
    icon: Star,
  },
];

export const stats = [
  { label: "Trees planted", value: 5000, icon: Leaf },
  { label: "Animals protected", value: 120, icon: ShieldCheck },
  { label: "Families supported", value: 900, icon: Users },
];

export const paymentMethods = [
  { id: "card", label: "Credit card" },
  { id: "transfer", label: "Bank transfer" },
];
