import React, { useState } from 'react';
import { Course } from '../types/course';
import { BookOpen, CheckCircle, PlayCircle, FileText, MessageCircle, ChevronDown } from 'lucide-react';

interface StudyContentProps {
  course: Course;
}

export const StudyContent: React.FC<StudyContentProps> = ({ course }) => {
  const [activeModule, setActiveModule] = useState(0);
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);
  const [expandedModule, setExpandedModule] = useState<number | null>(0);

  const handleTopicComplete = (topic: string) => {
    setCompletedTopics(prev => [...prev, topic]);
  };

  const calculateProgress = () => {
    const totalTopics = course.syllabus.reduce((acc, module) => acc + module.topics.length, 0);
    return Math.round((completedTopics.length / totalTopics) * 100);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <BookOpen className="w-6 h-6 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">{course.title}</h1>
                <p className="text-sm text-gray-500">with {course.instructor.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-gray-100 rounded-full px-3 py-1">
                <span className="text-sm font-medium text-gray-700">
                  Progress: {calculateProgress()}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Content Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Course Content</h2>
              <div className="space-y-4">
                {course.syllabus.map((module, moduleIndex) => (
                  <div key={moduleIndex} className="border rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedModule(expandedModule === moduleIndex ? null : moduleIndex)}
                      className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{module.title}</span>
                      </div>
                      <ChevronDown className={`w-5 h-5 transition-transform ${
                        expandedModule === moduleIndex ? 'transform rotate-180' : ''
                      }`} />
                    </button>
                    {expandedModule === moduleIndex && (
                      <div className="border-t">
                        {module.topics.map((topic, topicIndex) => (
                          <div
                            key={topicIndex}
                            className="flex items-center justify-between p-3 hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <PlayCircle className="w-5 h-5 text-blue-600" />
                              <span className="text-sm">{topic}</span>
                            </div>
                            {completedTopics.includes(topic) ? (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            ) : (
                              <button
                                onClick={() => handleTopicComplete(topic)}
                                className="text-xs text-blue-600 hover:text-blue-700"
                              >
                                Mark as Complete
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">Welcome to {course.title}</h2>
                <p className="text-gray-600 mb-6">{course.description}</p>

                <div className="bg-blue-50 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Course Overview</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-blue-600" />
                      <span>{course.syllabus.length} Modules</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <PlayCircle className="w-5 h-5 text-blue-600" />
                      <span>{course.duration} of content</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-blue-600" />
                      <span>Community support</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">What you'll learn</h3>
                    <ul className="list-disc list-inside space-y-2">
                      {course.outcomes.map((outcome, index) => (
                        <li key={index} className="text-gray-600">{outcome}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Prerequisites</h3>
                    <ul className="list-disc list-inside space-y-2">
                      {course.prerequisites.map((prerequisite, index) => (
                        <li key={index} className="text-gray-600">{prerequisite}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};