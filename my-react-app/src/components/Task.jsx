import "../index.css"
import Progress from "./Progress"

function Task({ Name, Desc, Current, Max, Status }) {
    const accentColor = Status ? "#5eead4" : "#7c3aed"

    return (
        <div className="Task start">
            <div className="Task-Warning" style={{ background: accentColor }}></div>
            <div className="Full-width Task-info">
                <div className="task-header-row">
                    <h2>{Name}</h2>
                    <span className={`task-type-badge ${Status ? "Completed" : "In-Progress"}`}>
                        {Status ? "Completed" : "In Progress"}
                    </span>
                </div>
                <p>{Desc}</p>
                <Progress Current={Current} Max={Max} Colors={[accentColor, "#e5e7eb"]} />
            </div>
        </div>
    )
}

export default Task