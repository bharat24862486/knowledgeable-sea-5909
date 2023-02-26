import "../CSS/BannerWithUpAndDown.css"

function ForPricingBanner({ H1Text, H2Text, PText, IMG, MAINBACK, VDO }) {
    return (
        <div>
            <div className="MainCont1" style={{ backgroundColor: MAINBACK }}>
                
                <div className="FirstMainCont1" >
                    <h3 style={{ color: "#1976D2" }}>{H2Text}</h3>
                    <h1 style={{fontSize:"250%", fontWeight:"800", padding:"0px 20%", color:"#1976D2"}}>{H1Text}</h1>
                    <p style={{padding:"0px 20%", fontWeight:"500"}}>{PText}</p>



                </div>
                



            </div>
        </div>
    )

}

export default ForPricingBanner;