import {
    NavLink,
    Outlet
} from "react-router-dom";


import {
    useState
} from "react";


import {
    FaHome,
    FaUsers,
    FaProjectDiagram,
    FaUserTie,
    FaCode,
    FaChartBar,
    FaSignOutAlt,
    FaBars,
    FaTimes
} from "react-icons/fa";


import {
    useAuth
} from "../context/AuthContext";





function AdminLayout(){
    
    const {user,logout}=useAuth();
    const [open,setOpen]=useState(false);
    const menu=[{
        name:"Dashboard",
        path:"/admin/dashboard",
        icon:<FaHome/>
    },{
        name:"Leads",
        path:"/admin/leads",
        icon:<FaUsers/>
    },{
        name:"Projects",
        path:"/admin/projects",
        icon:<FaProjectDiagram/>
    },{
        name:"Mentors",
        path:"/admin/mentors",
        icon:<FaUserTie/>
    },{
        name:"Technologies",
        path:"/admin/technologies",
        icon:<FaCode/>
    },{
        name:"Reports",
        path:"/admin/reports",
        icon:<FaChartBar/>
    }
];


return(
<div className="
min-h-screen
bg-slate-100
flex
">
    
    {/* Overlay Mobile */}
    
    {
    open &&
    
    <div
    onClick={()=>setOpen(false)}
    className="
    fixed
    inset-0
    bg-black
    bg-opacity-40
    z-20
    md:hidden"/>
    
    }
    
    {/* Sidebar */}
    <aside
    className={`
        w-64
        bg-slate-900
        text-white
        fixed
        top-0
        left-0
        h-screen
        p-6
        z-30
        transition-transform
        duration-300
        ${
            open?"translate-x-0":
            "-translate-x-full md:translate-x-0"
        }
        `}
    >
        
        <div className="
        flex
        justify-between
        items-center
        mb-10">
            
            <h1 className="
            text-2xl
            font-bold">
                
                TrainPro
            </h1>
            
            
            <button
            onClick={()=>setOpen(false)}
            className="

            md:hidden
            text-xl">
                
                <FaTimes/>
            </button>
        </div>
        
        <nav className="
        space-y-3">
            {
            menu.map((item)=>(
            <NavLink
            
            key={item.name}
            to={item.path}
            onClick={()=>setOpen(false)}
            className={({isActive})=>`flex
            items-center
            gap-3
            px-4
            py-3
            rounded-lg
            transition
            ${
                isActive?"bg-blue-600":"hover:bg-slate-800"
            }`}
            >
                
                {item.icon}
                
                {item.name}
            </NavLink>
            
            ))
            }
            
        </nav>
    </aside>
    
    {/* Main Content */}
    
    
    <div className="md:ml-64
    flex-1">
        
        <header className="
        h-16
        bg-white
        shadow
        flex
        items-center
        justify-between
        px-6">
            
            <button
            onClick={()=>setOpen(true)}
            className="
            md:hidden
            text-xl">
                
                <FaBars/>
            </button>
            
            <div>
                
                <h2 className="
                font-semibold
                text-xl">
                    
                    Admin Dashboard
                </h2>
                
                <p className="
                text-sm
                text-gray-500">
                    Welcome back
                </p>
            </div>
            
            <div className="
            flex
            items-center
            gap-5">
                
                <div className="
                text-right
                hidden
                md:block">
                    <p className="
                    font-semibold">
                        
                        {user?.username || "Admin"}
                        
                    </p>
                    
                    <p className="
                    text-sm
                    text-gray-500">
                        
                        {user?.role || "Administrator"}
                        
                    </p>
                </div>
                
                <button
                onClick={()=>{
                    logout();
                    window.location.href="/admin/login";
                }}
                
                className="flex
                items-center
                gap-2
                bg-red-500
                text-white
                px-4
                py-2
                rounded-lg
                hover:bg-red-600
                transition"
                >
                    
                    <FaSignOutAlt/>
                    Logout
                </button>
            </div>
        </header>
        
        <main className="p-8">
            
            <Outlet/>
        </main>
        
    </div>

</div>


)


}



export default AdminLayout;