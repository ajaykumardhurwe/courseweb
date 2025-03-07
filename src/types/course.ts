export interface Instructor {
  id: string;
  name: string;
  bio: string;
  experience: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    youtube?: string;
  };
  avatar: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  syllabus: {
    title: string;
    topics: string[];
  }[];
  language: string;
  prerequisites: string[];
  outcomes: string[];
  thumbnail: string;
  instructor: Instructor;
  price: number;
  enrollmentType: 'Free' | 'Paid' | 'Subscription';
  rating: number;
  studentsEnrolled: number;
}