import "../index.css"
import { useEffect, useState } from "react"

function Edit({ task, onClose }) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const frame = requestAnimationFrame(() => setIsVisible(true))
        return () => cancelAnimationFrame(frame)
    }, [])

    if (!task) return null

    function handleClose() {
        setIsVisible(false)
        window.setTimeout(onClose, 200)
    }

    return (
        <div className={`Task-edit ${isVisible ? "is-visible" : ""}`}>
            <div className="Task-edit__panel">
                <div className="Task-edit__header">
                    <h3>Edit Task</h3>
                    <button type="button" className="Task-edit__save">Save</button>
                    <button type="button" className="Task-edit__close" onClick={handleClose}>✕</button>
                    
                </div>

                <label>
                    Name
                    <input defaultValue={task.name} />
                </label>

                <label>
                    Description
                    <textarea defaultValue={task.description} rows="4" />
                </label>

                <div className="Task-edit__row">
                    <label>
                        Max
                        <input type="number" defaultValue={task.maxPrice} />
                    </label>

                    <label>
                        Current
                        <input type="number" defaultValue={task.currentPrice} />
                    </label>
                </div>

                <button type="button" className="Task-edit__complete">Mark As Complete</button>
            </div>
        </div>
    )
}

export default Edit