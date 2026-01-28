"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { NavItemProps } from "@/types/navitem";

export function NavItem({ item, pathname, onClick }: NavItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  const itemPath = item.path.startsWith("/") ? item.path : `/${item.path}`;
  const isActive =
    itemPath === "/" ? pathname === "/" : pathname.startsWith(itemPath);

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link href={itemPath} onClick={onClick} className="w-full text-center">
        <motion.span
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{
            color: isActive
              ? "var(--color-accent-red-dark)"
              : isHovered
                ? "var(--color-gray-dark)"
                : "var(--color-main)",
          }}
          transition={{
            color: { duration: 0.3, ease: "easeInOut" },
          }}
          className="px-6 py-3 rounded-lg block transition-all"
          style={{
            boxShadow: isHovered ? "0 0 10px rgba(228, 72, 72, 0.4)" : "none",
          }}
        >
          {item.key}
        </motion.span>
      </Link>
    </motion.div>
  );
}
