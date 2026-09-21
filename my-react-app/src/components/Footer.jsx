import '../index.css'

function Footer(){
    const ChangeTab = (e)=>{
        document.querySelectorAll(".bottom-nav .bottom-nav__item").forEach(el=>{
            el.classList.remove("is-active")
        })
        e.currentTarget.classList.add("is-active")
    }   


    return (
        <footer className="bottom-nav">
            <div className="bottom-nav__item is-active" onClick={ChangeTab}>
                <i className="fa-solid fa-house" aria-hidden="true"></i>
                <p>Home</p>
            </div>
            <div className="bottom-nav__item" onClick={ChangeTab}>
                <i className="fa-solid fa-chart-line" aria-hidden="true"></i>
                <p>Dashboard</p>
            </div>
            <div className="bottom-nav__item" onClick={ChangeTab}>
                <i className="fa-solid fa-plus" aria-hidden="true"></i>
                <p>Add</p>
            </div>
            <div className="bottom-nav__item" onClick={ChangeTab}>
                <i className="fa-solid fa-file-lines" aria-hidden="true"></i>
                <p>Reports</p>
            </div>
            <div className="bottom-nav__item" onClick={ChangeTab}>
                <i className="fa-solid fa-user" aria-hidden="true"></i>
                <p>Account</p>
            </div>
        </footer>
    )
}

export default Footer