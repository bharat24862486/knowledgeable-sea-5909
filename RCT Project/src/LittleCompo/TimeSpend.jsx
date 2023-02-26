import "../CSS/CompanyName.css"

function TimeSpend(){

    return(
        <div className="MainDiv" style={{display:"flex", justifyContent:"space-around"}}>
            <div >
                <h2 style={{marginBottom:"0px", padding:"0px", fontSize:"35px", color:"#1976D2"}}>
                    10 Years
                </h2>
                <p style={{marginTop:"0px", textAlign:"center"}}>in business</p>
            </div>
            <div >
                <h2 style={{marginBottom:"0px", padding:"0px", fontSize:"35px", color:"#1976D2"}}>140,000</h2>
                <p style={{marginTop:"0px", textAlign:"center"}}>users</p>
            </div>
            <div>
                <h2 style={{marginBottom:"0px", padding:"0px", fontSize:"35px", color:"#1976D2"}}>100k+</h2>
                <p style={{marginTop:"0px", textAlign:"center"}}>monthly blog readers</p>
            </div>
            <div >
                <h2 style={{marginBottom:"0px", padding:"0px", fontSize:"35px", color:"#1976D2"}}>1.2m+</h2>
                <p style={{marginTop:"0px", textAlign:"center"}}>social followers</p>
            </div>
        </div>
    )

}

export default TimeSpend