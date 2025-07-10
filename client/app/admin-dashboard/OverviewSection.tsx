import React from "react";

const overviewData = [
  {
    label: "Total Courses",
    value: 6,
    sub: "Active courses",
    icon: "📚",
  },
  {
    label: "Total Students",
    value: 57780,
    sub: "Enrolled students",
    icon: "👥",
  },
  {
    label: "Total Revenue",
    value: "$5,301,020",
    sub: "Lifetime revenue",
    icon: "💰",
  },
  {
    label: "Avg Rating",
    value: "4.8/5.0",
    sub: "Platform average",
    icon: "⭐",
  },
];

const recentActivity = [
  {
    color: "bg-green-500",
    text: 'New student enrolled in "React Development Course"',
    time: "2 hours ago",
  },
  {
    color: "bg-blue-500",
    text: 'Course "Advanced JavaScript" received a 5-star review',
    time: "4 hours ago",
  },
  {
    color: "bg-purple-500",
    text: "New instructor application received",
    time: "1 day ago",
  },
];

export default function OverviewSection() {
  return (
    <div>
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {overviewData.map((item) => (
          <div
            key={item.label}
            className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 min-w-[180px]"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{item.icon}</span>
              <span className="text-gray-500 text-xs">{item.label}</span>
            </div>
            <div className="text-2xl font-bold text-gray-800">{item.value}</div>
            <div className="text-xs text-gray-400">{item.sub}</div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Recent Activity
        </h3>
        <ul className="space-y-3">
          {recentActivity.map((act, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <span className={`w-2 h-2 rounded-full ${act.color}`}></span>
              <span className="text-sm text-gray-700 flex-1">{act.text}</span>
              <span className="text-xs text-gray-400">{act.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
