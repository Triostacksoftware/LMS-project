import Hero from "@/components/main-page/HeroSection";
import HomeCourseCard from "@/components/main-page/HomeCourseCard";
import WhyUsSection from "@/components/main-page/WhyUsSection";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeCourseCard />
      <WhyUsSection />
    </>
  );
}
