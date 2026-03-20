import TaskItem from "./TaskItem";

const TaskList = ({ tasks, completeTask, deleteTask }) => {
  return (
    <div>
      <h4 className="mb-3 mt-3">Task List</h4>
      {tasks.length === 0 ? (
          <p>No tasks available</p>
        ) : (
            tasks.map((task) => (
                <TaskItem
                key={task.id}
                task={task}
                completeTask={completeTask}
                deleteTask={deleteTask}
                />
            ))
        )}
    </div>
  );
}

export default TaskList;