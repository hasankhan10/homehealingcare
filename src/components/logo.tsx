import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <Image
        src="https://cdn-icons-png.flaticon.com/512/2975/2975233.png"
        alt="Home Healing Care Logo"
        width={32}
        height={32}
        className="h-8 w-8"
      />
      <span className="text-lg sm:text-xl font-bold font-headline tracking-tight">
        Home Healing Care
      </span>
    </Link>
  );
}
