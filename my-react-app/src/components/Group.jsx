import "../index.css"
import Task from "./Task"


function Group({Tasks, Name}){
    function expand(e){
        e.target.classList.toggle("expanded")
    }

    return (
        <>
        <div className="group-header center gap " style={{textAlign: "center"}}>
            <h2>{Name}</h2><i className="fa-solid fa-chevron-left" onClick={expand}></i>
            
        </div>
        <Task />
        </>
        
        
    )
}
export default Group