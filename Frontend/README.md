# 🚀 Project Camp — Frontend Application

**Project Camp** is a modern, high-performance web application built for seamless project management, team collaboration, and real-time Kanban task tracking. Designed with a sleek dark-mode glassmorphic interface, full device responsiveness, and persistent state management.

---

## ✨ Features & Highlights

### 📋 1. Project Management & Dashboard
- **Interactive Project Grid**: Displays active projects with color-coded status badges (`Active`, `Planning`, `Completed`), description previews, and assigned member counts.
- **Create Project Modal**: Create new projects with validation, description fields, status pill selection, and initial team size allocation.
- **Local & API Dual Persistence**: Persists all created projects locally via `localStorage` with built-in API integration fallbacks.

### 📊 2. Kanban Board & Task Tracking
- **Dynamic Columns**: Multi-column board (`To Do`, `In Progress`, `Done`) with real-time column task counters.
- **Add Task Modal**: Modal dialog to create tasks with title validation, status pills, and detailed description text.
- **Task Status Switcher**: Quick-action card menu (`...`) allowing users to advance tasks between `To Do` ➔ `In Progress` ➔ `Done` or delete tasks.
- **Visual Strikethrough & Completion**: Completed tasks render with success checkmarks and strikethrough typography.

### 👥 3. Employee & Team Management
- **Manage Employees Modal**: Accessible directly from the Project Board action header.
- **Add Team Members**: Assign employees to projects using Name, Email / Employee ID, and Role (`Member` or `Project Admin`).
- **Remove Team Members**: Remove members with instant member count updates across Dashboard cards and Project Boards.

### 👤 4. User Profile & Camera Capture
- **Persistent User Credentials**: Displays user registered `Full Name`, `Employee ID`, and `Email Address`. Read-only by default to prevent unintended edits.
- **Edit Profile**: Clickable **Edit Profile** button enables form editing and updates user profile data across the app.
- **Profile Image Options**:
  - **From Device**: File upload selector converting image files into persistent data URLs.
  - **Take Picture**: Built-in camera capture modal utilizing WebRTC `getUserMedia` live preview and canvas snapshot capabilities.
- **Logout Action**: Dedicated **Logout** button below profile disclaimer text and in the top navigation bar.

### 📱 5. Responsive Design & Fixed Sticky Navbar
- **Fixed Sticky Top Navigation**: `position: sticky; top: 0; z-index: 1000` with an opaque dark frosted background (`rgba(10, 10, 12, 0.96)`) and 16px backdrop blur. Prevents any content from bleeding through or overlapping when scrolling down.
- **Multi-Device Adaptability**: Custom media queries engineered for Desktop (> 1024px), Tablet (768px), and Mobile (480px).

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | User Interface Framework |
| **Vite 8** | Lightning-fast Build Tool & HMR |
| **Zustand 5** | Lightweight Global State Management |
| **React Router DOM 7** | Client-side Routing & Protected Routes |
| **Axios** | HTTP Client with Auth Interceptors |
| **Lucide React** | Modern Icon Suite |
| **Vanilla CSS3** | Custom Glassmorphic Design System |

---

## 📁 Project Structure

```
Frontend/
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Brand logos & graphic assets
│   ├── components/         # Reusable modal dialogs & widgets
│   │   ├── CreateProjectModal.jsx & .css   # New Project creation modal
│   │   ├── CreateTaskModal.jsx & .css      # New Task creation modal
│   │   └── ManageEmployeesModal.jsx & .css # Team member management modal
│   ├── pages/              # Route pages
│   │   ├── AdminProfile.jsx & .css         # Profile details, photo options & logout
│   │   ├── Dashboard.jsx & .css            # Project grid & dashboard summary
│   │   ├── ForgotPassword.jsx              # Password recovery request page
│   │   ├── Login.jsx & .css                # Login authentication page
│   │   ├── ProjectDetails.jsx & .css       # Kanban project board & task manager
│   │   ├── Register.jsx                    # Account registration page
│   │   └── ResetPassword.jsx               # Password reset confirmation page
│   ├── store/              # Zustand global state stores
│   │   ├── authStore.js    # Authentication, session & profile state
│   │   ├── projectStore.js # Projects & employee membership store
│   │   └── taskStore.js    # Board tasks & status transition store
│   ├── utils/
│   │   └── api.js          # Axios API client with token interceptor
│   ├── App.jsx             # Main router & ProtectedRoute wrapper
│   ├── main.jsx            # Application entry point
│   └── index.css           # Design tokens, global utilities & sticky top nav
├── package.json            # Dependencies and scripts
└── README.md               # Documentation
```

---

## 🚦 Getting Started

### Prerequisites
Make sure you have **Node.js** (v18+ recommended) installed on your machine.

### Installation

1. Navigate to the `Frontend` directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

Start the Vite dev server with HMR:
```bash
npm run dev
```

The app will be accessible at: `http://localhost:5173/`

### Building for Production

To create an optimized production build:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

---

## 🔐 Demo Credentials

You can test the application using default credentials or register a new account:

- **Employee ID**: `EMP-001`
- **Password**: `password123`

---

## 📄 Environment Configuration (Optional)

The API client reads from `import.meta.env.VITE_API_BASE_URL`. You can optionally create a `.env` file in the `Frontend` root:

```env
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

If the backend server is offline or not running, the application gracefully operates using `localStorage` persistence.

---

## 📜 License

This project is open-source and available under the [ISC License](LICENSE).
