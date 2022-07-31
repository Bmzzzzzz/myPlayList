const usersDetails = [
  {
    firstName: "Israel",
    lastName: "Israeli",
    dob: "13/12/1987",
    email: "israel@gmail.com",
    level: "student",
    classId: "cjxp2149",
    permissions: "viewer",
    TF: [
      { Value: 21.3, Date: "1/6/2022" },
      { Value: 23.4, Date: "3/6/2022" },
      { Value: 25.6, Date: "4/6/2022" },
    ],
    TR: [
      { Value: 12, Date: "3/6/2022" },
      { Value: 13, Date: "6/6/2022" },
      { Value: 14, Date: "10/6/2022" },
    ],
    calibration: { x: 145, y: 21 },
    isActive: true,
    currentBook: { name: "Harry potter", genre: "Fantasy" },
  },
  {
    firstName: "Israel2",
    lastName: "Israeli2",
    dob: "13/12/1987",
    email: "israel2@gmail.com",
    level: "student",
    classId: "cjxp2149",
    permissions: "viewer",
    TF: [
      { Value: 21.3, Date: "1/6/2022" },
      { Value: 23.4, Date: "3/6/2022" },
      { Value: 25.6, Date: "4/6/2022" },
    ],
    TR: [
      { Value: 12, Date: "3/6/2022" },
      { Value: 13, Date: "6/6/2022" },
      { Value: 14, Date: "10/6/2022" },
    ],
    calibration: { x: 145, y: 21 },
    isActive: true,
    currentBook: { name: "Harry potter", genre: "Fantasy" },
  },
];
let assesmentResults = [
  {
    date: "4/6/2022",
    testAnswer: [
      {
        questionId: 2,
        answer: true,
      },
      {
        questionId: 3,
        answer: false,
      },
      {
        questionId: 4,
        answer: true,
      },
      {
        questionId: 5,
        answer: false,
      },
    ],
    result: {
      WPM: 95,
      STD: 4,
      CMP: 5,
    },

    isActive: true,
  },
  {
    date: "5/6/2022",
    testAnswer: [
      {
        questionId: 2,
        answer: false,
      },
      {
        questionId: 3,
        answer: true,
      },
      {
        questionId: 4,
        answer: true,
      },
      {
        questionId: 5,
        answer: false,
      },
    ],
    result: {
      WPM: 87,
      STD: 3,
      CMP: 6,
    },

    isActive: true,
  },
];
let trainReading = [
  {
    bookName: "Harry Potter",
    genre: "ficition",
    srcSound: {}, //????
    answers: [
      {
        t_type: "pushup",
        answers: [
          {
            orderNum: 1,
            text: "Harry1",
          },
          {
            orderNum: 2,
            text: "voldemort",
          },
          {
            orderNum: 3,
            text: "somewhere",
          },
          {
            orderNum: 4,
            text: "sometime",
          },
        ],
      },
      {
        t_type: "pushup",
        answers: [
          {
            orderNum: 1,
            text: "Harry2",
          },
          {
            orderNum: 2,
            text: "voldemort",
          },
          {
            orderNum: 3,
            text: "somewhere",
          },
          {
            orderNum: 4,
            text: "sometime",
          },
        ],
      },
      {
        t_type: "pushup",
        answers: [
          {
            orderNum: 1,
            text: "Harry3",
          },
          {
            orderNum: 2,
            text: "voldemort",
          },
          {
            orderNum: 3,
            text: "somewhere",
          },
          {
            orderNum: 4,
            text: "sometime",
          },
        ],
      },
      {
        t_type: "pushup",
        answers: [
          {
            orderNum: 1,
            text: "Harry4",
          },
          {
            orderNum: 2,
            text: "voldemort",
          },
          {
            orderNum: 3,
            text: "somewhere",
          },
          {
            orderNum: 4,
            text: "sometime",
          },
        ],
      },
      {
        t_type: "level",
        answers: [
          {
            orderNum: 1,
            text: "Harrylevel",
          },
          {
            orderNum: 2,
            text: "voldemort",
          },
          {
            orderNum: 3,
            text: "somewhere",
          },
          {
            orderNum: 4,
            text: "sometime",
          },
        ],
      },
    ],

    date: "6/29/2022",
    value: 20,
  },
];

const fakeData = {
  usersDetails,
  assesmentResults,
  trainReading,
};
export default fake;
