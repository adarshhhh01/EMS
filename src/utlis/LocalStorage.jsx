const EMPLOYEES = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@company.com",
    password: "123",
    taskStats: {
      active: 3,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        id: 101,
        title: "Design Homepage",
        description: "Create UI for main landing page",
        date: "2023-10-15",
        categories: ["Design", "Frontend"],
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        id: 102,
        title: "API Integration",
        description: "Connect frontend to user API",
        date: "2023-10-20",
        categories: ["Development", "Backend"],
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        id: 103,
        title: "Database Optimization",
        description: "Improve query performance",
        date: "2023-10-25",
        categories: ["Database"],
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        id: 104,
        title: "Mobile Responsiveness",
        description: "Fix layout issues on mobile",
        date: "2023-10-18",
        categories: ["Frontend"],
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@company.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        id: 201,
        title: "User Authentication",
        description: "Implement login system",
        date: "2023-10-16",
        categories: ["Security", "Backend"],
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        id: 202,
        title: "Email Templates",
        description: "Design transactional emails",
        date: "2023-10-22",
        categories: ["Design"],
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    firstName: "Rahul",
    email: "employee3@company.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        id: 301,
        title: "SEO Optimization",
        description: "Improve page rankings",
        date: "2023-10-17",
        categories: ["Marketing"],
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        id: 302,
        title: "Content Creation",
        description: "Write blog posts",
        date: "2023-10-19",
        categories: ["Marketing"],
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        id: 303,
        title: "Social Media Campaign",
        description: "Plan next quarter's strategy",
        date: "2023-10-30",
        categories: ["Marketing"],
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    firstName: "Ananya",
    email: "employee4@company.com",
    password: "123",
    taskStats: {
      active: 3,
      newTask: 1,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        id: 401,
        title: "Bug Fixes",
        description: "Resolve critical issues",
        date: "2023-10-15",
        categories: ["Development"],
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        id: 402,
        title: "Unit Tests",
        description: "Write test cases",
        date: "2023-10-21",
        categories: ["Testing"],
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        id: 403,
        title: "Documentation",
        description: "Update API docs",
        date: "2023-10-28",
        categories: ["Development"],
        active: false,
        newTask: true,
        completed: false,
        failed: true,
      },
      {
        id: 404,
        title: "Performance Testing",
        description: "Load test server",
        date: "2023-10-31",
        categories: ["Testing"],
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@company.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 2,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        id: 501,
        title: "Database Migration",
        description: "Move to new DB cluster",
        date: "2023-10-23",
        categories: ["Database", "Backend"],
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        id: 502,
        title: "CI/CD Pipeline",
        description: "Setup deployment workflow",
        date: "2023-10-26",
        categories: ["DevOps"],
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        id: 503,
        title: "Security Audit",
        description: "Check for vulnerabilities",
        date: "2023-11-01",
        categories: ["Security"],
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
];

const ADMIN = [
  {
    admin: {
      id: 100,
      firstName: "Aditya",
      email: "admin@company.com",
      password: "123",
    },
  },
];



export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(EMPLOYEES));
  localStorage.setItem('admin', JSON.stringify(ADMIN));

};
export const getLocalStorage = () => {
   const employee = JSON.parse(localStorage.getItem('employees'));
   const admin = JSON.parse(localStorage.getItem('admin'));
   return { employee, admin }; // <-- Correct!
};