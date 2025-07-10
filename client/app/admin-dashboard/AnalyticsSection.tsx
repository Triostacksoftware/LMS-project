import React from "react";

const courseEnrollments = [
  { label: "React", value: 1200 },
  { label: "TypeScript", value: 800 },
  { label: "UI/UX", value: 950 },
  { label: "Node.js", value: 670 },
];

const studentDistribution = [
  { label: "Web Dev", value: 40 },
  { label: "Programming", value: 30 },
  { label: "Design", value: 20 },
  { label: "Backend", value: 10 },
];

export default function AnalyticsSection() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Analytics</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Bar Chart Placeholder */}
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">
            Course Enrollments
          </h4>
          <div className="flex flex-col gap-2">
            {courseEnrollments.map((c) => (
              <div key={c.label} className="flex items-center gap-2">
                <span className="w-20 text-xs text-gray-600">{c.label}</span>
                <div className="flex-1 h-3 bg-indigo-100 rounded">
                  <div
                    className="h-3 bg-indigo-500 rounded"
                    style={{ width: `${(c.value / 1200) * 100}%` }}
                  />
                </div>
                <span className="text-xs text-gray-700 font-medium">
                  {c.value}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Pie Chart Placeholder */}
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">
            Student Distribution
          </h4>
          <div className="flex flex-col gap-2">
            {studentDistribution.map((s) => (
              <div key={s.label} className="flex items-center gap-2">
                <span className="w-20 text-xs text-gray-600">{s.label}</span>
                <span className="text-lg">
                  {s.label === "Web Dev" && "🟦"}
                  {s.label === "Programming" && "🟩"}
                  {s.label === "Design" && "🟧"}
                  {s.label === "Backend" && "🟪"}
                </span>
                <span className="text-xs text-gray-700 font-medium">
                  {s.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-indigo-50 rounded p-4 text-center">
          <div className="text-2xl font-bold text-indigo-700">5,301,020</div>
          <div className="text-xs text-gray-500">Total Revenue</div>
        </div>
        <div className="bg-green-50 rounded p-4 text-center">
          <div className="text-2xl font-bold text-green-700">57,780</div>
          <div className="text-xs text-gray-500">Total Students</div>
        </div>
        <div className="bg-yellow-50 rounded p-4 text-center">
          <div className="text-2xl font-bold text-yellow-700">6</div>
          <div className="text-xs text-gray-500">Active Courses</div>
        </div>
        <div className="bg-purple-50 rounded p-4 text-center">
          <div className="text-2xl font-bold text-purple-700">4.8</div>
          <div className="text-xs text-gray-500">Avg Rating</div>
        </div>
      </div>
    </div>
  );
}
