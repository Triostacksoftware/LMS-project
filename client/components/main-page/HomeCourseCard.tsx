import React from "react";
import CourseCard from "../CourseCard";
import Image from "next/image";

const HomeCourseCard = () => {
  const homeCourses = [
    {
      id: 1,
      category: "Finance",
      level: "Beginner",
      title: "Trading for Beginners",
      instructor: "Ankit Sharma",
      duration: "6 hours",
      students: 8400,
      rating: 4.6,
      letter: "T",
      description: "Learn the basics of trading and financial markets.",
      price: 49.99,
    },
    {
      id: 2,
      category: "Finance",
      level: "Beginner",
      title: "Trading for Beginners",
      instructor: "Ankit Sharma",
      duration: "6 hours",
      students: 8400,
      rating: 4.6,
      letter: "T",
      description: "Learn the basics of trading and financial markets.",
      price: 49.99,
    },
    {
      id: 3,
      category: "Finance",
      level: "Beginner",
      title: "Trading for Beginners",
      instructor: "Ankit Sharma",
      duration: "6 hours",
      students: 8400,
      rating: 4.6,
      letter: "T",
      description: "Learn the basics of trading and financial markets.",
      price: 49.99,
    },
    {
      id: 4,
      category: "Finance",
      level: "Beginner",
      title: "Trading for Beginners",
      instructor: "Ankit Sharma",
      duration: "6 hours",
      students: 8400,
      rating: 4.6,
      letter: "T",
      description: "Learn the basics of trading and financial markets.",
      price: 49.99,
    },
  ];
  return (
    <section className="relative   text-white py-16">
      <Image
        src="/hoemhome.svg"
        alt="home"
        width={1000}
        height={700}
        className="absolute -mt-16 bg-[#4B0082] -z-1 opacity-10 object-cover h-full w-full"
      />
      <div className="max-w-7xl  mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Explore Our Courses
          </h2>
          <p className="text-gray-500 mt-2">
            Find the perfect course to advance your career
          </p>
        </div>

        {/* Filters (you can hook with state later) */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full md:w-72 px-4 py-2 border rounded-md"
          />
          <select className="px-4 py-2 border rounded-md w-full md:w-48">
            <option>All Categories</option>
          </select>
          <select className="px-4 py-2 border rounded-md w-full md:w-48">
            <option>All Levels</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCourseCard;
