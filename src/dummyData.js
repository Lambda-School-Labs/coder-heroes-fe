export const dummyData = {
  courses: [
    {
      course_id: 1,
      course_name: 'Some cheese',
      course_description: 'A course description goes here and I could really just put lorem ipsum but I really just feel like typing stream of consciousness style here.',
      days_of_week: ['Monday'],
      max_size: 20,
      enrolled_students: 2,
      min_age: 7,
      max_age: 12,
      instructor_id: 2,
      program_id: 3,
      start_time: '05:00:00',
      end_time: '5:30:00',
      start_date: '04/04/2022',
      end_date: '04/28/2022',
      number_of_sessions: 4,
      difficulty: 'Easy',
      session_type: '1-on-1',
      syllabus_link: 'https://docs.google.com',
      status: {
        approval: 'pending',
        feedback: null
      }
    },
    {
      course_id: 2,
      course_name: 'App alphabet soup',
      course_description: 'It is pretty easy and simple to understand I mean an app going into soup just makes sense intrensically and I dont think anyone should think twice about that whatsoever.',
      days_of_week: ['Monday','Wednesday', 'Friday'],
      max_size: 30,
      enrolled_students: 14,
      min_age: 7,
      max_age: 12,
      instructor_id: 2,
      program_id: 1,
      start_time: '08:00:00',
      end_time: '12:30:00',
      start_date: '11/15/2022',
      end_date: '11/22/2022',
      number_of_sessions: 6,
      difficulty: 'Hard',
      session_type: 'Group',
      syllabus_link: 'https://docs.google.com/something-ig', 
      status: {
        approval: 'pending',
        feedback: null
      } 
    },
    {
      course_id: 3,
      course_name: 'Coding Jumping Jacks',
      course_description: 'If youre going to code you should at least be able to do it while exercising, otherwise are you really a programmer? thought not.',
      days_of_week: ['Monday', 'Friday'],
      max_size: 100,
      enrolled_students: 60,
      min_age: 7,
      max_age: 12,
      instructor_id: 3,
      program_id: 1,
      start_time: '09:00:00',
      end_time: '1:45:00',
      start_date: '11/21/2022',
      end_date: '11/25/2022',
      number_of_sessions: 2,
      difficulty: 'Easy',
      session_type: 'Group',
      syllabus_link: 'https://docs.google.com/something-else-ig',
      status: {
        approval: 'accepted',
        feedback: 'Good job picking the most confusing combination of topics! Maybe next time just do a good job.'
      }  
    },
    {
      course_id: 4,
      course_name: 'Phoning things in',
      course_description: 'This course will show you the ropes of procrastinating and doing a barely good enough job on your projects, the pastime of most programmers.',
      days_of_week: ['Monday','Tuesday','Wednesday','Thursdays','Friday'],
      max_size: 15,
      enrolled_students: 15,
      min_age: 7,
      max_age: 12,
      instructor_id: 1,
      program_id: 1,
      start_time: '00:00:00',
      end_time: '11:59:00',
      start_date: '11/28/2022',
      end_date: '12/16/2022',
      number_of_sessions: 15,
      difficulty: 'Easy',
      session_type: '1-on-1',
      syllabus_link: 'https://docs.google.com/something-else-again-ig',
      status: {
        approval: 'pending',
        feedback: null
      }  
    },
    {
      course_id: 5,
      course_name: 'This one works',
      course_description: 'This course will be accepted because I decided so while making the mock data, not as if this is a good course idea. Its just late and I would like to get this over with.',
      days_of_week: ['Monday','Thursdays','Friday'],
      max_size: 15,
      enrolled_students: 9,
      min_age: 7,
      max_age: 12,
      instructor_id: 5,
      program_id: 1,
      start_time: '00:00:00',
      end_time: '11:59:00',
      start_date: '11/28/2022',
      end_date: '12/16/2022',
      number_of_sessions: 15,
      difficulty: 'Easy',
      session_type: '1-on-1',
      syllabus_link: 'https://docs.google.com/something-else-again-ig',
      status: {
        approval: 'accepted',
        feedback: 'Honestly whoever made this mock data is really pulling the leg of whoever reads it, apologies.'
      }  
    }
  ],

  instructor: {},
  instructors: [],
  selectedCourse: {
    id: 100000,
    course_id: 1000000,
    size: 12,
    description: 'Welcome to Python!',
    subject: 'Please select a course!',
    start_time: '',
    start_date: 'more - info',
    end_date: '11-19-2021',
    end_time: 'here',
    location: 'https://zoom.us/my/haleyh',
  },
  own_programs: [
    {
      id: '1',
      subject: 'Python',
      other: '',
      description: '',
      prerequisite: '',
      classSize: '',
      age: '',
      session: '',
      duration: '',
      date: 'Monday',
      time: '17:00:00',
      status: 'Pending',
    },
    {
      id: '2',
      subject: 'Java',
      other: '',
      description: '',
      prerequisite: '',
      classSize: '',
      age: '',
      session: '',
      duration: '',
      date: 'Sunday',
      time: '17:00:00',
      status: 'Approved',
    },
  ],
  errorMessage: '',
  instructor_data: [
    {
      instructor_id: 1,
      instructor_name: 'Jane Smith',
      user_id: 9,
      rating: 3,
      status: 'Approved',
      approved_by: 1,
      instructor_bio: 'I love making content for people to enjoy!',
      inbox: [],
    },
    {
      instructor_id: 2,
      instructor_name: 'Mike Smith',
      user_id: 9,
      rating: 3,
      status: 'Approved',
      approved_by: 1,
      instructor_bio: 'I love making content for people to enjoy!',
      inbox: [],
    },
    {
      instructor_id: 3,
      instructor_name: 'Jenny Smith',
      user_id: 9,
      rating: 3,
      status: 'Pending',
      approved_by: 1,
      instructor_bio: 'I love making content for people to enjoy!',
      inbox: [],
    },
    {
      instructor_id: 4,
      instructor_name: 'Nate Smith',
      user_id: 9,
      rating: 3,
      status: 'Pending',
      approved_by: 1,
      instructor_bio: 'I love making content for people to enjoy!',
      inbox: [],
    },
  ],
  course_id: [3],
  course_schedule: [
    {
      session_id: 0,
      course_id: 3,
      size: 1,
      description: 'Welcome to Python!',
      subject: 'Intro to Python',
      start_time: '15:00:00',
      start_date: '2021-12-15T07:00:00.000Z',
      end_date: '2021-12-16T07:00:00.000Z',
      end_time: '17:00:00',
      location: 'https://zoom.us/my/haleyh', // host by coderheros
      prereq: 'None',
      // after the instructor apply to teach the course,
      // we will post instructor id to backend
    },
    {
      session_id: 0,
      course_id: 0,
      size: 12,
      description: 'Welcome to JavaScript!',
      subject: 'Intro to JavaScript',
      start_time: '17:00:00',
      start_date: '2022-10-10T07:00:00.000Z',
      end_date: '2022-10-10T07:00:00.000Z',
      end_time: '17:00:00',
      location: 'https://zoom.us/my/haleyh',
      prereq: 'JS 101',
    },
    {
      session_id: 0,
      course_id: 1,
      size: 1,
      description: 'Welcome to CSS!',
      subject: 'Intro to CSS',
      start_time: '17:00:00',
      start_date: '2022-10-10T07:00:00.000Z',
      end_date: '2022-10-10T07:00:00.000Z',
      end_time: '17:00:00',
      location: 'https://zoom.us/my/haleyh',
      prereq: 'None',
    },
  ],
  newsfeed: [],
  classes: [
    {
      class_name: 'App Building Fundamentals',
      class_description:
        'A month-long course where students with design, build, and deploy an app from beginning to end!',
      days_of_week: ['Monday'],
      max_size: 20,
      min_age: 7,
      max_age: 12,
      instructor_id: 1,
      program_id: 1,
      start_time: '08:00:00',
      end_time: '12:30:00',
      start_date: '04/04/2022',
      end_date: '04/28/2022',
      location: "Children's Coding Center",
      number_of_sessions: 4,
    },
    {
      class_name: 'Mindful Design',
      class_description:
        'Students will learn about creativity and web design basics',
      days_of_week: ['Wednesday', 'Friday'],
      max_size: 12,
      min_age: 6,
      max_age: 10,
      instructor_id: 2,
      program_id: 3,
      start_time: '15:30:00',
      end_time: '17:45:00',
      start_date: '04/04/2022',
      end_date: '04/28/2022',
      location: "Children's Coding Center",
      number_of_sessions: 8,
    },
  ],
};
