function Button({colour, text, backgroundClr,Border}){
    return (
        <span>
            <span>  </span>
            <button style={{color:colour, backgroundColor:backgroundClr, padding:"10px 15px", border:Border, borderRadius:"5px"}}>{text}</button>

        </span>
        
    )
}

export default Button