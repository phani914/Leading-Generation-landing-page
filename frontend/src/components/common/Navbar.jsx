import { useState} from "react";
import { FaBars,FaTimes} from "react-icons/fa";
import {Link} from "react-router-dom";
import logo from "../../assets/logo.png";


function Navbar(){
    const [open,setOpen]=useState(false);
    
    return(
    <nav className="
    fixed
    top-0
    left-0
    w-full
    bg-white
    shadow-md
    z-50
    ">
        <div className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        items-center
        justify-between
        ">
            
            {/* Logo */}
            
            <Link to="/"
            className="
            flex
            items-center">
                
                <img src={logo} alt="TrainPro Logo"
                className="h-12
                w-auto
                object-contain"/>
            </Link>
            
            
            {/* Desktop Menu */}
            <div className="hidden
            md:flex
            items-center
            gap-8">
                
                <a href="#home"
                className="
                hover:text-blue-600
                transition">
                    Home
                </a>
                
                <a href="#about"
                className="
                hover:text-blue-600
                transition"
                >
                    About
                </a>
                
                <a href="#programs"
                className="
                hover:text-blue-600
                transition"
                >
                    Programs
                </a>
                
                <a href="#contact"
                className="
                hover:text-blue-600transition">
                    Contact
                </a>
                
                <Link to="/admin/login"
                className="
                bg-blue-600
                text-white
                px-6
                py-2
                rounded-lg
                hover:bg-blue-700
                transition">
                    Login
                </Link>
            </div>
            
            
            {/* Mobile Button */}
            
            <button onClick={()=>setOpen(!open)}
            className="md:hidden
            text-2xl">
                
                {
                open?
                <FaTimes/>
                :
                <FaBars/>}
            </button>
        </div>
        
        {/* Mobile Menu */}
        
        {
        open &&
        <div className="md:hidden
        bg-white
        px-6
        pb-6shadow">
            
            <div className="
            flex
            flex-col
            gap-5">
                
                <Link to="/"
                onClick={()=>setOpen(false)}
                className="
                hover:text-blue-600">
                    Home
                </Link>
                
                <a href="#about"
                onClick={()=>setOpen(false)}
                className="
                hover:text-blue-600">
                    About
                </a>
                
                <a href="#programs"
                onClick={()=>setOpen(false)}
                className="
                hover:text-blue-600">
                    Programs
                </a>
                
                <a href="#contact"
                onClick={()=>setOpen(false)}
                className="hover:text-blue-600">
                    Contact
                </a>
                
                <a href="#enroll"
                onClick={()=>setOpen(false)}
                className="
                hover:text-blue-600">
                    Enroll Now
                </a>
                
                <Link to="/admin/login"
                onClick={()=>setOpen(false)}
                className="bg-blue-600
                text-white
                text-center
                py-3
                rounded-lg">
                    Login
                </Link>
                
            </div>
        </div>
        
        }
        
    </nav>
    
)

}



export default Navbar;