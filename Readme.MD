# Project Camp - Project Management System

Project Camp is a full-stack, comprehensive Project Management System designed to support collaborative teamwork. The system provides powerful features for organizing projects, managing nested tasks (subtasks), maintaining detailed project notes, and handling secure user authentication with multi-tier role-based access control.

## 🚀 Features

### Backend (REST API)
- **Advanced Authentication:** Secure JWT-based authentication system with access & refresh token mechanisms. Includes email verification and complete password recovery flows.
- **Role-Based Access Control (RBAC):** Three-tier permission architecture:
  - **Admin:** Full system and project access, member management.
  - **Project Admin:** Task and content management within specific assigned projects.
  - **Member:** View access and ability to update task/subtask statuses.
- **Project & Task Management:** Create and organize projects, invite team members via email, and assign roles. Manage tasks and subtasks with statuses (`todo`, `in_progress`, `done`).
- **File & Media Handling:** Support for uploading multiple file attachments on tasks (via Multer), securely stored in the public directory with metadata tracking.
- **Project Notes:** Collaborative workspace notes scoped to projects (Admin access for creation/modification).

### Frontend (React + Vite) - *Work in Progress*
- **Premium UI/UX:** A highly dynamic, aesthetic user interface using Vanilla CSS featuring modern typography, glassmorphism elements, micro-animations, and hover effects.
- **State Management:** Using Zustand for lightweight, efficient state handling of user sessions and project data.
- **Dynamic Routing:** Protected routes with `react-router-dom` to ensure secure navigation based on authentication status and user roles.
- **Interactive Boards:** Kanban-style task management interfaces with easy status updating and modal-based deep dives for task details and file attachments.

## 🛠️ Technology Stack

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose (Data Modeling)
- JWT (JSON Web Tokens) for Auth
- Multer (File Uploads)

**Frontend:**
- React 18 & Vite
- Vanilla CSS (Custom Design System)
- React Router DOM
- Axios
- Lucide React (Icons)
- Zustand (State Management)

## 📖 API Documentation Structure

The backend provides a well-structured RESTful API under the `/api/v1/` prefix:

### 1. Authentication (`/api/v1/auth/`)
- `POST /register`, `POST /login`, `POST /logout`
- `GET /current-user`, `POST /refresh-token`
- Password Management: `/change-password`, `/forgot-password`, `/reset-password/:token`
- Email Verification flows.

### 2. Projects (`/api/v1/projects/`)
- CRUD operations for projects (`GET`, `POST`, `PUT`, `DELETE`).
- Member management: `/members` endpoints to add, list, update roles, and remove team members.

### 3. Tasks (`/api/v1/tasks/`)
- Comprehensive task CRUD within specific projects (`/:projectId/t/:taskId`).
- Subtask management endpoints (`/:projectId/t/:taskId/subtasks`).

### 4. Notes (`/api/v1/notes/`)
- Create, Read, Update, Delete functionality for project-specific notes.

## 🔒 Security Specifications
- Input validation across all endpoints.
- Role-based authorization middleware restricting access appropriately.
- Secure file upload configurations.
- Cross-Origin Resource Sharing (CORS) configured for frontend communication.

## 🚦 Getting Started (Local Development)

### Prerequisites
- Node.js (v16+)
- MongoDB instance running

### Backend Setup
1. Navigate to the `Backend` directory: `cd Backend`
2. Install dependencies: `npm install`
3. Configure environment variables in `.env` (Port, MongoDB URI, JWT secrets, Email configs).
4. Run development server: `npm run dev`

### Frontend Setup
1. Navigate to the `Frontend` directory: `cd Frontend`
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
