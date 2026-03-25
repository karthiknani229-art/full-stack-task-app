# Task Management System (Full Stack)

## 🚀 Overview

A full-stack Task Management application built with Node.js, Express, MongoDB, and React.
The application allows users to manage tasks efficiently with authentication, filtering, search, and analytics.

---

## ✨ Features

### 🔐 Authentication

* User registration & login
* JWT-based authentication
* Protected routes

### 📋 Task Management

* Create, view, update, and delete tasks
* Task status toggle (todo ↔ done)
* Priority selection (low, medium, high)

### 🔎 Filtering & Search

* Filter tasks by status (All / Pending / Done)
* Search tasks by title

### 📊 Analytics

* Total tasks
* Completed tasks
* Pending tasks
* Completion rate

### 🎨 UI

* Clean and simple interface
* Structured layout (dashboard + task list)

---

## 🛠 Tech Stack

**Frontend**

* React (Vite)
* Axios
* React Router

**Backend**

* Node.js
* Express.js
* MongoDB (Mongoose)

**Authentication**

* JSON Web Tokens (JWT)

---

## 📦 Project Structure

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

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone <your-repo-link>
cd full-stack-task-app
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/taskmanager
JWT_SECRET=your_secret_key
```

Run backend:

```
npm run dev
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

Open:

```
http://localhost:5173
```

---

## 📡 API Endpoints

### Auth

* POST /api/auth/register
* POST /api/auth/login

### Tasks

* GET /api/tasks
* POST /api/tasks
* PUT /api/tasks/:id
* DELETE /api/tasks/:id

### Analytics

* GET /api/tasks/stats

---

## 💡 Key Design Decisions

* JWT for stateless authentication
* Middleware for route protection
* MongoDB for flexible schema
* Modular folder structure for scalability

---

## 📌 Notes

* The application runs fully locally.
* Deployment can be done if required.
