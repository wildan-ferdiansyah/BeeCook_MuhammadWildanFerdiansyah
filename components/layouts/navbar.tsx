"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const menuItems = [
  { label: "Beranda", href: "/" },
  { label: "Resep", href: "/menu" },
  { label: "Kelola", href: "/manage-recipe" },
];
export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("header")) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white transition-all duration-300 z-50 ${
        hasScrolled ? "border-b border-gray-200" : "border-b border-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto md:px-0 px-6">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className=" shrink-0">
            <Image
              src="/logo-beecook-color.png"
              width={120}
              height={120}
              alt="Logo BeeCook"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors duration-200 font-semibold text-sm ${isActive ? "text-primary" : "text-text-menu hover:text-primary"}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="md:hidden bg-white border-t border-gray-200 animate-slideDown"
          style={{
            animation: "slideDown 0.3s ease-out forwards",
          }}
        >
          <nav className="px-4 pt-2 pb-4 space-y-2">
            {menuItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg  hover:bg-gray-100 transition-colors duration-200 font-semibold text-sm ${isActive ? "text-primary" : "text-text-menu hover:text-primary"}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}
