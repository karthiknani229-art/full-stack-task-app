import { useEffect, useState } from "react";
import API from "../services/api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const [stats, setStats] = useState(null);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const fetchTasks = async () => {
    const { data } = await API.get("/tasks");
    setTasks(data);
  };

  const fetchStats = async () => {
    const { data } = await API.get("/tasks/stats");
    setStats(data);
  };

  const createTask = async () => {
    if (!title.trim()) {
      alert("Task title is required");
      return;
    }

    await API.post("/tasks", { title, priority });

    setTitle("");
    setPriority("medium");
    fetchTasks();
    fetchStats();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
    fetchStats();
  };

  const updateStatus = async (task) => {
    const newStatus = task.status === "done" ? "todo" : "done";

    await API.put(`/tasks/${task._id}`, {
      ...task,
      status: newStatus,
    });

    fetchTasks();
    fetchStats();
  };

  useEffect(() => {
    fetchTasks();
    fetchStats();
  }, []);


  const filteredTasks = tasks.filter((task) => {
    return (
      (filter === "all" || task.status === filter) &&
      task.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "auto",
        marginTop: 50,
        padding: 25,
        borderRadius: 12,
        background: "#f3f4f6",
      }}
    >

      <div
        style={{
          background: "#ffffff",
          padding: 20,
          borderRadius: 10,
          boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
        }}
      >

        <h2 style={{ textAlign: "center", marginBottom: 25 }}>
          Task Dashboard
        </h2>


        {stats && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 20,
              padding: 12,
              borderRadius: 8,
              background: "#f9fafb",
              fontWeight: 500,
            }}
          >
            <div>📊 Total: {stats.total}</div>
            <div style={{ color: "green" }}>
              ✅ Done: {stats.completed}
            </div>
            <div style={{ color: "#ff9800" }}>
              ⏳ Pending: {stats.pending}
            </div>
          </div>
        )}


        <div
          style={{
            display: "flex",
            gap: 10,
            marginBottom: 15,
          }}
        >
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter new task..."
            style={{
              flex: 1,
              padding: 12,
              borderRadius: 6,
              border: "1px solid #ccc",
            }}
          />

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            style={{
              padding: 12,
              borderRadius: 6,
              border: "1px solid #ccc",
            }}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <button
            onClick={createTask}
            style={{
              padding: "12px 20px",
              borderRadius: 6,
              border: "none",
              background: "#4CAF50",
              color: "white",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </div>


        <input
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: 10,
            marginBottom: 10,
            borderRadius: 6,
            border: "1px solid #ccc",
          }}
        />


        <div style={{ marginBottom: 20 }}>
          <button onClick={() => setFilter("all")}>All</button>{" "}
          <button onClick={() => setFilter("todo")}>Pending</button>{" "}
          <button onClick={() => setFilter("done")}>Done</button>
        </div>


        <ul style={{ listStyle: "none", padding: 0 }}>
          {filteredTasks.map((task) => (
            <li
              key={task._id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 12,
                marginBottom: 10,
                borderRadius: 8,
                background: "#f9fafb",
              }}
            >
              <span
                style={{
                  flex: 1,
                  textDecoration:
                    task.status === "done" ? "line-through" : "none",
                }}
              >
                {task.title} ({task.priority})
              </span>

              <div style={{ display: "flex", gap: 8 }}>
                <button
                  onClick={() => updateStatus(task)}
                  style={{
                    background: "#2196F3",
                    color: "white",
                    border: "none",
                    borderRadius: 5,
                    padding: "6px 10px",
                    cursor: "pointer",
                  }}
                >
                  ✔
                </button>

                <button
                  onClick={() => deleteTask(task._id)}
                  style={{
                    background: "#f44336",
                    color: "white",
                    border: "none",
                    borderRadius: 5,
                    padding: "6px 10px",
                    cursor: "pointer",
                  }}
                >
                  ❌
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}