import { useState } from "react";
import {FaTimes} from "react-icons/fa"
import {MdDashboard, MdDeliveryDining, MdInventory, MdOutlineHelp, MdOutlineMenu, MdOutlineSettings, MdOutlineShop} from "react-icons/md"
import { Link } from "react-scroll";

const Navbar = () =>{
  const [click, setClick] = useState(false);
   const handleClick = () => setClick(!click)

  const content =<>
  <div className="lg:hidden block absolute top-16 w-full h-screen left-0 bg-lavender right-0 p-0 -mt-2 transition">
    <ul className="text-left font-semibold text-xl p-20 space-y-5  md:z-auto z-[-1] left-0
            w-full md:w-auto text-gray ml:pl-0 pl-9 transition-all">
          <div className="font-bold border-b-2 p-2 my-4">GENERAL</div>
          <div className="hover:bg-semicyan p-2 hover:bg-semicyan flex items-center">
          <MdDashboard/>
            <Link to="Home"><li className="ml-2">Dashboard</li></Link></div>
          <div className="hover:bg-semicyan p-2 hover:bg-semicyan flex items-center">
          <MdInventory/>
            <Link to="About"><li className="ml-2">Inventorey</li></Link></div>
          <div className="hover:bg-semicyan p-2 hover:bg-semicyan flex items-center">
          <MdOutlineShop/>
            <Link to="Services"><li className="ml-2">Sales Orders</li></Link></div>
          <div className="hover:bg-semicyan p-2 hover:bg-semicyan flex items-center">
            <MdDeliveryDining/>
            <Link to="Blogs"><li className="ml-2">Supliers</li></Link></div>
          
           
          <div className="font-bold border-b-2 p-2 my-4">SUPPORT</div>
          <div className="hover:bg-semicyan p-2 hover:bg-semicyan flex items-center">
            <MdOutlineHelp/>
            <Link to="Contact" className=" "><li  className="ml-2">Help</li></Link></div>
          <div className="hover:bg-semicyan p-2 hover:bg-semicyan flex items-center">
            <MdOutlineSettings/>
            <Link to="Contact" className="p-0 hover:bg-semicyan"><li className="ml-2">Setting</li></Link></div> 
    </ul>
  </div>
  </> 

    return(
    <>
    <nav>
      <div className="border-b border-semiblack w-full sticky top-0 left-0 h-10vh flex justify-between z-50 lp:py-5 px-20 py-4">
         <div className="flex items-center flex-1 text-[18px] font-semibold cursor-pointer">
           <span> Ware<span className="text-cyan">view</span></span>
         </div>
         <div className="lg:flex md:flex  lg: flex-1 items-center justify-end  hidden">
            <div className="flex-10">
               <ul className="flex gap-8 mr-16 text-[18px] transition-all duration-500 ease-in md:hidden">
               <Link to="Home"><li className="cursor-pointer">Dashboard</li></Link>
               <Link to="About"><li className="cursor-pointer">Inventorey</li></Link>
               <Link to="Services"><li className="cursor-pointer">Sales Orders</li></Link>
               <Link to="Blogs"><li className="cursor-pointer">Supliers</li></Link>
               <Link to="Contact"><li className="cursor-pointer">Support</li></Link>
               <Link to="Contact"><li className="cursor-pointer">Help</li></Link>
               <Link to="Contact"><li className="cursor-pointer">Setting</li></Link>
               </ul>

            </div>
         </div>
         <div>
          {click && content}
         </div>
         <button className="block sm:hidden transition text-2xl font-bold text-gray" onClick={handleClick}>
          {click ? <FaTimes/> : <MdOutlineMenu/>}
         </button>
      </div>
    </nav>
    </>
    )
};

export default Navbar;