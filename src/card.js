import starIcon from './images/Star1.png'
const Card = ({imgsrc, ratings, country, message, cost, openSpots, location,})=> {
    let badgeText
    if (openSpots === 0 ){
        badgeText = "SOLD OUT"
    }

    else if(location === "Online"){
        badgeText ="ONLINE"
    }
    console.log(badgeText)

    return(
        <div className="card">
            { badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={imgsrc} className="card--image" alt="" />
            <div className="card--stats">
                <img className="card--star" src={starIcon} alt=""/>
                <span>{ ratings }</span>
                <span className='gray'> { country }</span>
            </div>
            <p>{ message }</p>
            <p><span className='card--cost'> { cost } </span> / person</p>

        </div>
    )
}

export default Card