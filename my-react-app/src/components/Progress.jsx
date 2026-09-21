import "../index.css"

function Progress({Current, Max, Colors}){
    const p = (Current / Max) * 100
    return (
        <div className="pill">
            <div className="progress" style={{background: `linear-gradient(to right, ${Colors[0]} ${p}%, ${Colors[1]} ${p}%)`, borderRadius:"inherit", textAlign:"center"}}>
                <p>{Current} / {Max}</p>
            </div>
        </div>
    )
}

export default Progress