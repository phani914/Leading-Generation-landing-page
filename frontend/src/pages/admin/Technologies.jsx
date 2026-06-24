import {
useState,
useEffect
} from "react";


const initialTechnologies=[

    {
        id:1,
        name:"Java",
        description:"Enterprise application development"
    },


    {
        id:2,
        name:"React",
        description:"Modern frontend development"
    },


    {
        id:3,
        name:"Python",
        description:"Backend and AI development"
    }

];



function Technologies(){


    const [technologies,setTechnologies]=useState(()=>{


const saved =
localStorage.getItem("technologies");


return saved
?
JSON.parse(saved)
:
initialTechnologies;


});
useEffect(()=>{


localStorage.setItem(

"technologies",

JSON.stringify(technologies)

);


},[technologies]);


    const [showForm,setShowForm]=useState(false);



    const [form,setForm]=useState({

        name:"",
        description:""

    });




    const handleChange=(e)=>{

        setForm({

            ...form,

            [e.target.name]:e.target.value

        });

    };





    const addTechnology=(e)=>{


        e.preventDefault();


        const newTechnology={

            id:Date.now(),

            ...form

        };


        setTechnologies([

            ...technologies,

            newTechnology

        ]);



        setForm({

            name:"",
            description:""

        });



        setShowForm(false);


    };





    const deleteTechnology=(id)=>{


        setTechnologies(

            technologies.filter(
                tech=>tech.id!==id
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

Technology Management

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

Add Technology

</button>


</div>





{
showForm &&

<form

onSubmit={addTechnology}

className="
bg-white
p-6
rounded-xl
shadow
transition
hover:-translate-y-1
hover:shadow-xl
mb-8
space-y-4
"

>


<input

name="name"

placeholder="Technology Name"

value={form.name}

onChange={handleChange}

className="
border
p-3
w-full
rounded
"

required

/>



<textarea

name="description"

placeholder="Description"

value={form.description}

onChange={handleChange}

className="
border
p-3
w-full
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

Save Technology

</button>


</form>

}






<div className="
grid
md:grid-cols-3
gap-6
">


{

technologies.map((tech)=>(


<div

key={tech.id}

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
w-16
h-16
bg-blue-100
rounded-lg
flex
items-center
justify-center
text-3xl
mb-5
">

⚙️

</div>




<h2 className="
text-xl
font-bold
">

{tech.name}

</h2>



<p className="
mt-3
text-gray-600
">

{tech.description}

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

onClick={()=>deleteTechnology(tech.id)}

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


export default Technologies;