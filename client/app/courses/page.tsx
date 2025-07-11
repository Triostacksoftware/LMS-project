import CourseCard from "../../components/CourseCard";
import UserCourseDetailPage from "./[courseId]/page";

const dummyCourses = [
  {
    id: "1",
    category: "Programming",
    level: "Intermediate",
    title: "Complete React Development Course",
    instructor: "Sarah Johnson",
    description:
      "Master React from basics to advanced concepts including hooks, context, and state management.",
    duration: "12 hours",
    students: 15420,
    rating: 4.8,
    price: 89,
    letter: "C",
    image: "https://img.example.com/react-course.jpg",
  },
  {
    id: "2",
    category: "Programming",
    level: "Advanced",
    title: "Advanced JavaScript Concepts",
    instructor: "Michael Chen",
    description:
      "Deep dive into advanced JavaScript topics including closures, prototypes, and async programming.",
    duration: "8 hours",
    students: 8920,
    rating: 4.7,
    price: 69,
    letter: "A",
    image: "https://img.example.com/js-course.jpg",
  },
  {
    id: "3",
    category: "Design",
    level: "Beginner",
    title: "UI/UX Design Fundamentals",
    instructor: "Emma Davis",
    description: "Learn the principles of UI and UX design for web and mobile.",
    duration: "10 hours",
    students: 12300,
    rating: 4.9,
    price: 79,
    letter: "U",
    image: "https://img.example.com/ux-course.jpg",
  },
];

export default function CoursesPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Explore Our Courses</h2>
        <p className="text-gray-500 mt-2">
          Find the perfect course to advance your career
        </p>
      </div>

      {/* Filters (you can hook with state later) */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
        <input
          type="text"
          placeholder="Search courses..."
          className="w-full md:w-72 px-4 py-2 border rounded-md"
        />
        <select className="px-4 py-2 border rounded-md w-full md:w-48">
          <option>All Categories</option>
        </select>
        <select className="px-4 py-2 border rounded-md w-full md:w-48">
          <option>All Levels</option>
        </select>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <UserCourseDetailPage />
    </section>
  );
}
