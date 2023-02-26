
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaTiktok, FaLinkedinIn, FaPinterestSquare, FaAppStore, FaGooglePlay } from 'react-icons/fa';
import Button from './Button';
import "../LittleCompo/Footer.css"
function Footer() {

    return (
        <div className='MainDiv' style={{ display: "flex", justifyContent: "space-around", marginTop:"10%", marginBottom:"5%" }}>
            <div className='FirstMainDiv' >
                <div>
                    <h1 style={{fontSize:"40px"}}>HelpGrow</h1>
                </div>
                <div >
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <FaFacebookSquare size="20px" />
                        <FaInstagramSquare size="20px" />
                        <FaTwitterSquare size="20px" />
                        <FaTiktok size="20px" />
                        <FaLinkedinIn size="20px" />
                        <FaPinterestSquare size="20px" />



                    </div>
                    <div>
                        <p style={{ fontWeight: "600" }}>Downloads</p>
                        <span className='MakeCenter' style={{display:"flex", display:"block", margin:"auto"}}><button style={{ textAlign: "center", padding: "5px 15px", border:"2px solid #1976D2", display:"flex", alignItems:"center",borderRadius:"5px", color:"#1976D2" }}><FaAppStore /> <span>  App Store</span></button>  &nbsp; <button style={{ textAlign: "center", padding: "5px 15px", border:"2px solid #1976D2", display:"flex", alignItems:"center",borderRadius:"5px", color:"#1976D2" }}><FaGooglePlay /> <span> Google Play</span></button></span>

                    </div>
                </div>
            </div>
            <div className='SecondMainDiv' >
                <div>

                    <ul style={{textDecoration:"none"}}>
                        <h2>Tools</h2>
                        <li ><a href="#">Publishing</a></li>
                        <li><a href="#">Analytics</a></li>
                        <li><a href="#">Engagement</a></li> 
                        <li><a href="#">Start Page</a></li>
                        <li><a href="#">Extras</a></li>
                    </ul>
                </div>

                <div>

                    <ul>
                        <h2>Resources</h2>
                        <li ><a href="#">Blog</a></li>
                        <li><a href="#">Content Library</a></li>
                        <li><a href="#">Browser Extention</a></li>
                        <li><a href="#">Free Image Editor</a></li>
                        <li><a href="#">Free Marketing Tools</a></li>
                    </ul>
                </div>


                <div>

                    <ul>
                        <h2>Support</h2>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Status</a></li>
                        <li><a href="#">What's New</a></li>
                        <li><a href="#">Product Roadmap</a></li>
                        {/* <li><a href="#">Extras</a></li> */}
                    </ul>
                </div>

                <div>

                    <ul>
                        <h2>Company</h2>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Transparency</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Accessibility</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Sitemap</a></li>
                    </ul>
                </div>

            </div>
        </div>
    )

}

export default Footer