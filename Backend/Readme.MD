# ⚙️ Project Management System — Backend API

A robust, production-grade RESTful API backend built with **Node.js**, **Express 5**, and **MongoDB (Mongoose 9)**. Designed to handle user authentication, role-based project management, Kanban task tracking, subtasks, project notes, transactional emails, and file attachments.

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **Node.js (ES Modules)** | JavaScript Runtime Environment (`"type": "module"`) |
| **Express 5** | High-performance Web Framework |
| **MongoDB & Mongoose 9** | NoSQL Database & Aggregation Pipeline ODM |
| **JWT (JsonWebToken)** | Secure Access & Refresh Token Authentication |
| **Bcrypt** | Password Hashing & Encryption |
| **Express-Validator** | Request Payload Sanitization & Validation |
| **Multer** | Multipart Form-Data & File Upload Handling |
| **Nodemailer & Mailgen** | Transactional HTML Email Engine (Password Reset, Verification) |
| **Cookie-Parser & CORS** | Cookie Session Management & Cross-Origin Resource Sharing |
| **Nodemon** | Development Auto-Reload Server |

---

## 📁 Directory Structure

```
Backend/
├── public/                 # Uploaded files & static assets
├── src/
│   ├── db/                 # Database connection logic
│   │   └── index.js        # MongoDB connection initializer
│   ├── models/             # Mongoose Schemas & Data Models
│   │   ├── user.model.js          # User credentials, tokens & roles
│   │   ├── project.models.js       # Project workspace schema
│   │   ├── ProjectMember.model.js  # Project team membership & roles
│   │   ├── Task.model.js           # Project task board schema
│   │   ├── SubTask.model.js        # Subtask breakdown schema
│   │   └── Note.models.js          # Project notes schema
│   ├── controllers/        # Request Handlers & Business Logic
│   │   ├── auth.controllers.js         # Authentication & password management
│   │   ├── project.controllers.js      # Projects & team member management
│   │   ├── task.controllers.js         # Task CRUD & subtasks
│   │   ├── note.controllers.js         # Project notes CRUD
│   │   └── HealthCheck.controllers.js  # System health check
│   ├── routes/             # Express API Route Definitions
│   │   ├── auth.routes.js
│   │   ├── project.routes.js
│   │   ├── task.routes.js
│   │   ├── note.routes.js
│   │   └── HealthCheck.routes.js
│   ├── middlewares/        # Custom Middlewares
│   │   ├── auth.middleware.js      # JWT verification & project permissions
│   │   ├── multer.middleware.js    # File attachment upload configuration
│   │   └── validator.middleware.js # Express-validator request wrapper
│   ├── validators/         # Input Validation Rules
│   │   └── index.js
│   ├── utils/              # Helper Utilities & Formatters
│   │   ├── api-error.js            # Standardized API Error Handler
│   │   ├── api-response.js         # Standardized API Response Wrapper
│   │   ├── async-handler.js        # Async Controller Error Wrapper
│   │   ├── constants.js            # System Constants & Roles Enum
│   │   └── mail.js                 # Transactional Email Sender
│   ├── app.js              # Express Application Pipeline
│   └── index.js            # Server Initialization Entry Point
├── .env                    # Environment Variables Configuration
├── package.json            # Dependencies and scripts
└── Readme.MD               # Backend Documentation
```

---

## 📡 API Endpoint Reference

### 🔐 1. Authentication Routes (`/api/v1/auth`)

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :---: |
| `POST` | `/register` | Register a new user account | ❌ |
| `POST` | `/login` | Authenticate user & issue JWT tokens | ❌ |
| `POST` | `/logout` | Clear auth cookies & revoke tokens | ✅ |
| `POST` | `/refresh-token` | Generate new access token using refresh token | ❌ |
| `GET` | `/current-user` | Get authenticated user profile details | ✅ |
| `POST` | `/change-password` | Change user password | ✅ |
| `POST` | `/forgot-password` | Send password reset link via email | ❌ |
| `POST` | `/reset-password/:token` | Reset password using token | ❌ |
| `POST` | `/verify-email/:token` | Verify user email address | ❌ |
| `POST` | `/resend-email-verification` | Resend email verification link | ❌ |

---

### 📂 2. Project Routes (`/api/v1/projects`)

| Method | Endpoint | Description | Role Required |
| :--- | :--- | :--- | :---: |
| `GET` | `/` | Fetch all projects associated with user | User |
| `POST` | `/` | Create a new project workspace | User |
| `GET` | `/:projectId` | Get project details by ID | Member / Admin |
| `PUT` | `/:projectId` | Update project name or description | Project Admin |
| `DELETE` | `/:projectId` | Delete project workspace | Project Admin |
| `GET` | `/:projectId/members` | Get project team member list | Member / Admin |
| `POST` | `/:projectId/members` | Add new member to project | Project Admin |
| `PUT` | `/:projectId/members/:userId` | Update member role (`Admin`/`Member`) | Project Admin |
| `DELETE` | `/:projectId/members/:userId` | Remove member from project | Project Admin |

---

### 📌 3. Task Routes (`/api/v1/tasks`)

| Method | Endpoint | Description | Role Required |
| :--- | :--- | :--- | :---: |
| `GET` | `/:projectId` | Fetch all tasks for a project | Member / Admin |
| `POST` | `/:projectId` | Create task with optional file attachments | Project Admin |
| `GET` | `/:projectId/t/:taskId` | Get task details by ID | Member / Admin |
| `PUT` | `/:projectId/t/:taskId` | Update task status & details | Project Admin |
| `DELETE` | `/:projectId/t/:taskId` | Delete task | Project Admin |
| `POST` | `/:projectId/t/:taskId/subtasks` | Add subtask to task | Project Admin |
| `PUT` | `/:projectId/st/:subtaskId` | Update subtask status | Member / Admin |
| `DELETE` | `/:projectId/st/:subtaskId` | Delete subtask | Project Admin |

---

### 📝 4. Note Routes (`/api/v1/notes`)

| Method | Endpoint | Description | Role Required |
| :--- | :--- | :--- | :---: |
| `GET` | `/:projectId` | Fetch project notes | Member / Admin |
| `POST` | `/:projectId` | Add a new project note | Member / Admin |
| `GET` | `/:projectId/n/:noteId` | Get note details | Member / Admin |
| `PUT` | `/:projectId/n/:noteId` | Update note content | Member / Admin |
| `DELETE` | `/:projectId/n/:noteId` | Delete project note | Member / Admin |

---

### 🏥 5. Health Check Route (`/api/v1/healthcheck`)

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :---: |
| `GET` | `/` | Verify API server operational status | ❌ |

---

## ⚙️ Environment Variables Setup

Create a `.env` file in the `Backend` root directory with the following keys:

```env
PORT=8000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/projmanage
CORS_ORIGIN=http://localhost:5173

# JWT Tokens
ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_Expiry=10d

# Mailtrap / SMTP Email Configuration
MAILTRAP_SMTP_HOST=sandbox.smtp.mailtrap.io
MAILTRAP_SMTP_PORT=2525
MAILTRAP_SMTP_USERNAME=your_mailtrap_username
MAILTRAP_SMTP_PASSWORD=your_mailtrap_password
FORGOT_PASSWORD_REDIRECT_URL=http://localhost:5173/forgot-password
```

---

## 🚦 Getting Started

### Prerequisites
- **Node.js** (v18+ recommended)
- **MongoDB Atlas** or local MongoDB instance

### Installation & Execution

1. Navigate to the `Backend` directory:
   ```bash
   cd Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run in Development mode (with Nodemon):
   ```bash
   npm run dev
   ```

4. Run in Production mode:
   ```bash
   npm start
   ```

The server will start listening on port `8000`: `http://localhost:8000/`

---

## 📜 License

This backend project is available under the [ISC License](LICENSE).
