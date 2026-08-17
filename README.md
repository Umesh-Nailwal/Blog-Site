📝 BlogSphere

A full-stack blogging platform built with Node.js, Express.js, Eta, and PostgreSQL (Neon). BlogSphere allows users to create and manage blog posts, maintain their profiles, and securely authenticate using server-side sessions.

The project was developed as part of my Full Stack Developer Internship at Codomax Digital Solutions.

---

🚀 Features

👤 Authentication & User Management

- User registration and login
- Secure password hashing using bcrypt
- Server-side authentication using Express Session
- PostgreSQL-backed session storage
- User logout functionality
- Protected routes for authenticated users
- User profile page
- Edit profile functionality
- Display user's published blogs

📝 Blog Management

- Create new blog posts
- View all blogs
- View individual blog posts
- Edit existing blogs
- Delete blogs
- Users can modify only their own blogs
- Blog categories
- Blog summaries and content
- Blog image uploads
- Search blogs by title, summary, or content
- Sort blogs by newest/oldest

🎨 Frontend

- Responsive design
- Mobile-friendly hamburger navigation
- Responsive blog filtering
- Login and registration pages
- User profile interface
- Create and edit blog interfaces
- Edit profile interface
- Reusable layouts and templates using Eta
- Responsive footer and navigation

🔐 Security & Authorization

- Passwords are hashed before being stored
- Authentication middleware protects private routes
- Users can edit/delete only their own blogs
- Parameterized PostgreSQL queries help prevent SQL injection
- Session-based authentication

---

🛠️ Tech Stack

Frontend

- HTML5
- CSS3
- JavaScript
- Font Awesome

Backend

- Node.js
- Express.js
- Eta Template Engine

Database

- PostgreSQL
- Neon PostgreSQL

Authentication

- Express Session
- bcryptjs
- PostgreSQL session store

File Uploads

- Multer

Development & Deployment

- Git
- GitHub
- Environment Variables
- Render

---

🏗️ Application Architecture

Browser
   │
   
   ▼
Express.js Server
   │
   ├── Routes
   │     ├── Authentication
   │     ├── Blogs
   │     └── User Profile
   │
   ├── Middleware
   │     ├── Authentication
   │     ├── Validation
   │     └── File Upload
   │
   ├── Eta Templates
   │
   ▼
PostgreSQL / Neon
   │
   ├── Users
   ├── Blogs
   └── Sessions

---

📂 Project Structure

BlogSphere/
│
├── db/
│   └── database.js
│
├── middleware/
│   ├── login_required.js
│   ├── upload.js
│   └── validate_input.js
│
├── public/
│   ├── un-logo.jpeg
│   ├── black-un-logo.jpeg
│   ├── interactive.js
│   └── style.css
│
├── routes/
│   ├── auth.js
│   ├── blogs.js
│   └── users.js
│
├── views/
│   ├── auth-temp.eta
│   ├── base.eta
│   ├── index.eta
│   ├── blogs.eta
│   ├── login.eta
│   ├── register.eta
│   ├── create_blog.eta
│   ├── edit_blog.eta
│   ├── user_profile.eta
│   ├── edit_profile.eta
│   └── sep-blog.eta
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js

---

⚙️ Getting Started

1. Clone the repository

git clone https://github.com/Umesh-Nailwal/Blog-Site.git
cd Blog-Site

2. Install dependencies

npm install

3. Configure environment variables

Create a ".env" file in the root directory:

DATABASE_URL=your_neon_database_connection_string
SESSION_SECRET=your_session_secret

Use the environment variable names expected by your application's database and session configuration.

4. Set up the database

Create a PostgreSQL database using Neon and configure the required tables for:

- Users
- Blogs
- Sessions

Update your database connection environment variable with the Neon connection string.

5. Start the application

For development:

node server.js

Or, if your "package.json" contains a start script:

npm start

The application will be available at:

http://localhost:3000

---

🔑 Authentication Flow

BlogSphere uses session-based authentication.

Register
   ↓
Password hashed with bcrypt
   ↓
User stored in PostgreSQL
   ↓
Login
   ↓
Credentials verified
   ↓
Session created
   ↓
Protected routes accessible

When the user logs out, the server destroys the session.

---

📝 Blog CRUD Flow

Create
   ↓
POST /create_blog
   ↓
PostgreSQL

Read
   ↓
GET /blogs
   ↓
PostgreSQL
   ↓
Eta Template

Update
   ↓
POST /edit_blog/:id
   ↓
PostgreSQL

Delete
   ↓
POST /delete_blog/:id
   ↓
PostgreSQL

Authorization ensures that users can only modify their own blog posts.

---

🔍 Blog Search

The application supports searching across:

- Blog title
- Blog summary
- Blog content

PostgreSQL's "ILIKE" is used for case-insensitive searching.

Example:

WHERE
    blogs.title ILIKE $1
    OR blogs.summary ILIKE $1
    OR blogs.content ILIKE $1

---

📱 Responsive Design

BlogSphere is designed to work across:

- 📱 Mobile
- 📲 Tablet
- 💻 Desktop

The interface includes a responsive hamburger navigation menu and mobile-friendly blog filtering.

---

🔒 Environment Variables

Never commit sensitive credentials to GitHub.

Your ".env" file should be included in ".gitignore":

.env
node_modules/

Example:

DATABASE_URL=your_database_url
SESSION_SECRET=your_secret

Do not put real database credentials or session secrets in this README.

---

🌐 Live Demo

🔗 Live Website: https://blog-site-5291.onrender.com

🔗 GitHub Repository: https://github.com/Umesh-Nailwal/Blog-Site

---

📸 Screenshots

You can add screenshots of the major pages here:

Home Page



Blogs Page



Login Page



User Profile



Create Blog



---

🎯 Project Goals

The main goal of BlogSphere was to build a complete full-stack application while learning and applying:

- RESTful backend development
- Server-side rendering
- Authentication and authorization
- Session management
- PostgreSQL database integration
- CRUD operations
- File uploads
- Responsive frontend development
- Backend validation
- Deployment

---

📚 What I Learned

Through this project, I gained practical experience with:

- Building applications using Node.js and Express.js
- Creating and organizing Express routes
- Using Eta for server-side rendering
- Working with PostgreSQL and Neon
- Writing parameterized SQL queries
- Implementing session-based authentication
- Hashing passwords with bcrypt
- Protecting routes using middleware
- Implementing complete CRUD operations
- Handling image uploads with Multer
- Connecting frontend forms with backend APIs
- Deploying a full-stack application

---

👨‍💻 Author

Umesh Nailwal

AI & ML Diploma Student | Full Stack Developer

This project was developed as part of my Codomax Digital Solutions Full Stack Developer Internship.

---

📄 License

This project is created for educational and portfolio purposes.
