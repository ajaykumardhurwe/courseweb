import { Course } from '../types/course';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Full-Stack Web Development Bootcamp',
    description: 'Comprehensive course covering modern web development from front-end to back-end technologies.',
    category: 'Web Development',
    level: 'Intermediate',
    duration: '12 weeks',
    syllabus: [
      {
        title: 'Frontend Fundamentals',
        topics: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React.js']
      },
      {
        title: 'Backend Development',
        topics: ['Node.js', 'Express.js', 'RESTful APIs', 'Database Design']
      },
      {
        title: 'Advanced Concepts',
        topics: ['Authentication', 'Testing', 'Deployment', 'Performance Optimization']
      }
    ],
    language: 'English',
    prerequisites: ['Basic HTML/CSS', 'JavaScript Fundamentals', 'Programming Logic'],
    outcomes: [
      'Build full-stack web applications',
      'Implement secure user authentication',
      'Deploy applications to production',
      'Work with databases and APIs'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    instructor: {
      id: 'inst1',
      name: 'Sarah Johnson',
      bio: 'Senior Full-Stack Developer with 10+ years of industry experience',
      experience: '10 years',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/sarahjohnson',
        github: 'https://github.com/sarahj',
        youtube: 'https://youtube.com/@sarahcodes'
      },
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
    },
    price: 999,
    enrollmentType: 'Paid',
    rating: 4.8,
    studentsEnrolled: 1500
  },
  {
    id: '2',
    title: 'Data Science Fundamentals',
    description: 'Learn the basics of data science, statistics, and machine learning with Python.',
    category: 'Data Science',
    level: 'Beginner',
    duration: '8 weeks',
    syllabus: [
      {
        title: 'Python Basics',
        topics: ['Variables', 'Data Types', 'Control Flow', 'Functions']
      },
      {
        title: 'Data Analysis',
        topics: ['Pandas', 'NumPy', 'Data Visualization', 'Statistical Analysis']
      },
      {
        title: 'Machine Learning',
        topics: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation']
      }
    ],
    language: 'English',
    prerequisites: ['Basic Mathematics', 'No programming experience required'],
    outcomes: [
      'Understand data science fundamentals',
      'Analyze data using Python',
      'Create data visualizations',
      'Build basic machine learning models'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    instructor: {
      id: 'inst2',
      name: 'Michael Chen',
      bio: 'Data Scientist at Tech Corp with PhD in Computer Science',
      experience: '8 years',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/michaelchen',
        github: 'https://github.com/mchen'
      },
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
    },
    price: 799,
    enrollmentType: 'Paid',
    rating: 4.6,
    studentsEnrolled: 2200
  },
  {
    "id": "3",
    "title": "CGPSC Prelims & Mains Preparation Course",
    "description": "Comprehensive course covering all subjects of CGPSC Prelims and Mains, including syllabus breakdown and answer writing strategies.",
    "category": "Competitive Exams",
    "level": "Intermediate",
    "duration": "16 weeks",
    "syllabus": [
      {
        "title": "Prelims Paper 1 - General Studies",
        "topics": ["Indian History", "Geography", "Polity & Governance", "Economy", "General Science", "Environment", "Current Affairs"]
      },
      {
        "title": "Prelims Paper 2 - CSAT (Aptitude Test)",
        "topics": ["Logical Reasoning", "Data Interpretation", "Mathematical Aptitude", "Comprehension Skills"]
      },
      {
        "title": "Mains Paper 1 - Language",
        "topics": ["Essay Writing", "Precis Writing", "Grammar", "Translation"]
      },
      {
        "title": "Mains Paper 2 - General Studies I",
        "topics": ["History of India & Chhattisgarh", "Indian Culture", "Constitution & Polity", "Social Issues"]
      },
      {
        "title": "Mains Paper 3 - General Studies II",
        "topics": ["Indian Economy", "Planning & Development", "Science & Technology", "Sustainable Development"]
      },
      {
        "title": "Mains Paper 4 - General Studies III",
        "topics": ["Geography of Chhattisgarh", "Natural Resources", "Human Resource Development", "Tribal Welfare"]
      },
      {
        "title": "Mains Paper 5 - General Studies IV",
        "topics": ["Ethics & Integrity", "Aptitude", "Case Studies"]
      }
    ],
    "language": "Hindi",
    "prerequisites": ["Basic understanding of Indian Constitution", "General awareness about Chhattisgarh", "Reading habit for current affairs"],
    "outcomes": [
      "Strong foundation in all subjects of CGPSC",
      "Effective answer writing skills for Mains",
      "Confidence in handling Prelims MCQs",
      "Better understanding of Chhattisgarh-specific topics"
    ],
    "thumbnail": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201912/CGPSC_Recruitment_cg_state_ser.jpeg?size=690:388",
    "instructor": {
      "id": "inst3",
      "name": "Ajay Dhurwe",
      "bio": "Experienced mentor for CGPSC with years of teaching and guidance in state-level exams.",
      "experience": "6 years",
      "socialLinks": {
        "youtube": "https://youtube.com/@mcqbook",
        "telegram": "https://t.me/cgpscexamprep"
      },
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    "price": 599,
    "enrollmentType": "Paid",
    "rating": 4.7,
    "studentsEnrolled": 1800
  }
];