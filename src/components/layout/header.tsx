"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Logo from "@/components/logo";
import type { NavLink } from "@/lib/constants";
import { useState, useEffect } from "react";

export default function Header({ navLinks }: { navLinks: NavLink[] }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // A small threshold of 10px to trigger the change
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b transition-colors duration-300 ease-in-out",
      isScrolled
        ? "border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        : "border-transparent bg-accent text-accent-foreground"
    )}>
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        {/* Division 1: Logo & Mobile Menu */}
        <div className="flex items-center gap-2 md:flex-1">
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={cn(!isScrolled && "hover:bg-accent-foreground/10")}>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <SheetHeader>
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-8 flex flex-col gap-4">
                  <div className="mb-4">
                    <Logo />
                  </div>
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "block px-2 py-1 text-lg",
                        pathname === link.href
                          ? "font-semibold text-primary"
                          : "text-muted-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <Logo />
        </div>

        {/* Division 2: Desktop Navigation Links */}
        <nav className="hidden items-center justify-center md:flex md:flex-1">
          <div className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "transition-colors",
                    isScrolled
                      ? (isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground/80")
                      : (isActive ? "font-bold text-accent-foreground" : "text-accent-foreground/90 hover:text-accent-foreground")
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Division 3: Book Now Button */}
        <div className="flex flex-1 items-center justify-end">
          <Button asChild className="hidden md:inline-flex">
            <Link href="/booking">
              <Stethoscope className="mr-2 h-4 w-4" /> Book Now
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
