import React from "react";

interface Course {
  id: string;
  title: string;
  instructor: string;
  image: string;
  progress?: {
    current: number;
    total: number;
  };
  category?: string;
  level?: string;
  description?: string;
  duration?: string;
  students?: number;
  rating?: number;
  letter?: string;
}

interface UserDashboardCourseCardProps {
  courses: Course[];
}

const UserDashboardCourseCard: React.FC<UserDashboardCourseCardProps> = ({
  courses,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-white rounded-xl shadow-md p-4 flex flex-col items-start cursor-pointer relative"
        >
          {course.category && (
            <span className="absolute top-3 left-3 bg-indigo-100 text-indigo-700 text-xs font-semibold px-2 py-1 rounded">
              {course.category}
            </span>
          )}
          {course.letter && (
            <span className="absolute top-3 right-3 bg-gray-200 text-gray-700 text-xs font-bold px-2 py-1 rounded-full">
              {course.letter}
            </span>
          )}
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-32 object-cover rounded-lg mb-3"
          />
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            {course.title}
          </h3>
          <div className="flex items-center gap-2 mb-1">
            <p className="text-sm text-gray-500">By {course.instructor}</p>
            {course.level && (
              <span className="ml-2 bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded">
                {course.level}
              </span>
            )}
          </div>
          {course.description && (
            <p className="text-xs text-gray-600 mb-2 line-clamp-2">
              {course.description}
            </p>
          )}
          <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-2">
            {course.duration && <span>⏱ {course.duration}</span>}
            {course.students && <span>👥 {course.students} students</span>}
            {course.rating && <span>⭐ {course.rating}</span>}
          </div>
          {course.progress && (
            <div className="w-full mt-2">
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-gray-300"
                  style={{
                    width: `${
                      (course.progress.current / course.progress.total) * 100
                    }%`,
                  }}
                />
              </div>
              <div className="flex justify-end text-xs text-gray-500 mt-1">
                {course.progress.current}/{course.progress.total}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserDashboardCourseCard;
