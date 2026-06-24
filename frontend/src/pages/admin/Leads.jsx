import {
useState,
useEffect
} from "react";

const defaultLeads=[

    {
        id:1,
        name:"Rahul Sharma",
        email:"rahul@gmail.com",
        phone:"9876543210",
        technology:"Java Full Stack",
        status:"New"
    },


    {
        id:2,
        name:"Priya Kumar",
        email:"priya@gmail.com",
        phone:"8765432109",
        technology:"React",
        status:"Contacted"
    },


    {
        id:3,
        name:"Arjun Patel",
        email:"arjun@gmail.com",
        phone:"7654321098",
        technology:"Python",
        status:"Converted"
    }

];



function Leads(){


    const [leads,setLeads]=useState(()=>{


const saved =
localStorage.getItem("leads");


return saved
?
JSON.parse(saved)
:
defaultLeads;


});

const [search,setSearch]=useState("");
const[selectedLead,setSelectedLead]=useState(null);

useEffect(()=>{


localStorage.setItem(

"leads",

JSON.stringify(leads)

);

},[leads]);


    const updateStatus=(id,status)=>{


        setLeads(

            leads.map((lead)=>

                lead.id===id
                ?
                {
                    ...lead,
                    status
                }
                :
                lead

            )

        );


    };




    const deleteLead=(id)=>{


        setLeads(

            leads.filter(
                lead=>lead.id!==id
            )

        );


    };

    const statusStyle=(status)=>{
        if(status==="New")
            return "bg-blue-100 text-blue-600";
        if(status==="Contacted")
            return "bg-yellow-100 text-yellow-600";
        if(status==="Converted")
            return "bg-green-100 text-green-600";

        return "bg-red-100 text-red-600";
    };


return(


<div>

<div className="
flex
justify-between
item-center
mb-8">

<h1 className="
text-3xl
font-bold
mb-8
">

Lead Management

</h1>
</div>


{/* Search */}


<input

placeholder="Search lead..."

value={search}

onChange={
e=>setSearch(e.target.value)
}

className="
border
p-3
rounded-lg
w-full
md:w-96
mb-6"

/>





<div className="
bg-white
rounded-xl
shadow
overflow-x-auto
">


<table className="
w-full
">


<thead className="
bg-slate-100
">


<tr>

<th className="p-4 text-left">
Name
</th>


<th className="p-4 text-left">
Email
</th>


<th className="p-4 text-left">
Technology
</th>


<th className="p-4 text-left">
Status
</th>


<th className="p-4 text-left">
Action
</th>


</tr>


</thead>



<tbody>


{

leads

.filter((lead)=>

lead.name
.toLowerCase()
.includes(
search.toLowerCase()
)

)

.map((lead)=>(


<tr
key={lead.id}
className="border-t"
>


<td className="p-4">

{lead.name}

</td>



<td className="p-4">

{lead.email}

</td>



<td className="p-4">

{lead.technology}

</td>



<td className="p-4">


<select

value={lead.status}

onChange={
e=>
updateStatus(
lead.id,
e.target.value
)
}

className={`
border
p-2
rounded
${statusStyle(lead.status)}
`}

>

<option>
New
</option>


<option>
Contacted
</option>


<option>
Converted
</option>


<option>
Rejected
</option>


</select>


</td>




<td className="p-4">


<button

onClick={()=>
deleteLead(lead.id)
}

className="
bg-red-500
text-white
px-4
py-2
rounded
"

>

Delete

</button>


</td>


</tr>


))

}



</tbody>


</table>


</div>



</div>


)

}


export default Leads;