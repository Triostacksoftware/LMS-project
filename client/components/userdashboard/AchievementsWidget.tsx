export default function AchievementsWidget() {
  const achievements = [
    {
      title: "Friendly",
      desc: "Follow 3 friends",
      icon: "🤝",
      color: "from-cyan-300 to-cyan-100",
      progress: { current: 1, total: 3 },
    },
    {
      title: "Champion",
      desc: "Complete all skills of a course",
      icon: "🏆",
      color: "from-rose-300 to-rose-100",
      done: true,
      value: "200/200",
    },
    {
      title: "Overtime",
      desc: "Complete a lesson less than 1h",
      icon: "⏳",
      color: "from-indigo-300 to-indigo-100",
      done: true,
      value: "1/1",
    },
    // New dummy achievements
    {
      title: "Bookworm",
      desc: "Read 5 articles",
      icon: "📚",
      color: "from-green-300 to-green-100",
      progress: { current: 2, total: 5 },
    },
    // {
    //   title: "Streak Master",
    //   desc: "Login 7 days in a row",
    //   icon: "🔥",
    //   color: "from-yellow-300 to-yellow-100",
    //   progress: { current: 5, total: 7 },
    // },
    // {
    //   title: "Quiz Whiz",
    //   desc: "Score 100% on a quiz",
    //   icon: "🧠",
    //   color: "from-blue-300 to-blue-100",
    //   done: true,
    //   value: "1/1",
    // },
    // {
    //   title: "Helper",
    //   desc: "Answer 10 questions in the forum",
    //   icon: "💬",
    //   color: "from-pink-300 to-pink-100",
    //   progress: { current: 7, total: 10 },
    // },
  ];

  return (
    <div className="bg-[#fefeff] p-5 rounded-2xl shadow-md w-full max-w-sm">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Achievements</h3>
        </div>
        <a
          href="#"
          className="text-sm text-indigo-600 font-medium hover:underline"
        >
          View All
        </a>
      </div>

      <div className="space-y-6">
        {achievements.map((ach, idx) => (
          <div key={idx} className="flex items-start justify-between gap-3">
            {/* Icon with light background */}
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br ${ach.color}`}
            >
              <span className="text-xl">{ach.icon}</span>
            </div>

            <div className="flex-1">
              <h4 className="text-sm font-semibold text-gray-800">
                {ach.title}
              </h4>
              <p className="text-xs text-gray-400">{ach.desc}</p>

              {ach.done ? (
                <div className="flex justify-between mt-1 text-sm">
                  <span className="text-green-600 font-medium">Done</span>
                  <span className="text-gray-500">{ach.value}</span>
                </div>
              ) : (
                <div className="mt-2">
                  <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-gray-300"
                      style={{
                        width: `${
                          ach.progress
                            ? (ach.progress.current / ach.progress.total) * 100
                            : 0
                        }%`,
                      }}
                    />
                  </div>
                  <div className="flex justify-end text-xs text-gray-500 mt-1">
                    {ach.progress?.current ?? 0}/{ach.progress?.total ?? 0}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
