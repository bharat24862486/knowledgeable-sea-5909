import "../CSS/BannerWithUpAndDown.css"

function BannerWithUpAndDown({ H1Text, H2Text, PText, IMG, MAINBACK, VDO }) {
    return (
        <div>
            <div className="MainCont1" style={{ backgroundColor: MAINBACK }}>
                
                <div className="FirstMainCont1" >
                    <h3 style={{ color: "#1976D2" }}>{H2Text}</h3>
                    <h1 style={{fontSize:"200%", fontWeight:"700"}}>{H1Text}</h1>
                    <p style={{padding:"0px 20%"}}>{PText}</p>



                </div>
                {IMG ? <img className="SecondMainCont1" src={IMG} alt="" /> : <video className="SecondMainCont1" muted autoPlay loop src={VDO}></video>}



            </div>
        </div>
    )

}

export default BannerWithUpAndDown