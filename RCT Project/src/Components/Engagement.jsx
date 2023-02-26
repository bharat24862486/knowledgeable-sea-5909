import BannerWithOneBtn from "../LittleCompo/BannerWithOneBtn"
import CompanyName from "../LittleCompo/CompanyName"
import BannerWithUpAndDown from "../LittleCompo/BannerWithUpAndDown"
import BannerWithOneBtnOpposite from "../LittleCompo/BannerWithOneBtnOpposite"
import { AppContext } from '../Context/AppContext';
import { useContext } from "react"
import BannerWithZeroBtn from "../LittleCompo/BannerWithZeroBtn";


function Engagement() {
    const VALUE = useContext(AppContext)
    return (
        <div  onMouseEnter={()=>{VALUE.setDoHover(false); VALUE.setDoHover1(false)}}>
            <BannerWithOneBtn H1Text="Build a loyal and engaged audience on social media" PText="See all of your comments, stay on top of important interactions, and turn followers into fans using Buffer." BtnText="Start Your Free Trail" COLOUR1="white" BACKGROUND1="#1976D2" BORDER1="1px solid #1976D2" VDO="https://buffer.com/static/animation/hero-buffer-engage-animation.mp4" MAINBACK="white" />
            <CompanyName />

            <BannerWithUpAndDown H1Text="Reply to comments from your desktop" PText="View your unanswered comments in one simple dashboard. Buffer will highlight the most important ones for you." IMG="https://static.buffer.com/cdn-cgi/image/w=1200,quality=90,format=auto/marketing/static/screenshots/engagement-dashboard@2x.png"/>

            <BannerWithOneBtn H1Text="Never miss a comment" PText="The familiar grid view allows you to see which posts have unanswered comments and quickly jump from post to post." BtnText="Check It Out" COLOUR1="white" BACKGROUND1="#1976D2" BORDER1="1px solid #1976D2" IMG="https://static.buffer.com/cdn-cgi/image/w=640,quality=90,format=auto/marketing/static/screenshots/engage-comments@2x.jpg" MAINBACK="white" />

            <BannerWithOneBtnOpposite H1Text="Compared to what we were using before, the notifications are more accurate and it’s so much easier to interact and comment back." PText="" BtnText="" COLOUR1="white" BACKGROUND1="#1976D2" BORDER1="1px solid #1976D2" IMG="https://buffer.com/static/testimonials/brylanna-nicole@2x.jpg" MAINBACK="white" />

            <BannerWithUpAndDown H1Text="Prioritize important conversations" PText="Smart alerts using machine learning let you know at a glance if a post has questions, negative sentiment, or comments about a purchase." IMG="https://static.buffer.com/cdn-cgi/image/w=1080,quality=90,format=auto/marketing/static/screenshots/engage-mart-alerts@2x.jpg"/>

            <BannerWithOneBtn H1Text="It's all about speed" PText="There's only so much time in the day for social media marketing. Keyboard hotkeys and smart emojis help you quickly interact with more fans, without having to pick up your phone." BtnText="Try It" COLOUR1="white" BACKGROUND1="#1976D2" BORDER1="1px solid #1976D2" IMG="https://static.buffer.com/cdn-cgi/image/w=640,quality=90,format=auto/marketing/static/screenshots/engange-hotkeys@2x-v2.jpg" MAINBACK="white" />

            <BannerWithZeroBtn />




        </div>
    )

}

export default Engagement