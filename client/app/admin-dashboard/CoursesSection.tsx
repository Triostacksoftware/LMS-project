"use client";
import React, { useState } from "react";
import EditCourseModal from "@/components/admin-dashboard/EditCourseModal";
import Link from "next/link";

const coursesData = [
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
  },
  {
    id: "2",
    title: "Advanced TypeScript",
    instructor: "John Smith",
    category: "Programming",
    level: "Advanced",
    students: 800,
    price: 129,
    description: "Deep dive into TypeScript's advanced types and generics.",
    duration: "10 hours",
  },
  {
    id: "3",
    title: "UI/UX Design Basics",
    instructor: "Emily Clark",
    category: "Design",
    level: "Intermediate",
    students: 950,
    price: 89,
    description: "Fundamentals of user interface and user experience design.",
    duration: "6 hours",
  },
];

export default function CoursesSection() {
  const [editOpen, setEditOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [courses] = useState(coursesData);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleEdit(course: any) {
    setSelectedCourse(course);
    setEditOpen(true);
  }

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Courses</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 font-semibold text-gray-600">Title</th>
              <th className="px-4 py-2 font-semibold text-gray-600">
                Instructor
              </th>
              <th className="px-4 py-2 font-semibold text-gray-600">
                Category
              </th>
              <th className="px-4 py-2 font-semibold text-gray-600">Level</th>
              <th className="px-4 py-2 font-semibold text-gray-600">
                Students
              </th>
              <th className="px-4 py-2 font-semibold text-gray-600">Price</th>
              <th className="px-4 py-2 font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 font-medium text-gray-800">
                  <Link
                    href={`/admin-dashboard/${course.id}`}
                    className="text-indigo-600 hover:underline"
                  >
                    {course.title}
                  </Link>
                </td>
                <td className="px-4 py-2 text-gray-700">{course.instructor}</td>
                <td className="px-4 py-2 text-gray-700">{course.category}</td>
                <td className="px-4 py-2 text-gray-700">{course.level}</td>
                <td className="px-4 py-2 text-gray-700">{course.students}</td>
                <td className="px-4 py-2 text-gray-700">${course.price}</td>
                <td className="px-4 py-2">
                  <button
                    className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-xs font-semibold transition"
                    onClick={() => handleEdit(course)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedCourse && (
        <EditCourseModal
          open={editOpen}
          onClose={() => setEditOpen(false)}
          course={selectedCourse}
        />
      )}
    </div>
  );
}
