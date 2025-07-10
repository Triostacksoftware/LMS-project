"use client";

import { Star, Users, Clock, ShoppingCart } from "lucide-react";

type Course = {
  id: string;
  category: string;
  level: string;
  title: string;
  instructor: string;
  description: string;
  duration: string;
  students: number;
  rating: number;
  price: number;
  letter: string;
};

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-[#4B0082] cursor-pointer border border-yellow-800  rounded-2xl overflow-hidden shadow-md hover:shadow-yellow-500/30 transition duration-300">
      {/* Top placeholder */}
      <div className="h-60 flex items-center justify-center text-6xl font-black text-yellow-600 bg-[#3a007a]">
        {course.letter}
      </div>

      <div className="p-5 space-y-2">
        {/* Top tags */}
        <div className="flex justify-between">
          <span className="bg-yellow-500 text-[#2e0066] text-xs font-bold px-2 py-0.5 rounded-full uppercase">
            {course.category}
          </span>
          <span className="border border-yellow-300 text-yellow-300 text-xs font-semibold px-2 py-0.5 rounded-full uppercase">
            {course.level}
          </span>
        </div>

        {/* Title and instructor */}
        <h3 className="text-lg font-bold leading-snug">{course.title}</h3>
        <p className="text-sm text-yellow-100">{course.instructor}</p>

        {/* Info stats */}
        <div className="flex justify-between items-center text-xs text-yellow-200 font-medium mt-3">
          <span className="flex items-center gap-1">
            <Clock size={14} /> {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <Users size={14} /> {course.students.toLocaleString()}
          </span>
          <span className="flex items-center gap-1">
            <Star size={14} className="text-yellow-400" /> {course.rating}
          </span>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-yellow-400">
            ₹
            {course.price.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </span>
          <button
            className="flex items-center gap-1 px-3 py-1 bg-yellow-400 text-[#4B0082] rounded-full font-semibold hover:bg-yellow-300 transition"
            title="Add to cart"
          >
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
