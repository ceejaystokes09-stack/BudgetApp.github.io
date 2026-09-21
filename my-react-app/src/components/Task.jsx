import "../index.css"
import Progress from "./Progress"

function Task({Name, Desc, Current, Max, Status}){
    return <>
    <div>
        <div>

        </div>
        <div>
            <h2>Name</h2>
            <p>Desc</p>
            <Progress Current={10} Max={20} Colors={["aqua", "white"]}/> 
        </div>
    </div>
    </>
}

export default Task