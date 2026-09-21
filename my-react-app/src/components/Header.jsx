import './index.css'

function Header() {
  return (
    <>
        <div className="top-nav centerX space-between">
            <div>
                <img src="/logo.svg" style={{border:"none", width:"80px", height:"80px",}} />
            </div>
            <div>
                <i className="fa-solid fa-bell cut"  ></i>
                <i><span className="fa-solid fa-circle-user"></span>Sign in</i>
            </div>

        </div>
    </>
  )
}

export default Header
