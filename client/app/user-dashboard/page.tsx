import AchievementsWidget from "@/components/userdashboard/AchievementsWidget";
import ProgressWidget from "@/components/userdashboard/ProgressWidget";
import RecommendedCourse from "@/components/userdashboard/RecommendedCourse";
import UserDashboardCourseCard from "@/components/userdashboard/userDashboardCourseCard";
import React from "react";

const dummyCourses = [
  {
    id: "1",
    title: "React for Beginners",
    instructor: "Jane Doe",
    image:
      "https://img.freepik.com/free-psd/flat-design-education-template_23-2150251293.jpg?semt=ais_hybrid&w=740",
    progress: { current: 5, total: 10 },
    category: "Web Development",
    level: "Beginner",
    description:
      "Learn the basics of React including components, state, and props.",
    duration: "8 hours",
    students: 1200,
    rating: 4.7,
    letter: "R",
    price: 99,
  },
  {
    id: "2",
    title: "Advanced TypeScript",
    instructor: "John Smith",
    image:
      "https://img.freepik.com/free-psd/language-learning-template-design_23-2150955411.jpg?semt=ais_hybrid&w=740",
    progress: { current: 10, total: 10 },
    category: "Programming",
    level: "Advanced",
    description: "Deep dive into TypeScript's advanced types and generics.",
    duration: "10 hours",
    students: 800,
    rating: 4.9,
    letter: "T",
    price: 129,
  },
  {
    id: "3",
    title: "UI/UX Design Basics",
    instructor: "Emily Clark",
    image:
      "https://img.freepik.com/free-psd/education-template-design_23-2150777556.jpg?semt=ais_hybrid&w=740",
    progress: { current: 5, total: 12 },
    category: "Design",
    level: "Intermediate",
    description: "Fundamentals of user interface and user experience design.",
    duration: "6 hours",
    students: 950,
    rating: 4.5,
    letter: "U",
    price: 89,
  },
  {
    id: "4",
    title: "Node.js Essentials",
    instructor: "Michael Brown",
    image:
      "https://img.freepik.com/free-psd/flat-design-education-template_23-2150251293.jpg?semt=ais_hybrid&w=740",
    progress: { current: 2, total: 8 },
    category: "Backend Development",
    level: "Beginner",
    description: "Start building server-side applications with Node.js.",
    duration: "7 hours",
    students: 670,
    rating: 4.6,
    letter: "N",
    price: 119,
  },
];

const page = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-5 bg-[#fef5ef]  py-5 px-10">
      <div className="col-span-3 flex flex-col gap-5 h-full">
        <UserDashboardCourseCard courses={dummyCourses} />
        <RecommendedCourse courses={dummyCourses} />
      </div>
      <div className="flex flex-col gap-y-5">
        <ProgressWidget />
        <AchievementsWidget />
      </div>
    </section>
  );
};

export default page;
