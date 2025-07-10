import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import Logo from "@/components/logo";
import type { NavLink } from "@/lib/constants";

export default function Footer({ navLinks }: { navLinks: NavLink[] }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-secondary">
      <div className="container mx-auto px-4 py-6">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Compassionate care in the comfort of your home.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="https://www.facebook.com/share/1HcJTYeCvd/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/homehealingcare" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Contact Us</h3>
            <address className="mt-4 space-y-2 text-sm text-muted-foreground not-italic">
              <p>Serving Kolkata & Bangalore</p>
              <p>Email: <a href="mailto:homehealingcare@gmail.com" className="hover:text-primary">homehealingcare@gmail.com</a></p>
              <p>Phone: <a href="tel:+919832711495" className="hover:text-primary">+91 98327 11495</a></p>
            </address>
          </div>
        </div>
        <div className="mt-6 border-t pt-3 text-center text-sm text-muted-foreground">
          <p suppressHydrationWarning>&copy; {year} Home Healing Care. All rights reserved.</p>
          <p className="mt-2">
            Made by{' '}
            <a
              href="https://www.stovamedia.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              Stova Media Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
