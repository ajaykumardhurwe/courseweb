import React, { useState } from 'react';
import { Course } from '../types/course';
import { Clock, Users, Star, BookOpen, ChevronRight, X } from 'lucide-react';
import { PaymentModal } from './PaymentModal';
import { StudyContent } from './StudyContent';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);

  const handlePaymentComplete = () => {
    setIsPaymentModalOpen(false);
    setIsModalOpen(false);
    setIsEnrolled(true);
  };

  const handleFreeEnrollment = () => {
    setIsModalOpen(false);
    setIsEnrolled(true);
  };

  if (isEnrolled) {
    return <StudyContent course={course} />;
  }

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
        <div className="relative">
          <img 
            src={course.thumbnail} 
            alt={course.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold">
            {course.level}
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <img 
              src={course.instructor.avatar}
              alt={course.instructor.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="text-sm font-medium text-gray-900">{course.instructor.name}</h3>
              <p className="text-xs text-gray-500">{course.instructor.experience} experience</p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h2>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{course.studentsEnrolled.toLocaleString()} students</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>{course.rating}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-gray-900">
                {course.price === 0 ? 'Free' : `$${course.price.toLocaleString()}`}
              </span>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>Enroll Now</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Enrollment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Course Enrollment</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <img 
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600">{course.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Course Syllabus</h4>
                <div className="space-y-3">
                  {course.syllabus.map((module, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-gray-900 mb-2">{module.title}</h5>
                      <ul className="list-disc list-inside text-gray-600 text-sm">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Prerequisites</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {course.prerequisites.map((prereq, index) => (
                    <li key={index}>{prereq}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">What You'll Learn</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {course.outcomes.map((outcome, index) => (
                    <li key={index}>{outcome}</li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Course Price</p>
                    <p className="text-3xl font-bold text-gray-900">
                      {course.price === 0 ? 'Free' : `$${course.price.toLocaleString()}`}
                    </p>
                  </div>
                  {course.price === 0 ? (
                    <button 
                      onClick={handleFreeEnrollment}
                      className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                      Enroll Now (Free)
                    </button>
                  ) : (
                    <button 
                      onClick={() => {
                        setIsPaymentModalOpen(true);
                        setIsModalOpen(false);
                      }}
                      className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                      Proceed to Payment
                    </button>
                  )}
                </div>
                <p className="text-sm text-gray-500">
                  By enrolling, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {isPaymentModalOpen && (
        <PaymentModal
          course={course}
          onClose={() => setIsPaymentModalOpen(false)}
          onPaymentComplete={handlePaymentComplete}
        />
      )}
    </>
  );
};