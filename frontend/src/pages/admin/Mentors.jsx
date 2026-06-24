import {
useState,
useEffect
} from "react";


const initialMentors=[

    {
        id:1,
        name:"John Smith",
        role:"Senior Java Architect",
        experience:"12+ Years",
        specialization:"Java, Spring Boot, Cloud"
    },


    {
        id:2,
        name:"Sarah Williams",
        role:"Full Stack Developer",
        experience:"8+ Years",
        specialization:"React, Node.js, Angular"
    }

];


function Mentors(){

    const [mentors,setMentors]=useState(()=>{

const saved =
localStorage.getItem("mentors");


return saved
?
JSON.parse(saved)
:
initialMentors;


});
useEffect(()=>{

localStorage.setItem(
"mentors",
JSON.stringify(mentors)
);


},[mentors]);


    const [showForm,setShowForm]=useState(false);

    const [form,setForm]=useState({

        name:"",
        role:"",
        experience:"",
        specialization:""

    });


    const handleChange=(e)=>{

        setForm({

            ...form,

            [e.target.name]:e.target.value

        });

    };


    const addMentor=(e)=>{

        e.preventDefault();

        const newMentor={

            id:Date.now(),

            ...form

        };


        setMentors([

            ...mentors,

            newMentor

        ]);


        setForm({

            name:"",
            role:"",
            experience:"",
            specialization:""

        });


        setShowForm(false);


    };

    const deleteMentor=(id)=>{


        setMentors(

            mentors.filter(
                mentor=>mentor.id!==id
            )

        );

    };


return(


<div>


<div className="
flex
justify-between
items-center
mb-8
">


<h1 className="
text-3xl
font-bold
">

Mentor Management

</h1>



<button

onClick={()=>setShowForm(true)}

className="
bg-blue-600
text-white
px-5
py-3
rounded-lg
"

>

Add Mentor

</button>


</div>






{
showForm &&

<form

onSubmit={addMentor}

className="
bg-white
p-6
rounded-xl
shadow
transition
hover:-translate-y-1
hover:shadow-xl
mb-8
grid
gap-4
"

>


<input

name="name"

placeholder="Mentor Name"

value={form.name}

onChange={handleChange}

className="
border
p-3
rounded
"

/>



<input

name="role"

placeholder="Role"

value={form.role}

onChange={handleChange}

className="
border
p-3
rounded
"

/>



<input

name="experience"

placeholder="Experience"

value={form.experience}

onChange={handleChange}

className="
border
p-3
rounded
"

/>



<input

name="specialization"

placeholder="Specialization"

value={form.specialization}

onChange={handleChange}

className="
border
p-3
rounded
"

/>



<button

className="
bg-green-600
text-white
px-6
py-3
rounded
"

>

Save Mentor

</button>


</form>

}






<div className="
grid
md:grid-cols-2
gap-6
">


{

mentors.map((mentor)=>(


<div

key={mentor.id}

className="
bg-white
p-6
rounded-xl
shadow
transition
hover:-translate-y-1
hover:shadow-xl
"


>


<div className="
w-24
h-24
rounded-full
bg-blue-100
flex
items-center
justify-center
text-4xl
mb-5
">

👨‍🏫

</div>




<h2 className="
text-xl
font-bold
">

{mentor.name}

</h2>



<p className="
text-blue-600
font-semibold
">

{mentor.role}

</p>



<p className="
mt-2
text-gray-600
">

{mentor.experience}

</p>



<p className="
mt-2
text-gray-500
">

{mentor.specialization}

</p>



<div className="
mt-5
flex
gap-3
">


<button

className="
border
px-4
py-2
rounded
"

>

Edit

</button>



<button

onClick={()=>deleteMentor(mentor.id)}

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


</div>



</div>


))

}


</div>



</div>


)


}


export default Mentors;