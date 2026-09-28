import '../index.css'

function Header() {
  return (
    <>
        <div className="top-nav centerX space-between">
            <div>
                <img src="/BudgetApp.github.io/logo.svg" style={{border:"none", width:"80px", height:"80px",}} />
            </div>
            <div className='center'>
                <i className="fa-solid fa-bell" style={{width: "fit-content"}} ></i>
                <i><span className="fa-solid fa-circle-user"></span><span className='cut'>Sign in</span></i>
            </div>

        </div>
    </>
  )
}

export default Header
