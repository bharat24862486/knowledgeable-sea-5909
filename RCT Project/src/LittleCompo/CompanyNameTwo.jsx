import "../CSS/CompanyName.css"

function CompanyNameTwo(){
    return(
        <div className="MainDiv" style={{textAlign:"center"}}>
            <h3>An official marketing partner of the industry leaders</h3>
            <div style={{display:"flex", justifyContent:"space-between" , margin:"2% 30%", textAlign:"center"}}>
                <img src="https://buffer.com/static/ui/meta-business-partner@2x-2.png" alt="" width="25%"/> <br /><img src="https://buffer.com/static/ui/pinterest-marketing-partner@2x-2.png" alt=""  width="25%"/><br /><img src="https://buffer.com/static/ui/linkedin-marketing-partner@2x-2.png" alt=""  width="25%"/>
            </div>
        </div>
    )

}

export default CompanyNameTwo