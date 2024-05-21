const Joke = (props)=>{
    return(
        <div className="joke">
        <p>Setup: <span>{props.setup}</span></p>
        <p>Punchline: <span>{props.punchline}</span> </p>
        </div>
    )
    
}

export default Joke