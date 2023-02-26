import Button from "./Button";
import "../CSS/BannerWithOneBtn.css"


function BannerWithOneBtn({ H1Text, H2Text, PText, BtnText, COLOUR1, BACKGROUND1, BORDER1, IMG, MAINBACK, VDO }) {
    return (
        <div className="MainCont" style={{ backgroundColor: MAINBACK }}>
            <div className="FirstMainCont" >
                <h3 style={{ color: "#1976D2" }}>{H2Text}</h3>
                <h1 style={{fontSize:"2rem", fontWeight:"700"}}>{H1Text}</h1>
                <p>{PText}</p> <br />
                <Button colour={COLOUR1} text={BtnText} backgroundClr={BACKGROUND1} Border={BORDER1} />


            </div>
            {IMG?<img className="SecondMainCont"  src={IMG} alt="" style={{width:"50%"}} /> : <video className="SecondMainCont1" muted autoPlay loop src={VDO}  style={{width:"50%"}}></video>}
            
            
        </div>
    )

}

export default BannerWithOneBtn;