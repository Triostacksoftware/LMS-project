import { Play } from "lucide-react";

const courses = [
  {
    title: "Photography",
    image:
      "https://img.freepik.com/free-psd/flat-design-education-template_23-2150251293.jpg?semt=ais_hybrid&w=740",
    progress: 34,
  },
  {
    title: "Ui/Ux Design",
    image:
      "https://img.freepik.com/free-psd/language-learning-template-design_23-2150955411.jpg?semt=ais_hybrid&w=740",
    progress: 73,
  },
  {
    title: "Animation",
    image:
      "https://img.freepik.com/free-psd/education-template-design_23-2150777556.jpg?semt=ais_hybrid&w=740",
    progress: 10,
  },
];

export default function ProgressWidget() {
  return (
    <div className="bg-[#fefeff] p-5 rounded-2xl shadow-md w-full max-w-sm">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Progress</h3>
          <p className="text-xs text-gray-400">Started Courses</p>
        </div>
        <a
          href="#"
          className="text-sm text-indigo-600 font-medium hover:underline"
        >
          View All
        </a>
      </div>

      <div className="space-y-4">
        {courses.map((course, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={course.image}
                alt={course.title}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <h4 className="text-sm font-medium text-gray-800">
                  {course.title}
                </h4>
                <div className="w-32 h-1 mt-1 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-yellow-400"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">{course.progress}%</span>
              <button className="w-8 h-8 flex items-center justify-center bg-[#f3f3fd] rounded-full shadow-sm hover:scale-105 transition">
                <Play className="w-4 h-4 text-purple-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
