import {
  GET_CHILDREN_ACTION,
  GET_COURSES_ACTION,
  GET_INBOX_ACTION,
  GET_SESSIONS_ACTION,
} from '../actions/parentActions';

export const initialState = {
  parents: [{ user_id: 0 }, { user_id: 1 }, { user_id: 2 }],

  children: [
    { parent_id: 0, user_id: 3, username: 'Joannsson', age: 7 },
    { parent_id: 1, user_id: 4, username: 'Jordansdaughter', age: 9 },
    { parent_id: 1, user_id: 5, username: 'Jordansson', age: 12 },
  ],

  enrollments: [
    { child_id: 0, course_id: 0, completed: false },
    { child_id: 0, course_id: 0, completed: false },
    { child_id: 0, course_id: 0, completed: false },
  ],

  courses: [
    {
      size: 5,
      description: 'lorem ipsup',
      subject: 'lorem ipsum',
    },
    {
      size: 5,
      description: 'lorem ipsup',
      subject: 'lorem ipsum',
    },
    {
      size: 5,
      description: 'lorem ipsup',
      subject: 'lorem ipsum',
    },
  ],
  schedules: [
    {
      course_id: 1,
      instructor_id: 1,
    },
    {
      course_id: 2,
      instructor_id: 2,
    },
    {
      course_id: 3,
      instructor_id: 3,
    },
  ],

  sessions: [
    {
      start_time: '5:00pm',
      start_date: '10-10-2010',
      end_date: '10-10-2010',
      end_time: '6:00pm',
      location: 'https://zoom.us/my/john123',
      schedule_id: 1,
    },
    {
      start_time: '6:00pm',
      start_date: '10-10-2010',
      end_date: '10-10-2010',
      end_time: '7:00pm',
      location: 'https://zoom.us/my/john123',
      schedule_id: 2,
    },
  ],

  prereqs: [
    { course_id: 1, precourse_id: 1 },
    { course_id: 2, precourse_id: 2 },
    { course_id: 3, precourse_id: 3 },
  ],

  inbox: [{ user_id: 0 }, { user_id: 3 }, { user_id: 8 }],

  messages: [
    {
      title: 'Help with Homework?',
      read: true,
      message: 'I need the answers to the assignment please.',
      inbox_id: 0,
      sender_id: 1,
    },
    {
      title: "What's my grade?",
      read: true,
      message: 'Hey Ms. Teacher can you tell me my grade?',
      inbox_id: 0,
      sender_id: 1,
    },
    {
      title: 'Going to need to cancel.',
      read: false,
      message: 'My child has to miss the class',
      inbox_id: 1,
      sender_id: 2,
    },
    {
      title: 'Kid is sick',
      read: true,
      message: 'Can we get a refund for this class?',
      inbox_id: 2,
      sender_id: 3,
    },
    {
      title: 'When is class?',
      read: false,
      message: 'I noticed the time was funky and had to ask.',
      inbox_id: 1,
      sender_id: 5,
    },
    {
      title: 'Is this a yoga course?',
      read: false,
      message: 'How is yoga and coding taught together?',
      inbox_id: 3,
      sender_id: 7,
    },
    {
      title: 'Where is my achievement?',
      read: false,
      message: "my achievement didn't pop up when I did class.",
      inbox_id: 0,
      sender_id: 1,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSES_ACTION:
      return {
        ...state,
        courses: action.payload,
      };
    case GET_CHILDREN_ACTION:
      return {
        ...state,
        children: action.payload,
      };
    case GET_SESSIONS_ACTION:
      return {
        ...state,
        sessions: action.payload,
      };
    case GET_INBOX_ACTION:
      return {
        ...state,
        inbox: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
