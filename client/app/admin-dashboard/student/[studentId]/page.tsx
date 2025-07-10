"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Dummy data for demonstration
const dummyStudents = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice.johnson@email.com",
    status: "Active",
    enrolledCourses: [
      {
        id: "1",
        title: "React for Beginners",
        instructor: "Jane Doe",
      },
      {
        id: "2",
        title: "Advanced TypeScript",
        instructor: "John Smith",
      },
    ],
  },
  {
    id: "2",
    name: "Bob Smith",
    email: "bob.smith@email.com",
    status: "Active",
    enrolledCourses: [
      {
        id: "3",
        title: "UI/UX Design Basics",
        instructor: "Emily Clark",
      },
    ],
  },
  {
    id: "3",
    name: "Carol Lee",
    email: "carol.lee@email.com",
    status: "Inactive",
    enrolledCourses: [],
  },
];

export default function AdminStudentDetailPage() {
  const params = useParams();
  const studentId = params?.studentId as string;
  const student =
    dummyStudents.find((s) => s.id === studentId) || dummyStudents[0];

  return (
    <section className="min-h-screen bg-[#fef5ef] py-5 px-10">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {student.name}
        </h1>
        <div className="text-sm text-gray-500 mb-1">{student.email}</div>
        <div className="mb-4">
          <span
            className={`px-2 py-1 rounded text-xs font-semibold ${
              student.status === "Active"
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {student.status}
          </span>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Enrolled Courses
          </h2>
          <ul className="space-y-3">
            {student.enrolledCourses.length > 0 ? (
              student.enrolledCourses.map((course) => (
                <li
                  key={course.id}
                  className="bg-gray-50 rounded p-3 flex flex-col md:flex-row md:items-center md:gap-2"
                >
                  <Link
                    href={`/admin-dashboard/${course.id}`}
                    className="text-indigo-600 hover:underline font-medium"
                  >
                    {course.title}
                  </Link>
                  <span className="text-xs text-gray-500 ml-2">
                    by {course.instructor}
                  </span>
                </li>
              ))
            ) : (
              <li className="text-xs text-gray-400">No enrolled courses.</li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
