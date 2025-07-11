"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      className=" text-white py-12 relative overflow-hidden bg-[url('/her-svg.svg')] bg-no-repeat bg-cover bg-center"
      style={{ minHeight: 500 }}
    >
      {/* Optional overlay for readability */}
      <div className="absolute inset-0 bg-[#4B0082]/60 z-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Unlock Your{" "}
            <button className="-rotate-15 bg-white text-[#4B0082] px-5  rounded-full ">
              Trading
            </button>{" "}
            Potential <br />
            with Our Best courses.
          </h1>
          <p className="text-gray-200 max-w-lg">
            Welcome to Markets Maverick, the ultimate learning platform designed
            for aspiring traders and seasoned investors alike. Our mission is to
            empower you with the knowledge, skills, and confidence to succeed.
          </p>

          <div className="flex gap-4 mt-4">
            <button className=" bg-white text-[#4B0082] px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
              Learner
            </button>
            <button className="border border-white px-5 py-2 rounded-full hover:bg-white hover:text-[#4B0082] transition">
              Instructor
            </button>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="flex-1 relative">
          <div className="bg-gradient-to-br from-yellow-300 to-yellow-500 p-1 rounded-[70px_0_70px_0] w-full max-w-md mx-auto">
            <Image
              src="/girl.png" // <-- replace with your image path
              alt="Student"
              width={400}
              height={400}
              className="rounded-[70px_0_70px_0] object-cover"
            />
          </div>

          {/* Optional: Icon Badge */}
          <div className="absolute top-4 right-4 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs shadow">
            💡 Skilled Instructors
          </div>
        </div>
      </div>

      {/* Trusted Companies (Bottom) */}
      <div className="mt-12 text-center text-gray-300 text-sm relative z-10">
        Trusted by <span className="text-yellow-400 font-semibold">150+</span>{" "}
        companies
        <div className="flex flex-wrap justify-center items-center mt-4 gap-6 opacity-70">
          <span>🎵 Shazam</span>
          <span>🎧 Skullcandy</span>
          <span>🇫🇷 Jean Desjoyaux</span>
          <span>🌐 myspace</span>
          <span>🎹 JeanMichelJarre</span>
        </div>
      </div>
    </section>
  );
}
