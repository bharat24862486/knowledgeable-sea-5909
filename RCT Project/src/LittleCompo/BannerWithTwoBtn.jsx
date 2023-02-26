import Button from "./Button";
import "../CSS/BannerWithTwoBtn.css"

function BannerWithTwoBtn({ H1Text, PText, BtnText, BtnText2, COLOUR1, COLOUR2, BACKGROUND1, BACKGROUND2, BORDER1, BORDER2, IMG }) {
    return (
        <div className="MainCont" >
            <div className="FirstMainCont" >
                <h1 style={{fontSize:"250%"}}>{H1Text}</h1>
                <p>{PText}</p> <br />
                <Button colour={COLOUR1} text={BtnText} backgroundClr={BACKGROUND1} Border={BORDER1} />

                <Button colour={COLOUR2} text={BtnText2} backgroundClr={BACKGROUND2} Border={BORDER2} />


            </div>
            <img className="SecondMainCont" src={IMG} alt=""  />
        </div>
    )

}

export default BannerWithTwoBtn;