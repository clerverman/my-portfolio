import {AiFillGithub , AiFillLinkedin, AiFillGoogleCircle , AiOutlineMenu , AiOutlineClose } from "react-icons/ai"
import { useEffect, useState } from "react";

function NavBar() {
    const [open, setOpen] = useState(false) ; 
    const handleOpen = ()=> {
        setOpen(!open); 
        console.log(open);
    }
   
    return ( 
       <div className="w-screen md:h-24 md:pt-3">
            <div className="container mx-auto flex justify-around items-center md:py-3 py-4">
                <h1 className="my-portfolio hidden lg:block">My protfolio.</h1>
                <h1 className="slimani-mouhcine lg:hidden">SM</h1>
                <div className="flex">
                    <ul className="md:flex hidden space-x-3">
                        <li className="item">home</li>
                        <li className="item">about</li>
                        <li className="item">skills</li>
                        <li className="item">career</li>
                        <li className="item">experiences</li> 
                    </ul>
                </div>
                <div className="lg:flex space-x-3 hidden "> 
                    <AiFillGithub className="social-media"/>
                    <AiFillLinkedin className="social-media"/>
                    <AiFillGoogleCircle className="social-media"/>
                </div>
                <div onClick={handleOpen} className={open ? "md:hidden" : "hidden"}>
                    <AiOutlineMenu className="text-white text-3xl" />
                </div>
                <div onClick={handleOpen} className={!open ? "md:hidden" : "hidden"}>
                    <AiOutlineClose className="text-white text-3xl" />
                </div> 
            </div> 
            <div className={!open ?'mobile-menu z-40' : 'hidden'}>
                <ul className="flex flex-col space-y-8">
                    <li className="item">home</li>
                    <li className="item">about</li>
                    <li className="item">skills</li>
                    <li className="item">career</li>
                    <li className="item">experiences</li>  
                </ul> 
            </div> 
       </div>
     );
}

export default NavBar;