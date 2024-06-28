import { Link } from "react-scroll";
import image from "./assets/iphone.webp";
import image2 from "./assets/samsung.webp";
import image3 from "./assets/p.jpg";
import { MdBarChart, MdDashboard, MdDataset, MdDeliveryDining, MdHdrPlus, MdImportExport, MdInventory, MdOutlineHelp, MdOutlineSettings, MdOutlineShop, MdPlusOne, MdSearch } from "react-icons/md";
import { FaChevronCircleRight, FaChevronLeft, FaChevronRight, FaEllipsisV, FaFacebook, FaFile, FaFileExport, FaInstagram, FaPlus, FaTwitter } from "react-icons/fa";

const Dashboard = () =>{

    
    return(
    <>
    <main>
      <div className="flex">
     <div className=" bg-lavender w-72 h-auto hidden lg:block border-r border-b border-semiblack">
       <div className="p-4 ml-8">
         <ul className="text-gray text-xs">
          <li className="font-bold -ml-2 my-4">GENERAL</li>
          <Link className="flex gap-1 p-2 hover:bg-semicyan my-1 cursor-pointer">
            <div className="flex items-center"><MdDashboard/></div><li>Dashboard</li></Link>
          <Link className="flex gap-1 p-2 hover:bg-semicyan my-1 cursor-pointer">
            <div className="flex items-center"><MdInventory/></div><li>Inventory</li></Link>
          <Link className="flex gap-1 p-2 hover:bg-semicyan my-1 cursor-pointer">
            <div className="flex items-center"><MdOutlineShop/></div><li>Sales Orders</li></Link>
          <Link className="flex gap-1 p-2 hover:bg-semicyan my-1 cursor-pointer">
            <div className="flex items-center"><MdDeliveryDining/></div><li>Supliers</li></Link>
          <Link className="flex gap-1 p-2 hover:bg-semicyan my-1 cursor-pointer">
            <div className="flex items-center"><MdBarChart/></div><li>Reports</li></Link>
 
          <li className="font-bold -ml-2 my-4">SUPPORT</li>
          <Link className="flex gap-1 p-2 hover:bg-semicyan my-1 cursor-pointer">
            <div className="flex items-center"><MdOutlineHelp/></div><li>Helps</li></Link>
          <Link className="flex gap-1 p-2 hover:bg-semicyan my-1 cursor-pointer">
            <div className="flex items-center"><MdOutlineSettings/></div><li>Settings</li></Link>
         </ul> 
        </div>
        </div>
       
     {/* inventory section */}

    <div className="w-screen overflow-x-hidden">
      <div className="flex justify-between items-center p-2 xl:gap-36 bg-lavender">
        <div className="font-bold">Inventory </div>
        <div className="w-54 items-center hidden lg:flex bg-snowwhite p-1">
            <span className="cursor-pointer hover:opacity-70">
              <MdSearch className="text-xl text-gray"/></span>
            <input type="search" name="search" placeholder="   Search" className="w-full outline-none text-gray"/></div>

            <a href="">
            <button className="flex p-1 bg-cyan text-white items-center hover:opacity-70">
            <FaPlus className="text-xs"/>Add New Products</button>
            </a>
           
      </div>

        <table className="w-full text-center">
         <span className="font-semibold text-xl my-2">Product List</span>
         <tr className="text-center p-2 text-black text-sm bg-lavender border-8 border-snowwhite">
                  <th><input type="checkbox" className="text-cyan"/></th>
                  <th>Name</th>
                  <th>Code</th>
                  <th>Type</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Image</th>
         </tr>
          <tr className=" p-2 text-black text-sm bg-lavender border-4 border-snowwhite">
                  <td><input type="checkbox" className="text-cyan"/></td>
                  <td className="hover:bg-semicyan cursor-pointer p-2 hover:rounded-md hover:font-semibold">Macbook pro</td>
                  <td>#0000</td>
                  <td>Laptop</td>
                  <td>$1,240</td>
                  <td>44</td>
                  <td><img src={image} className="w-14 rounded border-2 border-gray hover:animate-spin"/></td>
          </tr>
          <tr className="p-2 text-black text-sm bg-lavender border-4 border-snowwhite">
                  <td><input type="checkbox" className="text-cyan"/></td>
                  <td className="hover:bg-semicyan cursor-pointer p-2 hover:rounded-md hover:font-semibold">Iphone 14 pro</td>
                  <td>#0001</td>
                  <td>Phone</td>
                  <td>$1,240</td>
                  <td>22</td>
                  <td><img src={image2} className="w-14 rounded border-2 border-gray hover:animate-spin"/></td>
          </tr>
          <tr className="p-2 text-black text-sm bg-lavender border-4 border-snowwhite">
                  <td><input type="checkbox" className="text-cyan"/></td>
                  <td className="hover:bg-semicyan cursor-pointer p-2 hover:rounded-md hover:font-semibold">Google Pixel 4a</td>
                  <td>#0002</td>
                  <td>Phone</td>
                  <td>$740</td>
                  <td>40</td>
                  <td><img src={image} className="w-14 rounded border-2 border-gray hover:animate-spin"/></td>
          </tr>
          <tr className="p-2 text-black text-sm bg-lavender border-5 border-snowwhite">
                  <td><input type="checkbox" className="text-cyan"/></td>
                  <td className="hover:bg-semicyan cursor-pointer p-2 hover:rounded-md hover:font-semibold">Zoom 75</td>
                  <td>#0003</td>
                  <td>Tab</td>
                  <td>$1,040</td>
                  <td>4</td>
                  <td><img src={image} className="w-14 rounded border-2 border-gray hover:animate-spin"/></td>
          </tr>
          <tr className="p-2 text-black text-sm bg-lavender border-4 border-snowwhite">
                  <td><input type="checkbox" className="text-cyan"/></td>
                  <td className="hover:bg-semicyan cursor-pointer p-2 hover:rounded-md hover:font-semibold">Dell</td>
                  <td>#0004</td>
                  <td>Laptop</td>
                  <td>$1,340</td>
                  <td>40</td>
                  <td><img src={image2} className="w-14 rounded border-2 border-gray hover:animate-spin"/></td>
          </tr>
          <tr className="p-2 text-black text-sm bg-lavender border-4 border-snowwhite">
                  <td><input type="checkbox" className="text-cyan"/></td>
                  <td className="hover:bg-semicyan cursor-pointer p-2 hover:rounded-md hover:font-semibold">Samsung s22 Ultra</td>
                  <td>#0005</td>
                  <td>Phone</td>
                  <td>$1,440</td>
                  <td>44</td>
                  <td><img src={image} className="w-14 rounded border-2 border-gray hover:animate-spin"/></td>
          </tr>
          <tr className="p-2 text-black text-sm bg-lavender border-4 border-snowwhite">
                  <td><input type="checkbox" className="text-cyan"/></td>
                  <td className="hover:bg-semicyan cursor-pointer p-2 hover:rounded-md hover:font-semibold">Samsung s22 Ultra</td>
                  <td>#0005</td>
                  <td>Phone</td>
                  <td>$1,440</td>
                  <td>44</td>
                  <td><img src={image2} className="w-14 rounded border-2 border-gray hover:animate-spin"/></td>
          </tr>
          <tr className="p-2 text-black text-sm bg-lavender border-4 border-snowwhite">
                  <td><input type="checkbox" className="text-cyan"/></td>
                  <td className="hover:bg-semicyan cursor-pointer p-2 hover:rounded-md hover:font-semibold">Samsung s22 Ultra</td>
                  <td>#0005</td>
                  <td>Phone</td>
                  <td>$1,440</td>
                  <td>44</td>
                  <td><img src={image} className="w-14 rounded border-2 border-gray hover:animate-spin"/></td>
          </tr>
        </table>
      </div> 

       <aside>
          <div>
          <div className=" justify-around hidden lg:flex items-center ml-2 w-96 border-l border-r border-b
             p-3 border-semiblack">
              <span className="flex gap-1">
                <img src={image3} className="w-10 h-10 rounded-full cursor-pointer"/>
                  <div className="flex text-xs items-center">
                   <div>
                   <h4 className="font-semibold">Bishir Tukur</h4>
                   <p className="text:gray">Admin</p>
                   </div>
                  </div>
              </span>
               <div className="text-gray text-xs border border-semiblack cursor-pointer p-2 rounded"><FaEllipsisV/></div>
            </div>
             <div>
              <div className="hidden lg:block">
                <h3 className="ml-2 font-semibold">Quick Actions</h3>
                <div className="block justify-around items-center p-2 text-black ml-2 border border-semiblack text-gray my-2">
                  <div className="flex text-xs my-2 justify-around">
                    <p className="flex gap-1 items-center"><FaFile className="hover:text-cyan"/>Create Order</p><p>ctrf + n</p></div>
                  <div className="flex text-xs my-2 justify-around">
                    <p className="flex gap-1 items-center"><MdDataset className="hover:text-cyan"/>Add Product</p><p>ctrf + p</p></div>
                  <div className="flex text-xs my-2 justify-around">
                    <p className="flex gap-1 items-center"><MdDeliveryDining className="hover:text-cyan"/>Add Supplier</p><p>ctrf + k</p></div>
                  <div className="flex text-xs my-2 justify-around gap-7">
                    <p className="flex gap-1 items-center"><FaFileExport className="hover:text-cyan"/>Export</p><p>ctrf + s</p></div>
                </div>
              </div>
              <div className="hidden lg:block">
               <h3 className="ml-2 font-semibold">Recent Activity</h3>
                <div className="block justify-around items-center p-2 text-black ml-2 border-t border-r border-l
                 border-semiblack text-gray">
                  <div>
                    <h4 className="flex font-semibold text-sm ml-8 cursor-pointer my-2 gap-1">Restock<p className="text-cyan">6</p>Product</h4>
                    <div className="text-xs flex justify-around">
                      <div className="flex gap-1 cursor-pointer"><img src={image2} className="w-8 animate-pulse rounded"/><p>Macbook pro</p></div><p>-</p><p>1 m Ago</p>
                    </div>
                    <h4 className="flex font-semibold text-sm ml-8 cursor-pointer my-2 gap-1">Sold<p className="text-cyan">2</p>Product</h4>
                    <div className="text-xs flex justify-around my-2 gap-1">
                      <div className="flex gap-1 cursor-pointer"><img src={image2} className="w-8 animate-pulse rounded"/><p>Macbook pro</p></div><p>-</p><p>3 m Ago</p>
                    </div>
                    <h4 className="flex font-semibold text-sm ml-8 cursor-pointer my-2 gap-1">Sold<p className="text-cyan">1</p>Product</h4>
                    <div className="text-xs flex justify-around my-2">
                      <div className="flex gap-1 cursor-pointer"><img src={image2} className="w-8 animate-pulse rounded"/><p>Macbook pro</p></div><p>-</p><p>5 m Ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       </aside>   
    </div>
     <div className="flex items-center justify-center p-2 text-black border-2 border-semiblack">
       <middle>
       <button className=" w-14 hover:bg-cyan hover:text-snowwhite
           border-2 border-semiblack bg-lavender p-2 font-bold text-cyan hover:bg-cyan relative top-0.5"><FaChevronLeft
           className="text-1xl"/></button>
          <button className=" w-14 hover:bg-cyan hover:text-snowwhite
           border-2 border-semiblack bg-lavender p-1 font-bold text-cyan hover:bg-cyan">1</button>
          <button className=" w-14 hover:bg-cyan hover:text-snowwhite
           border-2 border-semiblack bg-lavender p-1 font-bold text-cyan hover:bg-cyan">2</button>
          <button className=" w-14 hover:bg-cyan hover:text-snowwhite
           border-2 border-semiblack bg-lavender p-1 font-bold text-cyan hover:bg-cyan">3</button>
          <button className=" w-14 hover:bg-cyan hover:text-snowwhite
           border-2 border-semiblack bg-lavender p-1 font-bold text-cyan hover:bg-cyan">4</button>
          <button className=" w-14 hover:bg-cyan hover:text-snowwhite
           border-2 border-semiblack bg-lavender p-1 font-bold text-cyan hover:bg-cyan">5</button>
          <button className=" w-14 hover:bg-cyan hover:text-snowwhite
           border-2 border-semiblack bg-lavender p-2 font-bold text-cyan hover:bg-cyan relative top-0.5"><FaChevronRight 
           className="text-1xl"/></button>
      </middle>
      </div> 
    </main> 
    </>
    )
};

export default Dashboard;         