import Button from "../LittleCompo/Button"
import BannerWithTwoBtn from "../LittleCompo/BannerWithTwoBtn"
import CompanyName from "../LittleCompo/CompanyName"
import PeraOne from "../LittleCompo/PeraOne"
import BannerWithOneBtn from "../LittleCompo/BannerWithOneBtn"
import TimeSpend from "../LittleCompo/TimeSpend"
import CompanyNameTwo from "../LittleCompo/CompanyNameTwo"
import BannerWithZeroBtn from "../LittleCompo/BannerWithZeroBtn"
import "./Main.css"
import { AppContext } from '../Context/AppContext';
import { useContext } from "react"

function Main(){
    const VALUE = useContext(AppContext)
    return(
        <div className="MainSetting" onMouseEnter={()=>{VALUE.setDoHover(false); VALUE.setDoHover1(false)}}>
            <BannerWithTwoBtn H1Text="Grow your audience on social and beyond" PText="Buffer helps you build an audience organically. We’re a values-driven company that provides affordable, intuitive, marketing tools for ambitious people and teams." BtnText="Get Started Now" BtnText2="Watch Video" COLOUR1="white" COLOUR2="#1976D2" BACKGROUND1="#1976D2" BACKGROUND2="white" BORDER1="1px solid #1976D2" BORDER2="1px solid #1976D2" IMG="https://buffer.com/static/homepage/webp/hero.webp"/>
            <CompanyName />
            <PeraOne />
            <BannerWithOneBtn H1Text="Get the clicks you deserve" H2Text="1. SHARE CLICK-WORTHY CONTENT" PText="Buffer will tell you when and what to publish to make your content stand out." BtnText="Start Creating" COLOUR1="white"  BACKGROUND1="#1976D2"  BORDER1="1px solid #1976D2"IMG="https://buffer.com/static/homepage/webp/ShareClickWorthyContent.webp" MAINBACK="white"/>
            <BannerWithOneBtn H1Text="Grow your following" H2Text="2. BUILD AN ENGAGED AUDIENCE" PText="Buffer will share your content on the right channels, with suggested hashtags to help you grow." BtnText="Start Growing" COLOUR1="white"  BACKGROUND1="#1976D2"  BORDER1="1px solid #1976D2"IMG="https://buffer.com/static/homepage/webp/BuildAnEnagagedAudience-2.webp" MAINBACK="#FAFAFA"/>
            <BannerWithOneBtn H1Text="Halve your workload" H2Text="3. SAVE TONS OF TIME" PText="Buffer will publish everything for you to save time and it’ll showcase your work with automated reports." BtnText="Start Optimizing" COLOUR1="white"  BACKGROUND1="#1976D2"  BORDER1="1px solid #1976D2"IMG="https://buffer.com/static/homepage/webp/SaveTonsOfTime.webp" MAINBACK="white"/>
            <BannerWithOneBtn H1Text="Collaboration has never been easier" H2Text="4. COORDINATE WITH EASE" PText="With Buffer’s permissions levels and approval flows, your team can work freely without any micro-management." BtnText="Start Collaborating" COLOUR1="white"  BACKGROUND1="#1976D2"  BORDER1="1px solid #1976D2"IMG="https://buffer.com/static/homepage/webp/CoordinateWithEase.webp" MAINBACK="#FAFAFA"/>


            <TimeSpend />

            <BannerWithOneBtn H1Text="And we are here to help" H2Text="" PText="Our customer advocates are standing by 24/7 to support you via email and social media. We also have a comprehensive, regularly updated help center for those who prefer to find help themselves." BtnText="visit our help center" COLOUR1="#1976D2"  BACKGROUND1="white"  BORDER1="1px solid #1976D2"IMG="https://buffer.com/static/team/webp/buffer-team-map-2022@2x.webp" MAINBACK="white"/>

            <CompanyNameTwo />

            <BannerWithZeroBtn />
        </div>
        
    )
}

export default Main