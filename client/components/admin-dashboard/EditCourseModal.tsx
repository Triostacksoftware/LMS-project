"use client";
import React, { useState } from "react";

interface Chapter {
  title: string;
  description: string;
  youtubeUrl: string;
}

interface EditCourseModalProps {
  open: boolean;
  onClose: () => void;
  course: {
    title: string;
    instructor: string;
    category: string;
    level: string;
    description: string;
    duration: string;
    price: number;
    chapters?: Chapter[];
  };
  onSave?: (course: any) => void;
}

export default function EditCourseModal({
  open,
  onClose,
  course,
  onSave,
}: EditCourseModalProps) {
  const [chapters, setChapters] = useState<Chapter[]>(course.chapters || []);
  const [chapterForm, setChapterForm] = useState<Chapter>({
    title: "",
    description: "",
    youtubeUrl: "",
  });

  if (!open) return null;

  function handleChapterChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setChapterForm({ ...chapterForm, [e.target.name]: e.target.value });
  }

  function handleAddChapter(e: React.FormEvent) {
    e.preventDefault();
    if (!chapterForm.title || !chapterForm.youtubeUrl) return;
    setChapters([...chapters, chapterForm]);
    setChapterForm({ title: "", description: "", youtubeUrl: "" });
  }

  function handleRemoveChapter(idx: number) {
    setChapters(chapters.filter((_, i) => i !== idx));
  }

  function handleSave() {
    if (onSave) onSave({ ...course, chapters });
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center text-black">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl relative">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-2 text-gray-800">Edit Course</h2>
        <div className="mb-4">
          <div className="font-semibold text-gray-700">{course.title}</div>
          <div className="text-xs text-gray-500">
            {course.instructor} • {course.category} • {course.level}
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {course.duration} • ${course.price}
          </div>
          <div className="text-sm text-gray-600 mt-2">{course.description}</div>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Chapters</h3>
        <ul className="mb-4 space-y-2">
          {chapters.map((ch, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 bg-gray-50 rounded p-2"
            >
              <div className="flex-1">
                <div className="font-medium text-gray-700">{ch.title}</div>
                <div className="text-xs text-gray-500 mb-1">
                  {ch.description}
                </div>
                <a
                  href={ch.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-indigo-600 hover:underline"
                >
                  {ch.youtubeUrl}
                </a>
              </div>
              <button
                className="text-xs text-red-500 hover:underline mt-1"
                onClick={() => handleRemoveChapter(idx)}
              >
                Remove
              </button>
            </li>
          ))}
          {chapters.length === 0 && (
            <li className="text-xs text-gray-400">No chapters yet.</li>
          )}
        </ul>
        <form onSubmit={handleAddChapter} className="space-y-2 mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              name="title"
              value={chapterForm.title}
              onChange={handleChapterChange}
              placeholder="Chapter Title"
              className="flex-1 border rounded px-3 py-2"
              required
            />
            <input
              type="text"
              name="youtubeUrl"
              value={chapterForm.youtubeUrl}
              onChange={handleChapterChange}
              placeholder="YouTube Video Link"
              className="flex-1 border rounded px-3 py-2"
              required
            />
          </div>
          <textarea
            name="description"
            value={chapterForm.description}
            onChange={handleChapterChange}
            placeholder="Chapter Description (optional)"
            className="w-full border rounded px-3 py-2"
            rows={2}
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded font-semibold hover:bg-indigo-700 transition"
          >
            Add Chapter
          </button>
        </form>
        <button
          className="w-full bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700 transition"
          onClick={handleSave}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
