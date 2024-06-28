import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";


const Footer = () =>{
    return(
        <>
        <div className="w-full p-4 border-b border-semiblack">
          <div className="flex justify-around flex-wrap">
         <div>
          <div className="flex items-center flex-1 p-5 text-[18px] font-semibold cursor-pointer">
           <span className="ml-3"> Ware<span className="text-cyan">view</span></span>
          </div>
         </div>
         <div>
            <ul className="flex gap-5 text-sm p-5 items-center font-semibold text-gray cursor-pointer flex-wrap">
                <Link className="hover:text-cyan"><li>Dashboard</li></Link>
                <Link className="hover:text-cyan"><li>Sales</li></Link>
                <Link className="hover:text-cyan"><li>Banking</li></Link>
                <Link className="hover:text-cyan"><li>Records</li></Link>
                <Link className="hover:text-cyan"><li>Contact Us</li></Link>
            </ul>
         </div> 
      </div>

     <div className="flex justify-around flex-wrap my-2">
      <div className="text-sm font-semibold text-gray">
        <p>Cultivating Efficiency, Tracking Excelense -<br/>
         Your Trusted Inventory Management Partner</p></div>
      <div>
            <div className="flex gap-2">
              <a href="" 
              className="bg-cyan text-snowwhite bg-cyan text-snowwhite rounded-full p-2 animate-bounce transition-all"><FaFacebook/></a>
              <a href="" 
              className="bg-cyan text-snowwhite bg-cyan text-snowwhite rounded-full p-2 animate-bounce transition-all"><FaInstagram/></a>
              <a href="" 
              className="bg-cyan text-snowwhite bg-cyan text-snowwhite rounded-full p-2 animate-bounce"><FaTwitter/></a>
            </div>
         </div>
        </div>
        </div>
        <div className="flex justify-around text-sm font-semibold text-gray p-4 flex-wrap">
             <a href="">Privacy Policy</a>
             <a href="">@2024 Katdict Technology, Inc.</a>
             <a href="">Terms & Conditions</a>
        </div>     
        </>
    )
};

export default Footer;