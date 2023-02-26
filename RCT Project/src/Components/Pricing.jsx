import ForPricingBanner from "../LittleCompo/ForPricingBanner"
import { AppContext } from '../Context/AppContext';
import { useContext } from "react"
import PricingCard from "../LittleCompo/PricingCard";
import BannerWithOneBtn from "../LittleCompo/BannerWithOneBtn";
import BannerWithZeroBtn from "../LittleCompo/BannerWithZeroBtn";
import PricingMain from "../LittleCompo/PricingMain";


function Pricing(){
    const VALUE = useContext(AppContext)

    return (
        <div onMouseEnter={()=>{VALUE.setDoHover(false); VALUE.setDoHover1(false)}}>
            {/* <ForPricingBanner H1Text="Publish Flawlessly. Analyze Effortlessly. Engage Authentically." PText="We’ve built simpler social media tools for busy people. Enjoy our free plan as you get started, or trial our full toolkit priced to make marketing your business on social affordable."/> */}
            <PricingMain />
            <PricingCard />

            <BannerWithOneBtn H1Text="Get in-depth insights to grow your brand on social media" PText="Measure social media performance, create gorgeous reports, and get recommendations to grow reach, engagement & sales." BtnText="Start Your Free Trail" COLOUR1="white" BACKGROUND1="#1976D2" BORDER1="1px solid #1976D2" VDO="https://buffer.com/static/animation/hero-buffer-analyze-animation.mp4" MAINBACK="white" />
            <BannerWithZeroBtn />

        </div>
    )

}

export default Pricing