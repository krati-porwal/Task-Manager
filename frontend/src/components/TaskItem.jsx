const TaskItem = ({ task, completeTask, deleteTask }) => {
  return (
    <div className="card p-3 mb-2 shadow-sm d-flex flex-row justify-content-between align-items-center">

      <div className="d-flex align-items-center">
        <input
          type="checkbox"
          className="form-check-input me-3"
          checked={task.status === "completed"}
          onChange={() => completeTask(task.id)}
        />

        <div>
          <h6
            className={`mb-1 ${
              task.status === "completed"
                ? "text-decoration-line-through text-muted"
                : ""
            }`}
          >
            {task.title}

            {/* ✅ PRIORITY BADGE */}
            {task.priority && (
              <span
                className={`badge ms-2 ${
                  task.priority === "High"
                    ? "bg-danger"
                    : task.priority === "Medium"
                    ? "bg-success"
                    : "bg-secondary"
                }`}
              >
                {task.priority}
              </span>
            )}
          </h6>

          <small className="text-muted">{task.description}</small>
        </div>
      </div>

      <div className="d-flex gap-2">
        <button
          className="btn btn-light btn-sm text-danger"
          onClick={() => deleteTask(task.id)}
        >
          🗑
        </button>
      </div>
    </div>
  );
};

export default TaskItem;