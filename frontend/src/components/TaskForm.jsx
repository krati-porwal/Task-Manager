import { useState } from "react";

const TaskForm =({
  title,
  setTitle,
  description,
  setDescription,
  addTask,
  priority,
  setPriority,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="card p-4 shadow-sm mb-4">
      <div className="d-flex align-items-center mb-3">
        <button className="btn btn-success me-2">+</button>

        <input
          type="text"
          className="form-control border-0"
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              if (title.trim() !== "") {
                addTask();
              }
            }
          }}
        />

        <button
          className="btn btn-light ms-2"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "▲" : "▼"}
        </button>
      </div>

      {showDetails && (
        <>
          <textarea
            className="form-control mb-3"
            placeholder="Add a description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="d-flex gap-2 mb-3">
            <button
              className={`btn btn-sm ${
                priority === "Low" ? "btn-secondary" : "btn-light"
              }`}
              onClick={() => setPriority("Low")}
            >
              Low
            </button>

            <button
              className={`btn btn-sm ${
                priority === "Medium" ? "btn-success" : "btn-light"
              }`}
              onClick={() => setPriority("Medium")}
            >
              Medium
            </button>

            <button
              className={`btn btn-sm ${
                priority === "High" ? "btn-danger" : "btn-light"
              }`}
              onClick={() => setPriority("High")}
            >
              High
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskForm;
