import {
    FaUsers,
    FaProjectDiagram,
    FaUserTie,
    FaChartLine
} from "react-icons/fa";


import {
    useState,
    useEffect
} from "react";


import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip
} from "recharts";


function Dashboard(){
    
    const [cards,setCards]=useState([]);
    
    const [leadData,setLeadData]=useState([]);
    
    const [technologyData,setTechnologyData]=useState([]);
    
    const icons={
        leads:<FaUsers/>,
        projects:<FaProjectDiagram/>,
        mentors:<FaUserTie/>,
        placement:<FaChartLine/>
    };
    
    useEffect(()=>{
        const leads =JSON.parse(localStorage.getItem("leads"))||[];
        
        const projects =JSON.parse(localStorage.getItem("projects"))||[];
        
        const mentors =JSON.parse(localStorage.getItem("mentors"))||[];
        
        
        setCards([{
            title:"Total Leads",
            value:leads.length,
            icon:icons.leads},
            
            {
                title:"Total Projects",
                value:projects.length,
                icon:icons.projects
            },{
                title:"Total Mentors",
                value:mentors.length,
                icon:icons.mentors
            },{
                title:"Placement Rate",
                value:"85%",
                icon:icons.placement
            }
        ]);
        
        const statusCount={};

        leads.forEach((lead)=>{
            const status = lead.status || "New";
            statusCount[status] =(statusCount[status] || 0)+1;
        });
        
        setLeadData(
            Object.keys(statusCount).map((status)=>({
                name:status,
                value:statusCount[status]
            }
        ))
    );
    
    const techCount={};
    leads.forEach((lead)=>{
        const tech =lead.technology || "Other";
        
        techCount[tech] =(techCount[tech] || 0)+1;
    });
    
    
    setTechnologyData(
        Object.keys(techCount).map((tech)=>({
            name:tech,
            students:techCount[tech]
        }
    ))
);
},[]);

return(
<div>
    <h1 className="
    text-3xl
    font-bold
    mb-8">
        Dashboard Overview
        
    </h1>
    
    
    {/* Cards */}
    
    <div className="
    grid
    md:grid-cols-4
    gap-6
    mb-10">
        
        {
        cards.map((card,index)=>(
        <div
        key={index}
        className="
        bg-white
        p-6
        rounded-xl
        shadow
        transition
        hover:-translate-y-1
        hover:shadow-xl
        flex
        items-center
        gap-5">
            
            <div className="
            text-4xl
            text-blue-600">
                
                {card.icon}
            </div>
            
            <div>
                <p className="text-gray-500">
                    {card.title}
                </p>
                
                <h2 className="text-3xl
                font-bold">
                    
                    {card.value}
                </h2>
                
            </div>
        </div>
        ))
        }
    </div>
    
    
    {/* Charts */}
    <div className="
    grid
    md:grid-cols-2
    gap-8
    ">
        
        
        {/* Lead Chart */}
        
        
        <div className="
        bg-white
        p-6
        rounded-xl
        shadow
        transition
        hover:-translate-y-1
        hover:shadow-xl">
            
            <h2 className="
            text-xl
            font-bold
            mb-5">
                
                Lead Status
            </h2>
            
            <ResponsiveContainer
            width="100%"
            height={300}>
                
                <PieChart>
                    
                    <Pie
                    data={leadData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={100}
                    label>
                        {
                        leadData.map(
                            (item,index)=>(
                            <Cell
                            key={index}/>
                        )
                    )
                    }
                </Pie>
                
                <Tooltip/>
                
            </PieChart>
        </ResponsiveContainer>
    </div>
    
    {/* Technology Chart */}
    <div className="
    bg-white
    p-6
    rounded-xl
    shadow
    transition
    hover:-translate-y-1
    hover:shadow-xl">
        
        <h2 className="
        text-xl
        font-bold
        mb-5
        ">
            Technology Interest
        </h2>
        
        
        <ResponsiveContainer
        width="100%"
        height={300}>
            
            <BarChart
            data={technologyData}>
                
                <XAxis
                dataKey="name"/>
                <YAxis/>
                
                <Tooltip/>
                
                <Bar
                dataKey="students"/>
            </BarChart>
        </ResponsiveContainer>
    </div>
    </div>
</div>
)

}



export default Dashboard;