// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-green-600 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Panchayat Name */}
        <Link href="/" className="text-2xl font-bold">
          Gram Panchayat — Longwala
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/about" className="hover:text-emerald-200 transition">
            About
          </Link>
          <Link href="/gallery" className="hover:text-emerald-200 transition">
            Gallery
          </Link>
          <Link href="/news" className="hover:text-emerald-200 transition">
            News
          </Link>
          <Link href="/members" className="hover:text-emerald-200 transition">
            Members
          </Link>
          <Link href="/contact" className="hover:text-emerald-200 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded bg-green-700"
          onClick={() => setOpen(!open)}
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile Links */}
      {open && (
        <div className="md:hidden bg-green-700 px-6 py-4 space-y-2">
          <Link href="/about" className="block hover:text-emerald-200">
            About
          </Link>
          <Link href="/gallery" className="block hover:text-emerald-200">
            Gallery
          </Link>
          <Link href="/news" className="block hover:text-emerald-200">
            News
          </Link>
          <Link href="/members" className="block hover:text-emerald-200">
            Members
          </Link>
          <Link href="/contact" className="block hover:text-emerald-200">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
