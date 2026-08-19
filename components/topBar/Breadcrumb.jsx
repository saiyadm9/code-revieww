"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const lastSegment = pathname.split("/").pop();

  return (
    <nav className="hidden sm:flex items-center gap-2 text-sm">
      <Link
        href="/dashboard"
        className="text-muted hover:text-foreground"
      >
        Dashboard
      </Link>

      {lastSegment && lastSegment !== "dashboard" && (
        <>
          <ChevronRight size={16} className="text-gray-400" />

          <span className="font-medium text-foreground">
            {lastSegment}
          </span>
        </>
      )}
    </nav>
  );
}
