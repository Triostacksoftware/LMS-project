"use client";
import React from "react";
import Link from "next/link";

const students = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice.johnson@email.com",
    enrolledCourses: 3,
    status: "Active",
  },
  {
    id: "2",
    name: "Bob Smith",
    email: "bob.smith@email.com",
    enrolledCourses: 2,
    status: "Active",
  },
  {
    id: "3",
    name: "Carol Lee",
    email: "carol.lee@email.com",
    enrolledCourses: 1,
    status: "Inactive",
  },
];

export default function StudentsSection() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Students</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 font-semibold text-gray-600">Name</th>
              <th className="px-4 py-2 font-semibold text-gray-600">Email</th>
              <th className="px-4 py-2 font-semibold text-gray-600">
                Enrolled Courses
              </th>
              <th className="px-4 py-2 font-semibold text-gray-600">Status</th>
              <th className="px-4 py-2 font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 font-medium text-gray-800">
                  <Link
                    href={`/admin-dashboard/student/${student.id}`}
                    className="text-indigo-600 hover:underline"
                  >
                    {student.name}
                  </Link>
                </td>
                <td className="px-4 py-2 text-gray-700">{student.email}</td>
                <td className="px-4 py-2 text-gray-700">
                  {student.enrolledCourses}
                </td>
                <td className="px-4 py-2 text-gray-700">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      student.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {student.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <Link href={`/admin-dashboard/student/${student.id}`}>
                    <button className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-xs font-semibold transition">
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
