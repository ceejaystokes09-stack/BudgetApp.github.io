import "../index.css";
//import { useState } from "react";

import Toggle from "./Slider"


function New_task_form(){
    //const [TaskName, setTaskName] = useState(""), [TaskDesc, setTaskDesc] = useState(""), [TaskMax, setTaskMax] = useState(0), [TaskCurrent, setTaskCurrent] = useState(0), [isGroup, setisGroup] = useState(false)
    

    const Save = () => {
        const n = document.querySelector(".new-task #Task-name").value.trim();
        const d = document.querySelector(".new-task #desc").value.trim();

        if (!n || !d) {
            alert("Task name and description cannot be empty.")
            return
        }

        const m = Number(document.querySelector(".new-task #max-price-input").value) || 0
        const c = Number(document.querySelector(".new-task #current-price").value) || 0
        const g = document.querySelector(".new-task #toggle").checked

        const task = {
            name: n,
            description: d,
            maxPrice: m,
            currentPrice: c,
            isGroup: g,
        }

        const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]")
        const updatedTasks = [...savedTasks, task]

        localStorage.setItem("tasks", JSON.stringify(updatedTasks))
        window.dispatchEvent(new Event("tasksUpdated"))
        document.querySelector(".new-task").classList.remove("is-visible")
    }

    return (
        <>
        <div className="full-screen blur center new-task">
            <div className="input-feild">  
                <h1>New Task</h1>            
                <input type="text" id="Task-name" placeholder="Enter Task Name... " required/>
                <textarea id="desc" contentEditable="true" placeholder="Description..." style={{height: "100px"}}></textarea>
                <div className="centerX col ">
                    <label>Max Task Price</label>
                    <input type="number" name="max-price" id="max-price-input" placeholder="Enter max amount" required />
                    <label>Current Spent on Task</label>
                    <input type="number" name="current-price" id="current-price" placeholder="Enter current amount spent" />
                </div>
                
                <div>
                    <h3>Group? </h3>
                    
                    <Toggle /> 
                </div>
                <button type="submit" onClick={Save}>Save</button>
            </div>
        </div>
        </>
    )
}
export default New_task_form