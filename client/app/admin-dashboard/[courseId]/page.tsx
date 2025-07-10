"use client";
import React, { useState } from "react";
import EditCourseModal from "@/components/admin-dashboard/EditCourseModal";
import { useParams } from "next/navigation";

// Dummy data for demonstration
const dummyCourses = [
  {
    id: "1",
    title: "React for Beginners",
    instructor: "Jane Doe",
    category: "Web Development",
    level: "Beginner",
    students: 1200,
    price: 99,
    description:
      "Learn the basics of React including components, state, and props.",
    duration: "8 hours",
    chapters: [
      {
        title: "Introduction to React",
        description: "Overview of React and its core concepts.",
        youtubeUrl: "https://www.youtube.com/embed/dGcsHMXbSOA",
      },
      {
        title: "JSX and Components",
        description: "Understanding JSX and building components.",
        youtubeUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
      },
    ],
  },
  // ... more courses
];

export default function AdminCourseDetailPage() {
  const params = useParams();
  const courseId = params?.courseId as string;
  const course = dummyCourses.find((c) => c.id === courseId) || dummyCourses[0];
  const [editOpen, setEditOpen] = useState(false);

  return (
    <section className="min-h-screen bg-[#fef5ef] py-5 px-10">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              {course.title}
            </h1>
            <div className="text-sm text-gray-500 mb-1">
              {course.instructor} • {course.category} • {course.level}
            </div>
            <div className="text-xs text-gray-400 mb-2">
              {course.duration} • ${course.price} • {course.students} students
            </div>
          </div>
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-indigo-700 transition"
            onClick={() => setEditOpen(true)}
          >
            Edit
          </button>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Description
          </h2>
          <p className="text-gray-700 text-sm">{course.description}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Chapters</h2>
          <ul className="space-y-6">
            {course.chapters && course.chapters.length > 0 ? (
              course.chapters.map((ch, idx) => (
                <li key={idx} className="bg-gray-50 rounded p-4">
                  <div className="font-medium text-gray-700 mb-1">
                    {ch.title}
                  </div>
                  <div className="text-xs text-gray-500 mb-2">
                    {ch.description}
                  </div>
                  <div className="aspect-video w-full rounded overflow-hidden">
                    <iframe
                      src={ch.youtubeUrl}
                      title={ch.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-none rounded"
                    ></iframe>
                  </div>
                </li>
              ))
            ) : (
              <li className="text-xs text-gray-400">No chapters yet.</li>
            )}
          </ul>
        </div>
      </div>
      <EditCourseModal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        course={course}
      />
    </section>
  );
}
