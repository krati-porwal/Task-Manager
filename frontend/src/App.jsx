import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const totalTasks = tasks.length;
  const activeTasks = tasks.filter((task) => task.status === "active").length;
  const doneTasks = tasks.filter((task) => task.status === "completed").length;

  const [priority, setPriority] = useState("Medium");
  const [filter, setFilter] = useState("all");

  const API_URL = "https://task-manager-0o3v.onrender.com";

  const fetchTasks = async () => {
    const res = await fetch(`${API_URL}/tasks`);
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!title.trim()) return;
    const newTask = {
      title,
      description,
      status: "active",
      priority,
    };

    await fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    await fetchTasks(); // ✅ wait properly

    setTitle("");
    setDescription("");
    setPriority("Medium");
  };

  const completeTask = async (id) => {
    await fetch(`${API_URL}/tasks/${id}`, { method: "PUT" });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`${API_URL}/tasks/${id}`, { method: "DELETE" });
    fetchTasks();
  };
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return task.status === "active";
    if (filter === "done") return task.status === "completed";
    return true;
  });
  return (
    <div className="container mt-4">
      <h3 className="mb-1">Tasks</h3>
      <p className="text-muted">Stay organized, get things done.</p>

      <div className="row mt-3">
        <div className="col-md-4">
          <div className="card p-3 text-center shadow-sm">
            <h6>Total</h6>
            <h4>{totalTasks}</h4>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 text-center shadow-sm">
            <h6>Active</h6>
            <h4 className="text-success">{activeTasks}</h4>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 text-center shadow-sm">
            <h6>Done</h6>
            <h4 className="text-muted">{doneTasks}</h4>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 mt-4">
          <TaskForm
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            addTask={addTask}
            priority={priority}
            setPriority={setPriority}
          />
        </div>

        <div className="col-md-12">
          <div className="mt-4 d-flex gap-3">
            {/* <button className="btn btn-light" onClick={() => setFilter("all")}>
              All {totalTasks}
            </button>

            <button
              className="btn btn-light"
              onClick={() => setFilter("active")}
            >
              Active {activeTasks}
            </button>

            <button className="btn btn-light" onClick={() => setFilter("done")}>
              Done {doneTasks}
            </button> */}

            <button
              className={`btn btn-light ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All {totalTasks}
            </button>

            <button
              className={`btn btn-light ${filter === "active" ? "active" : ""}`}
              onClick={() => setFilter("active")}
            >
              Active {activeTasks}
            </button>

            <button
              className={`btn btn-light ${filter === "done" ? "active" : ""}`}
              onClick={() => setFilter("done")}
            >
              Done {doneTasks}
            </button>
          </div>
          <TaskList
            tasks={filteredTasks} // ✅ IMPORTANT CHANGE
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
