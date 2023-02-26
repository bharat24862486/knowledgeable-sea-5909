import Button from "./Button";
import "../CSS/BannerWithOneBtn.css"

function BannerWithOneBtnOpposite({ H1Text, H2Text, PText, BtnText, COLOUR1, BACKGROUND1, BORDER1, IMG, MAINBACK, VDO }) {
    return (
        <div className="MainCont" style={{ backgroundColor: MAINBACK }}>
            {IMG?<img className="SecondMainCont" style={{width:"30%"}}  src={IMG} alt="" /> : <video className="SecondMainCont1" muted autoPlay loop src={VDO}></video>}
            <div className="FirstMainCont" >
                <h3 style={{ color: "#1976D2" }}>{H2Text}</h3>
                <h1 style={{fontSize:"200%"}}>{H1Text}</h1>
                <p>{PText}</p> <br />
                {BtnText? <Button colour={COLOUR1} text={BtnText} backgroundClr={BACKGROUND1} Border={BORDER1} /> : '' }


            </div>
            
            
            
        </div>
    )

}

export default BannerWithOneBtnOpposite;