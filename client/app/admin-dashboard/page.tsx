"use client";
import React, { useState } from "react";
import OverviewSection from "./OverviewSection";
import CoursesSection from "./CoursesSection";
import StudentsSection from "./StudentsSection";
import AnalyticsSection from "./AnalyticsSection";
import AddCourseModal from "@/components/admin-dashboard/AddCourseModal";

const TABS = [
  { label: "Overview", value: "overview" },
  { label: "Courses", value: "courses" },
  { label: "Students", value: "students" },
  { label: "Analytics", value: "analytics" },
];

export default function AdminDashboardPage() {
  const [tab, setTab] = useState("overview");
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <section className="min-h-screen bg-[#fef5ef] py-5 px-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">
            Admin Dashboard
          </h1>
          <p className="text-gray-500 text-sm">
            Manage courses and monitor platform performance
          </p>
        </div>
        <div className="flex items-center gap-4">
          {/* Placeholder for user info */}
          <span className="font-medium text-gray-700">Admin User</span>
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-indigo-700 transition"
            onClick={() => setShowAddModal(true)}
          >
            + Add Course
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-200 mb-8">
        {TABS.map((t) => (
          <button
            key={t.value}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-all ${
              tab === t.value
                ? "border-indigo-600 text-indigo-700 bg-indigo-50"
                : "border-transparent text-gray-500 hover:text-indigo-600"
            }`}
            onClick={() => setTab(t.value)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Section Content */}
      <div>
        {tab === "overview" && <OverviewSection />}
        {tab === "courses" && <CoursesSection />}
        {tab === "students" && <StudentsSection />}
        {tab === "analytics" && <AnalyticsSection />}
      </div>

      {/* Add Course Modal */}
      <AddCourseModal
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
      />
    </section>
  );
}
