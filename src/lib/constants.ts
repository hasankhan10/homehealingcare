export type NavLink = {
  href: string;
  label: string;
};

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/symptom-checker", label: "Symptom Checker" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];
