# Full Stack Task Management App

A full-stack task management application built with React, Node.js, Express, and MongoDB. Features JWT authentication, task filtering, search, and analytics dashboard.

## Tech Stack

**Frontend:** React.js, Vite, Axios, React Router

**Backend:** Node.js, Express.js, MongoDB, Mongoose

**Auth:** JWT

## Features

- User registration and login with JWT authentication
- Create, update, delete, and toggle task status (todo / done)
- Priority levels — low, medium, high
- Filter tasks by status and search by title
- Analytics dashboard — total, completed, pending tasks, and completion rate

## Project Structure

```
full-stack-task-app/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│
└── README.md
```

## API Endpoints

**Auth**

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login and get token |

**Tasks**

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/tasks | Get all tasks |
| POST | /api/tasks | Create task |
| PUT | /api/tasks/:id | Update task |
| DELETE | /api/tasks/:id | Delete task |
| GET | /api/tasks/stats | Get analytics |

## Local Setup

**1. Clone the repository**

```bash
git clone https://github.com/karthiknani229-art/full-stack-task-app.git
cd full-stack-task-app
```

**2. Backend setup**

```bash
cd backend
npm install
npm run dev
```

Create a `.env` file inside `/backend`:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/taskmanager
JWT_SECRET=your_secret_key
```

**3. Frontend setup**

```bash
cd frontend
npm install
npm run dev
```

App runs at: http://localhost:5173

## Author

Penta Karthik — [GitHub](https://github.com/karthiknani229-art)
