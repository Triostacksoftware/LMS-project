"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";

// Dummy data for demonstration
const dummyCourses = [
  {
    id: "1",
    title: "Web Development Bootcamp",
    instructor: "John Doe",
    description:
      "Ever wanted to make websites but didn't know how to start? Then this course was made for you!",
    rating: 4.6,
    ratingsCount: 895,
    students: 22796,
    duration: "1.5 hours",
    lastUpdated: "February 2019",
    videoUrl: "https://www.youtube.com/embed/dGcsHMXbSOA",
    sections: [
      {
        title: "Section 1: Welcome to the Course",
        chapters: [
          { title: "Introduction", duration: "4 min", completed: false },
          { title: "Course Overview", duration: "10 min", completed: false },
          {
            title: "How to Use This Course",
            duration: "10 min",
            completed: false,
          },
        ],
      },
      {
        title: "Section 2: HTML (Hyper Text Markup Language)",
        chapters: [
          { title: "HTML Basics", duration: "10 min", completed: false },
          { title: "Tags & Elements", duration: "8 min", completed: false },
          { title: "Links & Images", duration: "8 min", completed: false },
          { title: "Lists & Tables", duration: "7 min", completed: false },
        ],
      },
      {
        title: "Section 3: CSS (Cascading Style Sheets)",
        chapters: [
          { title: "CSS Basics", duration: "10 min", completed: false },
          {
            title: "Selectors & Properties",
            duration: "8 min",
            completed: false,
          },
          { title: "Box Model", duration: "7 min", completed: false },
          { title: "Flexbox & Grid", duration: "7 min", completed: false },
        ],
      },
      {
        title: "Section 4: Your First Website",
        chapters: [
          { title: "Project Setup", duration: "4 min", completed: false },
          {
            title: "Building the Homepage",
            duration: "3 min",
            completed: false,
          },
        ],
      },
      {
        title: "Section 5: What Now?",
        chapters: [
          { title: "Next Steps", duration: "4 min", completed: false },
        ],
      },
      {
        title:
          "Section 6: Bonus Lecture: Coupons for my other courses & my YouTube channel",
        chapters: [
          { title: "Bonus Lecture", duration: "1 min", completed: false },
        ],
      },
    ],
  },
  // Add more dummy courses as needed
];

const TABS = [
  "Overview",
  "Notes",
  "Announcements",
  "Reviews",
  "Learning tools",
];

export default function UserCourseDetailPage() {
  const params = useParams();
  const [activeTab, setActiveTab] = useState("Overview");
  const [openSections, setOpenSections] = useState<number[]>([]);
  const course =
    dummyCourses.find((c) => c.id === params.courseId) || dummyCourses[0];

  // Example API call logic for future use:
  // const [course, setCourse] = useState(null);
  // useEffect(() => {
  //   async function fetchCourse() {
  //     const res = await fetch(`/api/courses/${params.courseId}`);
  //     const data = await res.json();
  //     setCourse(data);
  //   }
  //   fetchCourse();
  // }, [params.courseId]);
  // if (!course) return <div>Loading...</div>;

  function toggleSection(idx: number) {
    setOpenSections((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  }

  if (!course) return <div>Loading...</div>;

  return (
    <section className="min-h-screen bg-[#fef5ef] py-5 px-0 md:px-10">
      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
        {/* Main Video and Tabs */}
        <div className="flex-1 min-w-0">
          <div className="aspect-video w-full bg-black rounded-xl overflow-hidden mb-4">
            <iframe
              src={course.videoUrl}
              title={course.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-none rounded-xl"
            ></iframe>
          </div>
          {/* Tabs */}
          <div className="flex gap-6 border-b border-gray-200 mb-4">
            {TABS.map((tab) => (
              <button
                key={tab}
                className={`py-2 px-1 font-medium text-sm border-b-2 transition-all ${
                  activeTab === tab
                    ? "border-indigo-600 text-indigo-700 bg-indigo-50"
                    : "border-transparent text-gray-500 hover:text-indigo-600"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* Tab Content */}
          <div className="py-4">
            {activeTab === "Overview" && (
              <>
                <div className="text-xl font-semibold mb-2">{course.title}</div>
                <div className="text-gray-700 mb-4">{course.description}</div>
                <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-2">
                  <span>
                    ⭐ {course.rating} ({course.ratingsCount} ratings)
                  </span>
                  <span>👥 {course.students} Students</span>
                  <span>⏱ {course.duration} Total</span>
                </div>
                <div className="text-xs text-gray-400">
                  Last updated {course.lastUpdated}
                </div>
              </>
            )}
            {activeTab !== "Overview" && (
              <div className="text-gray-400 text-sm">
                This is a placeholder for the {activeTab} tab.
              </div>
            )}
          </div>
        </div>
        {/* Sidebar: Course Content */}
        <aside className="w-full md:w-96 bg-white rounded-xl shadow p-4 h-fit">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Course content
            </h3>
            <button
              className="text-gray-400 hover:text-gray-700 text-xl"
              onClick={() => setOpenSections([])}
            >
              &times;
            </button>
          </div>
          <div className="space-y-2">
            {course.sections.map((section, idx) => {
              const isOpen = openSections.includes(idx);
              const totalChapters = section.chapters.length;
              const totalDuration = section.chapters.reduce((acc, ch) => {
                const min = parseInt(ch.duration);
                return acc + (isNaN(min) ? 0 : min);
              }, 0);
              return (
                <div key={section.title} className="border rounded mb-2">
                  <button
                    className="w-full flex justify-between items-center px-4 py-3 bg-gray-50 hover:bg-gray-100 text-left"
                    onClick={() => toggleSection(idx)}
                  >
                    <span className="font-medium text-gray-800">
                      {section.title}
                    </span>
                    <span className="text-xs text-gray-500">
                      0 / {totalChapters} | {totalDuration}min
                      <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
                    </span>
                  </button>
                  {isOpen && (
                    <ul className="px-4 pb-2">
                      {section.chapters.map((ch) => (
                        <li
                          key={ch.title}
                          className="flex justify-between items-center py-2 border-b last:border-b-0"
                        >
                          <span className="text-sm text-gray-700">
                            {ch.title}
                          </span>
                          <span className="text-xs text-gray-500">
                            {ch.duration}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </aside>
      </div>
    </section>
  );
}
