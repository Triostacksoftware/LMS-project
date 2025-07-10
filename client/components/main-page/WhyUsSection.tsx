"use client";

import Image from "next/image";

export default function WhyUsSection() {
  return (
    <section className="bg-[#2e004f] text-yellow-100 py-16 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Images */}
        <div className="flex gap-5">
          <Image
            src="https://plus.unsplash.com/premium_photo-1681842130240-8fb4d3ada35f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Mentor 1"
            width={300}
            height={300}
            className="rounded-xl object-cover"
          />
          <div className="flex flex-col gap-5">
            {" "}
            <Image
              src="https://plus.unsplash.com/premium_photo-1668383773378-9a608f25fb4a?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Mentor 2"
              width={300}
              height={300}
              className="rounded-xl object-cover"
            />
            <Image
              src="https://plus.unsplash.com/premium_photo-1661774902950-c6d33d6a245e?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Mentor 3"
              width={300}
              height={300}
              className="rounded-xl object-cover "
            />
          </div>
        </div>

        {/* Right Content */}
        <div>
          <h4 className="text-yellow-300 font-semibold tracking-wider uppercase mb-2">
            Innovation Meets Education
          </h4>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Discover Our Journey <br /> of Excellence!
          </h2>
          <p className="text-yellow-200 mb-8 leading-relaxed">
            At Adsevia Learn, we’re committed to providing top-tier education
            with innovation at the core. Our platform empowers learners and
            instructors through practical, expert-led content and advanced
            tools.
          </p>

          {/* Stats */}
          <div className="flex items-center gap-10 flex-wrap mb-8">
            <div>
              <h3 className="text-3xl font-bold text-yellow-300">5K+</h3>
              <p className="text-sm text-yellow-100">Expert-led Courses</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-yellow-300">9/10</h3>
              <p className="text-sm text-yellow-100">Rated by Learners</p>
            </div>
          </div>

          {/* CTA */}
          <button className="bg-yellow-400 hover:bg-yellow-500 text-[#2e004f] font-semibold px-6 py-2 rounded-lg shadow">
            Find Out More
          </button>
        </div>
      </div>
    </section>
  );
}
