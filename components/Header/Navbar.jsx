"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAVMENU } from "@/helper/CONST";
import { useState, useEffect } from "react";
import { MenuIcon, XIcon, XLogo } from "../UI/Icons/icons";
import { NavItem } from "../UI/NavItem/NavItem";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);
  return (
    <nav
      className={`w-full flex justify-center items-center p-4 text-gray-700 fixed z-30 w-full mx-auto top-0 ${pathname.includes("catalog") ? "bg-inputs" : "bg-white"}`}
    >
      <div className="container w-full px-4 md:px-16 flex justify-between items-center h-18">
        <Link href="/">
          <XLogo />
        </Link>
        <div
          className={`w-full lg:flex hidden lg:flex gap-4 justify-center items-center text-[16px] leading-[1.5]`}
        >
          {NAVMENU.map((item) => (
            <NavItem key={item.key} item={item} pathname={pathname} />
          ))}
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-0 bg-white/95 shadow-lg z-40 flex flex-col items-center justify-center gap-6 p-6"
            >
              {NAVMENU.map((item) => (
                <NavItem
                  key={item.key}
                  item={item}
                  pathname={pathname}
                  onClick={() => setIsMenuOpen(false)}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <button
          className="lg:hidden cursor-pointer p-2 rounded-md hover:bg-gray-100 transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          type="button"
        >
          {isMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>
    </nav>
  );
}
