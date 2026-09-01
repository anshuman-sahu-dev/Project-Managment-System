# Project Camp Backend 🏕️

Project Camp Backend is a robust, RESTful API service designed to power a collaborative project management system. It provides a comprehensive set of features for team organization, nested task management, and secure role-based access control.

## 🌟 Key Features

- **Authentication & Authorization**
  - Secure JWT-based login and registration.
  - Email verification tokens.
  - Complete password recovery flow (forgot/reset/change).
  - Role-Based Access Control (RBAC): Admin, Project Admin, and Member tiers.

- **Project Management**
  - Create, view, update, and delete projects.
  - Team member management via email invitations.

- **Task & Subtask System**
  - Hierarchical tasks and subtasks.
  - Status tracking (`todo`, `in_progress`, `done`).
  - Assignee tracking and member-level completion capabilities.

- **Collaboration Tools**
  - Support for multiple file attachments on tasks.
  - Dedicated project-level notes for team collaboration.

## 🏗️ Architecture & Technologies

- **Node.js & Express:** Core server framework.
- **MongoDB:** NoSQL database for flexible data modeling.
- **JWT (JSON Web Tokens):** For stateless, secure authentication.
- **Multer:** Middleware for handling multipart/form-data (file uploads).
- **CORS:** Configured for secure frontend integration.

## 🔌 API Endpoints Structure

All endpoints are prefixed with `/api/v1/`.

### 🔐 Authentication (`/auth`)
| Method | Endpoint | Description | Access |
|---|---|---|---|
| POST | `/register` | Register new user | Public |
| POST | `/login` | Authenticate user | Public |
| POST | `/logout` | Invalidate session | Secured |
| GET | `/current-user` | Get session details | Secured |
| POST | `/change-password` | Update password | Secured |
| POST | `/refresh-token` | Obtain new access token | Public |
| GET | `/verify-email/:verificationToken` | Verify user email | Public |
| POST | `/forgot-password` | Request password reset | Public |
| POST | `/reset-password/:resetToken` | Reset password | Public |

### 📁 Projects (`/projects`)
| Method | Endpoint | Description | Access |
|---|---|---|---|
| GET | `/` | List accessible projects | Secured |
| POST | `/` | Create new project | Admin |
| GET | `/:projectId` | Get project details | Role-based |
| PUT | `/:projectId` | Update project | Admin |
| DELETE | `/:projectId` | Delete project | Admin |
| GET | `/:projectId/members` | List members | Secured |
| POST | `/:projectId/members` | Add member | Admin |
| PUT | `/:projectId/members/:userId` | Update member role | Admin |
| DELETE | `/:projectId/members/:userId` | Remove member | Admin |

### 📋 Tasks (`/tasks`)
| Method | Endpoint | Description | Access |
|---|---|---|---|
| GET | `/:projectId` | List project tasks | Role-based |
| POST | `/:projectId` | Create task | Admin/Project Admin |
| GET | `/:projectId/t/:taskId` | Get task details | Role-based |
| PUT | `/:projectId/t/:taskId` | Update task | Admin/Project Admin |
| DELETE | `/:projectId/t/:taskId` | Delete task | Admin/Project Admin |
| POST | `/:projectId/t/:taskId/subtasks`| Create subtask | Admin/Project Admin |
| PUT | `/:projectId/st/:subTaskId` | Update subtask status | Role-based |
| DELETE | `/:projectId/st/:subTaskId` | Delete subtask | Admin/Project Admin |

### 📝 Notes (`/notes`)
| Method | Endpoint | Description | Access |
|---|---|---|---|
| GET | `/:projectId` | List notes | Role-based |
| POST | `/:projectId` | Create note | Admin |
| GET | `/:projectId/n/:noteId`| Get note details | Role-based |
| PUT | `/:projectId/n/:noteId`| Update note | Admin |
| DELETE | `/:projectId/n/:noteId`| Delete note | Admin |

### 🩺 Health (`/healthcheck`)
| Method | Endpoint | Description | Access |
|---|---|---|---|
| GET | `/` | System status check | Public |

## 🛡️ Role & Permission Matrix

| Feature | Admin | Project Admin | Member |
|---|---|---|---|
| Create Project | ✅ | ❌ | ❌ |
| Update/Delete Project | ✅ | ❌ | ❌ |
| Manage Project Members | ✅ | ❌ | ❌ |
| Create/Update/Delete Tasks | ✅ | ✅ | ❌ |
| View Tasks | ✅ | ✅ | ✅ |
| Update Subtask Status | ✅ | ✅ | ✅ |
| Create/Delete Subtasks | ✅ | ✅ | ❌ |
| Create/Update/Delete Notes | ✅ | ❌ | ❌ |
| View Notes | ✅ | ✅ | ✅ |

## 🚀 Getting Started

1. **Clone the repository.**
2. **Navigate to the Backend directory:** `cd Backend`
3. **Install dependencies:** `npm install`
4. **Environment Setup:** Create a `.env` file based on `.env.example` (or configure DB/JWT credentials).
5. **Run the server:** `npm run dev` (for development) or `npm start` (for production).
