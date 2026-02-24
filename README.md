
# Smart Task Manager (Backend Only)

A fully custom **Node.js backend project** built without Express — using only the core **HTTP module**, custom routing, a controller/service architecture, and JSON file storage (with a planned upgrade to MongoDB). This project demonstrates real backend engineering principles, clean architecture, and professional code organization.

---

## 🚀 Project Overview

The **Smart Task Manager** is a backend application that manages personal productivity tasks. It provides a complete REST API to:

* Create tasks
* Read tasks (single & list)
* Update tasks
* Delete tasks
* Filter & sort tasks
* Update task progress and status

The system is designed with scalability in mind, starting with JSON file storage and structured to be easily upgradeable to MongoDB.

---

## 🏗️ Architecture

This backend follows a clean, layered structure:

```
├── controllers/      → Handle request/response
├── routes/           → Map routes to controllers
├── services/         → Business logic
├── storage/          → JSON read/write operations
├── utils/            → Helpers (body parser, ID generator)
├── config/           → App environment config
├── data/             → JSON storage files
└── app.js            → Core HTTP server
```

Each layer has one responsibility:

* **Controller**: receives requests and sends responses
* **Service**: processes logic and data validation
* **Storage**: interacts with JSON storage
* **Router**: matches routes and methods
* **Utils**: common reusable helpers

---

## 📦 Features

### ✔ Core Features

* Add new tasks
* Get all tasks
* Get task by ID
* Update task fields
* Delete tasks
* Update task progress

### ✔ Task Data Model

Each task includes:

* `id`
* `title`
* `description`
* `category`
* `deadline`
* `status`
* `createdAt`
* `updatedAt`

### ✔ Advanced Features

* Custom routing system (no Express)
* Safe JSON read/write
* Backup & recovery system to avoid data loss
* Fully modular architecture
* Ready for MongoDB migration

---

## 🧠 Project Goals

This project was created to practice real backend engineering skills:

* Understanding the **HTTP core module**
* Building a custom router
* Structuring scalable backend applications
* Designing a service layer and separation of concerns
* Handling JSON file storage safely
* Implementing CRUD functionality
* Preparing the codebase for future database integration

---

## 📚 Technology Stack

* **Node.js** (native HTTP module)
* **File System (fs)** for JSON storage
* **JavaScript ES Modules**
* No frameworks used (Express-less architecture)

---

## 🔧 Installation & Usage

1. Clone the repository:

```
git clone <your-repo-link>
```

2. Install dependencies:

```
npm install
```

3. Run the server:

```
npm start
```

4. The backend will run on:

```
http://localhost:3000
```

---

## 📡 API Endpoints

### **POST /tasks** — Create a task

### **GET /tasks** — Get all tasks

### **GET /tasks/:id** — Get a single task

### **PATCH /tasks/:id** — Update a task

### **DELETE /tasks/:id** — Delete a task

Filtering & sorting can be added via query parameters.

---

## 🗄️ Data Storage

### Phase 1: JSON File Storage

* All tasks are stored in a local JSON file.
* Automatic file creation if missing.
* Backup created before every write.

### Phase 2: MongoDB Upgrade (Planned)

A future update will:

* Replace JSON storage with MongoDB
* Add Mongoose schemas
* Support advanced querying

---

## 🏁 Project Status

✔ **Project Completed (JSON Storage Version)**
⬜ MongoDB upgrade planned

---

## 👤 Author

Developed by **Mohanad** as part of a complete Node.js backend learning journey.

If you want to improve this project or add new features, feel free to contribute!

---

## ⭐ Final Notes

This project represents a major step toward mastering backend development through real architectural principles. It was built without shortcuts, following professional engineering practices.

You're officially building backends like a real engineer.
