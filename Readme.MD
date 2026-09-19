# 🚀 Project Camp — Full-Stack Project Management System

**Project Camp** is a modern, production-ready, full-stack Project Management System engineered for seamless team collaboration, project workspace organization, and real-time Kanban task management. It combines a high-performance **Node.js 20 / Express 5 / MongoDB** backend API with an aesthetic, dark-mode glassmorphic **React 19 / Vite 8 / Zustand 5** frontend client.

---

## 🌟 Key Features Overview

### 🎨 Frontend Highlights (React 19 + Vite 8 + Zustand)
- **Dashboard & Project Workspaces**:
  - Interactive grid displaying projects with status pills (`Active`, `Planning`, `Completed`), description summaries, and real-time team member counts.
  - **Create Project Modal**: Modal dialog for creating projects with validation, description fields, status selector pills, and initial team size allocation.
- **Kanban Board & Task Management**:
  - Dynamic multi-column board (`To Do`, `In Progress`, `Done`) with real-time column task counters.
  - **Add Task Modal**: Create tasks pre-selecting column status (`todo`, `in_progress`, `done`).
  - **Interactive Task Card Menu**: Quick-action dropdown (`...`) allowing users to advance tasks between `To Do` ➔ `In Progress` ➔ `Done` or delete tasks.
  - **Visual Strikethrough & Completion**: Completed tasks render with success checkmarks and strikethrough typography.
- **Employee & Team Management**:
  - **Manage Employees Modal**: Positioned directly before the "Add Task" button on the Project Board header.
  - **Add Employees**: Assign team members to projects using Name, Email / Employee ID, and Role (`Member` or `Project Admin`).
  - **Remove Employees**: Remove members with instant member count updates across Dashboard cards and Project Boards.
- **User Profile & WebRTC Camera Capture**:
  - **Persistent User Credentials**: Displays user registered `Full Name`, `Employee ID`, and `Email Address`. Read-only by default to prevent unintended edits, editable via **Edit Profile**.
  - **Profile Image Options**:
    - **From Device**: File upload selector converting images into persistent data URLs.
    - **Take Picture**: Built-in camera capture modal utilizing WebRTC `getUserMedia` live video preview and canvas snapshot capabilities.
  - **Logout Action**: Dedicated **Logout** button below profile disclaimer text and in the top navigation bar.
- **Fixed Sticky Top Navigation**:
  - Pinned `position: sticky; top: 0; z-index: 1000` with an opaque dark frosted background (`rgba(10, 10, 12, 0.96)`) and 16px backdrop blur.
  - Prevents scrolling content from bleeding through or overlapping.
  - Fully responsive across Desktop (> 1024px), Tablet (768px), and Mobile (480px).

### ⚙️ Backend Highlights (Node.js ES Modules + Express 5 + MongoDB)
- **Advanced Authentication & Security**:
  - Dual JWT mechanism (Access & Refresh tokens stored securely in Cookies/Headers).
  - Bcrypt password hashing, email verification tokens, and password reset flows.
- **Multi-Tier Role-Based Access Control (RBAC)**:
  - **Admin**: Full system access, project workspace deletion, and member management.
  - **Project Admin**: Task CRUD, subtask allocation, note creation, and member role assignment.
  - **Member**: Read access, task board interaction, and status updates.
- **Project & Task API Engine**:
  - MongoDB Mongoose 9 ODM with aggregation pipelines for team counts and task metrics.
  - Subtask breakdown management (`/api/v1/tasks/:projectId/t/:taskId/subtasks`).
  - Scoped project notes API (`/api/v1/notes`).
  - File upload engine configured with Multer for task attachments.
- **Transactional HTML Email Service**:
  - Nodemailer & Mailgen engine for sending structured HTML emails for password resets and email verifications.

---

## 🛠️ Technology Stack

### Frontend Architecture
| Tech | Description |
| :--- | :--- |
| **React 19** | Modern UI Library |
| **Vite 8** | Next-Gen Frontend Tooling & HMR |
| **Zustand 5** | Lightweight Global State Management |
| **React Router 7** | Client-Side Routing & Protected Routes |
| **Axios** | HTTP Client with Token Interceptors |
| **Lucide React** | Comprehensive Icon Set |
| **Vanilla CSS3** | Custom Glassmorphic Dark Design System |

### Backend Architecture
| Tech | Description |
| :--- | :--- |
| **Node.js (ES Modules)** | JavaScript Runtime (`"type": "module"`) |
| **Express 5** | Web Framework & Middleware Pipeline |
| **MongoDB & Mongoose 9** | NoSQL Database & Aggregation ODM |
| **JWT (JsonWebToken)** | Secure Stateless Token Auth |
| **Express-Validator** | Request Payload Sanitization & Validation |
| **Multer** | Multipart Form-Data File Upload Engine |
| **Nodemailer & Mailgen** | Transactional HTML Email Engine |

---

## 📁 Repository Directory Structure

```
Project-Management-System/
├── Backend/                 # Express 5 REST API Backend
│   ├── public/              # Static uploads & file attachment storage
│   ├── src/
│   │   ├── db/              # MongoDB connection initializer
│   │   ├── models/          # User, Project, ProjectMember, Task, SubTask, Note schemas
│   │   ├── controllers/     # Auth, Project, Task, Note & HealthCheck handlers
│   │   ├── routes/          # Express route endpoints
│   │   ├── middlewares/     # JWT Auth, Multer upload & Validation middlewares
│   │   ├── validators/      # Express-validator schema rules
│   │   ├── utils/           # ApiError, ApiResponse, AsyncHandler & Mail utilities
│   │   ├── app.js           # Express application setup
│   │   └── index.js         # Backend entry point
│   ├── .env                 # Backend environment variables
│   ├── package.json         # Backend dependencies & scripts
│   └── Readme.MD            # Detailed Backend API Documentation
│
├── Frontend/                # React 19 + Vite 8 Frontend Application
│   ├── public/              # Static public assets
│   ├── src/
│   │   ├── assets/          # Brand logos & graphics
│   │   ├── components/      # CreateProjectModal, CreateTaskModal, ManageEmployeesModal
│   │   ├── pages/           # Dashboard, ProjectDetails, AdminProfile, Login, Register
│   │   ├── store/           # Zustand stores: authStore, projectStore, taskStore
│   │   ├── utils/           # Axios API client setup
│   │   ├── App.jsx          # React Router & ProtectedRoute wrapper
│   │   └── index.css        # Global CSS design system & sticky top nav
│   ├── package.json         # Frontend dependencies & scripts
│   └── README.md            # Detailed Frontend Documentation
│
└── Readme.MD                # Master Project Documentation
```

---

## 📡 REST API Endpoint Overview

All API endpoints are prefixed with `/api/v1/`:

| Module | Base Path | Key Functionality |
| :--- | :--- | :--- |
| **Auth** | `/api/v1/auth` | Login, Register, Logout, Current User, Refresh Token, Password Reset, Email Verification |
| **Projects** | `/api/v1/projects` | Workspace CRUD, Team Member List, Add Member, Update Role, Remove Member |
| **Tasks** | `/api/v1/tasks` | Task CRUD, File Attachment Uploads, Status Updates, Subtask Management |
| **Notes** | `/api/v1/notes` | Project Notes CRUD |
| **Health** | `/api/v1/healthcheck` | Server Operational Status Check |

For complete payload structures and detailed request parameters, see the [Backend Readme.MD](file:///d:/Chai%20and%20Code/Node%20Js%20Project/Project%20Managment%20System/Backend/Readme.MD).

---

## 🚦 Getting Started (Local Setup)

### 1. Prerequisites
- **Node.js** (v18+ recommended)
- **npm** (v9+ recommended)
- **MongoDB** Atlas Cluster or local MongoDB server

---

### 2. Backend Setup & Run

1. Open terminal and navigate to `Backend`:
   ```bash
   cd Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `Backend` directory:
   ```env
   PORT=8000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/projmanage
   CORS_ORIGIN=http://localhost:5173

   ACCESS_TOKEN_SECRET=your_access_token_secret
   ACCESS_TOKEN_EXPIRY=1d
   REFRESH_TOKEN_SECRET=your_refresh_token_secret
   REFRESH_TOKEN_Expiry=10d

   MAILTRAP_SMTP_HOST=sandbox.smtp.mailtrap.io
   MAILTRAP_SMTP_PORT=2525
   MAILTRAP_SMTP_USERNAME=your_username
   MAILTRAP_SMTP_PASSWORD=your_password
   FORGOT_PASSWORD_REDIRECT_URL=http://localhost:5173/forgot-password
   ```

4. Start development server:
   ```bash
   npm run dev
   ```
   The backend API will run on: `http://localhost:8000/`

---

### 3. Frontend Setup & Run

1. Open a new terminal and navigate to `Frontend`:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```
   The application UI will run on: `http://localhost:5173/`

---

## 🔐 Quick Test Credentials

You can test the application using default credentials or register a new user:

- **Employee ID**: `EMP-001`
- **Password**: `password123`

---

## 📜 License

This project is open-source software licensed under the [ISC License](LICENSE).
