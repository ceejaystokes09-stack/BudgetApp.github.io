import "../index.css"
import { useEffect, useState } from "react"
import Task from "./Task"

function Group({ Name }) {
    const [tasks, setTasks] = useState([])

    function expand(e) {
        e.target.classList.toggle("expanded")
    }

    useEffect(() => {
        const loadTasks = () => {
            const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]")
            setTasks(savedTasks)
        }

        loadTasks()
        window.addEventListener("tasksUpdated", loadTasks)

        return () => window.removeEventListener("tasksUpdated", loadTasks)
    }, [])

    return (
        <>
            <div className="group-header center gap " style={{ textAlign: "center" }}>
                <h2>{Name}</h2>
                <i className="fa-solid fa-chevron-left" onClick={expand}></i>
            </div>

            {tasks.length > 0 ? (
                tasks.map((data, index) => (
                    <Task
                        key={`${data.name}-${index}`}
                        Name={data.name}
                        Desc={data.description}
                        Max={data.maxPrice}
                        Current={data.currentPrice}
                        Status={data.isGroup}
                    />
                ))
            ) : (
                <p>No tasks yet.</p>
            )}
        </>
    )
}

export default Group