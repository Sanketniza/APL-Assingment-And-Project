# APL Assignment And Project

This repository contains a comprehensive collection of 16 practical assignments for APL (Advanced Programming Language) coursework along with a full-stack Job Portal mini project. Each assignment demonstrates different programming concepts and technologies.

## 📂 Repository Structure

### APL Assignments (Practical 1-16)

#### **Frontend Development Assignments**
- **Practical 1** - React Registration Form with Class Components
  - React form validation and state management
  - Technologies: React, Vite, JavaScript

- **Practical 2** - React Functional Components
  - Modern React with hooks and functional components
  - Technologies: React, Vite, JavaScript

- **Practical 3** - React with CSS Modules
  - Styling React components with CSS modules
  - Technologies: React, CSS Modules, Vite

- **Practical 6** - Material-UI Components
  - Building UI with Material-UI component library
  - Technologies: React, Material-UI, Vite

#### **Node.js Backend Development**
- **Practical 8** - Console & Web Applications
  - Basic Node.js applications (both console and web)
  - Technologies: Node.js, Express

- **Practical 9** - File Operations
  - File reading, writing, and manipulation
  - Technologies: Node.js

- **Practical 10** - Event-Driven Programming
  - Node.js EventEmitter and event handling
  - Technologies: Node.js, Events API

- **Practical 11** - Advanced File Operations
  - Complex file operations and stream handling
  - Technologies: Node.js, File System

- **Practical 12** - Web Server Development
  - Building HTTP servers and handling requests
  - Technologies: Node.js, HTTP

- **Practical 13** - Express.js Application
  - RESTful API development with Express
  - Technologies: Node.js, Express.js

- **Practical 14** - Full Web Application
  - Complete web application with frontend and backend
  - Technologies: Node.js, Express, HTML, CSS

- **Practical 15** - Template Engine
  - Server-side rendering with EJS templates
  - Technologies: Node.js, Express, EJS

- **Practical 16** - Database Integration
  - Database connectivity and operations
  - Technologies: Node.js, Database

### 🚀 Mini Project - Job Portal

A comprehensive full-stack job portal application with modern technologies:

#### **Backend (`/backend`)**
- **Framework**: Node.js with Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT tokens with bcrypt
- **File Upload**: Cloudinary integration
- **API Features**:
  - User authentication (register, login, logout)
  - Company management
  - Job posting and management
  - Job applications
  - Profile management with resume upload

#### **Frontend (`/frontend`)**
- **Framework**: React with Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI components
- **State Management**: Redux Toolkit
- **Features**:
  - Responsive design
  - User/Company dashboards
  - Job browsing and filtering
  - Application management
  - Profile management

## 🛠️ Quick Start

### For Individual Practicals

1. Navigate to the specific practical folder:
```powershell
cd "APL Assingments/Practical X"
```

2. Install dependencies:
```powershell
npm install
```

3. Run the application:
```powershell
# For React apps
npm run dev

# For Node.js apps
node app.js
# or
npm start
```

### For Job Portal Project

#### Backend Setup
1. Navigate to backend folder:
```powershell
cd backend
```

2. Install dependencies:
```powershell
npm install
```

3. Create `.env` file with required environment variables:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
PORT=3000
```

4. Start the server:
```powershell
npm run dev
```

#### Frontend Setup
1. Navigate to frontend folder:
```powershell
cd frontend
```

2. Install dependencies:
```powershell
npm install
```

3. Start the development server:
```powershell
npm run dev
```

## 🔧 Technologies Used

### Frontend
- React 18+
- Vite (Build tool)
- Tailwind CSS
- Material-UI
- Redux Toolkit
- Radix UI
- Axios

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- Cloudinary (File upload)
- bcryptjs (Password hashing)
- Cookie Parser
- CORS

### Development Tools
- ESLint
- PostCSS
- Multer (File handling)

## 📖 Learning Objectives

This repository demonstrates:
- **Frontend Development**: React components, state management, modern CSS
- **Backend Development**: RESTful APIs, authentication, database operations
- **Full-Stack Integration**: Connecting frontend and backend applications
- **Modern Development Practices**: ES6+, async/await, middleware patterns
- **File Operations**: Upload, processing, and storage
- **Database Design**: Schema design and relationships

## 🤝 Windows PowerShell Tips

For environment variables in PowerShell:
```powershell
$env:PORT=3000; node index.js
```

Or use cross-env in package.json for cross-platform compatibility:
```json
{
  "scripts": {
    "dev": "cross-env NODE_ENV=development nodemon index.js"
  }
}
```

## 📝 Assignment Details

Each practical folder contains:
- Source code with detailed implementations
- Package.json with dependencies and scripts
- Individual README files (where applicable)
- Configuration files

## 👨‍💻 Author

**Repository Owner**: Sanketniza

For questions about specific implementations or running instructions, please check the individual folder's documentation or raise an issue.

---

*This repository serves as a comprehensive learning resource for modern web development using JavaScript ecosystem.*
