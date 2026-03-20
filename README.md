# 📝 Task Manager (Full Stack)

A clean and modern full-stack Task Manager application built using React and FastAPI. This app allows users to manage daily tasks efficiently with features like adding tasks, setting priorities, marking tasks as completed, and deleting tasks.

---

## 🚀 Live Demo

🔗 Frontend: https://task-manager-alpha-steel.vercel.app/
🔗 Backend: https://task-manager-0o3v.onrender.com

---

## 📌 Features

* ✅ Add tasks using Enter key
* 📝 Expandable task input (description & priority)
* 🎯 Set priority (Low, Medium, High)
* ✔️ Mark tasks as completed
* 🗑 Delete tasks
* 📊 Filter tasks (All / Active / Done)
* ⚡ Real-time updates using API
* 🎨 Clean and responsive UI

---

## 🛠 Tech Stack

### Frontend

* React (Vite)
* Bootstrap
* JavaScript (ES6)

### Backend

* FastAPI (Python)
* Pydantic

### Deployment

* Frontend: Vercel
* Backend: Render

---

## 📁 Project Structure

```
Task_Manager/
│
├── backend/
│   ├── main.py
│   └── requirements.txt
│
└── frontend/
    └── src/
        ├── components/
        │   ├── TaskForm.jsx
        │   ├── TaskList.jsx
        │   └── TaskItem.jsx
        └── App.jsx
```

---

## ⚙️ Installation & Setup

### 🔹 Clone the repository

```
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

---

### 🔹 Backend Setup

```
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

---

### 🔹 Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

## 🔗 API Endpoints

| Method | Endpoint    | Description            |
| ------ | ----------- | ---------------------- |
| GET    | /tasks      | Fetch all tasks        |
| POST   | /tasks      | Create a new task      |
| PUT    | /tasks/{id} | Mark task as completed |
| DELETE | /tasks/{id} | Delete a task          |

---

## 🧠 Key Concepts Used

* React Hooks (useState, useEffect)
* Component-based architecture
* Props and state management
* REST API integration
* CRUD operations
* Conditional rendering

---

## ⚠️ Limitations

* Data is stored in-memory (resets on server restart)
* No authentication system

---

## 🔮 Future Enhancements

* Database integration (MongoDB / PostgreSQL)
* User authentication (Login/Signup)
* Edit task feature
* Drag-and-drop functionality
* Dark mode UI

---

## 👩‍💻 Author

KRATI PORWAL

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
