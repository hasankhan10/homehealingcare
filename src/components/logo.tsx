import Link from "next/link";
import { PlusSquare } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <PlusSquare className="h-8 w-8 text-primary" />
      <span className="text-xl font-bold font-headline tracking-tight">
        Home Healing Care
      </span>
    </Link>
  );
}
