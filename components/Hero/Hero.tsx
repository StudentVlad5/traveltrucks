"use client";
import Image from "next/image";
import hero_img from "@/helper/images/hero.webp";
import { ButtonLink } from "../UI/ButtonLink/ButtonLink";

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[90vh] md:h-[696px] flex justify-center items-center overflow-hidden">
      {/* Оптимізація Image */}
      <Image
        src={hero_img}
        alt="Camp of the trucks hero"
        priority
        fill
        className="object-cover z-0"
        sizes="100vw"
        quality={85}
      />

      <div className="relative z-20 container px-4 md:px-16 flex flex-col items-center md:items-start text-center md:text-left text-white">
        <h1 className="h1-hero mb-4 drop-shadow-lg max-w-[600px]">
          Campers of your dreams
        </h1>
        <p className="h2-title mb-10 drop-shadow-md max-w-[500px]">
          You can find everything you want in our catalog
        </p>
        <ButtonLink href="/catalog" variant="primary">
          View Now
        </ButtonLink>
      </div>
    </section>
  );
};
