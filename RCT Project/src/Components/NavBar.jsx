import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im'
import "../Components/NavBar.css"
import { useState, useContext } from 'react';
import { HiPaperAirplane } from 'react-icons/hi'
import { IoIosAnalytics } from 'react-icons/io'
import { MdMessage } from 'react-icons/md'
import { BsPencilSquare, BsFacebook, BsInstagram, BsTwitter, BsLinkedin, BsGoogle } from 'react-icons/bs'
import { AppContext } from '../Context/AppContext';
import { RiArrowDropDownLine } from 'react-icons/ri'
import { Navigate, Link } from 'react-router-dom';
import ROUTES from '../Routes/ROUTES';
import { useNavigate } from 'react-router-dom';

import Login from './Login';




function NavBar() {

    const [HamburgerVal, setHamburgerVal] = useState(false)
    const [firstVal, setFirstVal] = useState(false)

    const navigate = useNavigate()

    let VALUE = useContext(AppContext)

    let ImgUrl = "https://i.ibb.co/8PQxV9M/20230224-141446.png"

    return (
        <>
            <nav className='FirstPart' style={{backgroundColor:"white"}}>

               <img src={ImgUrl} alt="" onClick={()=>navigate("/home")}/>


                <div className='SecondPart'>
                    <p onMouseEnter={() => { VALUE.setDoHover(true); VALUE.setDoHover1(false) }} style={{display:"flex", alignItems:"center"}}> Tools <RiArrowDropDownLine /></p>
                    <p onMouseEnter={() => { VALUE.setDoHover1(true); VALUE.setDoHover(false) }} style={{display:"flex", alignItems:"center"}}> Channels <RiArrowDropDownLine /></p>
                    <Link to="pricing"><p>Pricing</p></Link>
                    <p>Blog</p>

                </div>
                <div className='LastPart'>
                    {VALUE.isLogin ?

                        <button className='BtnTag' onClick={()=>VALUE.setLogin(false)}>Log-Out</button>

                        :
                        <span style={{ display: "flex", justifyContent: "space-around", width: "100%", alignItems:"center" }}> <Link to="/login"><p className='PTag' > Log in</p></Link>
                            <Link to="/signup"><button className='BtnTag'>Get Started Now</button></Link></span>}
                </div>

                <div className='HamBurger' onClick={() => setHamburgerVal(!HamburgerVal)}>
                    {HamburgerVal ? <ImCross /> : <GiHamburgerMenu />}
                </div>
            </nav>
            <div>
                {HamburgerVal ? <div className='AfterNav'>
                    <p style={{display:"flex", alignItems:"center"}}>Tools <RiArrowDropDownLine /></p>
                    <p style={{display:"flex", alignItems:"center"}}>Channels <RiArrowDropDownLine /></p>
                    <p>Pricing</p>
                    <p>Blog</p>

                </div> : ''}
            </div>

            <div>
                {VALUE.doHover ? <div className='FirstSlide Fix'>
                    <p style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}> <HiPaperAirplane /> Publishing</p>
                    <p style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}> <IoIosAnalytics /> Analytics</p>
                    <Link to="/engagement"><p style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}> <MdMessage /> Engagement</p></Link>
                    <p style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}> <BsPencilSquare /> Start Page</p>
                </div> : ''}
            </div>

            <div>
                {VALUE.doHover1 ? <div className='SecondSlide Fix'>
                    <p style={{display:"flex", alignItems:"center", justifyContent:"space-between"}} > <BsFacebook /> Facebook</p>
                    <p style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}> <BsInstagram /> Instagram</p>
                    <p style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}> <BsTwitter /> Twitter</p>
                    <p style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}> <BsGoogle />  Google Business</p>
                    <p style={{display:"flex", alignItems:"center", justifyContent:"space-between", backgroundColor:"white"}}><BsLinkedin /> Linkdin</p>
                </div> : ''}
            </div>
        </>
    )
}

export default NavBar