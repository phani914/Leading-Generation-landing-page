import {
useState,
useEffect
} from "react";




const initialProjects=[

    {
        id:1,
        title:"Banking System",
        description:"Complete banking application with transactions.",
        technology:"Java, Spring Boot",
        status:"Active"
    },


    {
        id:2,
        title:"E-Commerce Platform",
        description:"Online shopping application.",
        technology:"React, AWS",
        status:"Active"
    }


];



function Projects(){


    const [projects,setProjects]=useState(()=>{

    const saved =
    localStorage.getItem("projects");


    return saved
    ?
    JSON.parse(saved)
    :
    initialProjects;

});

useEffect(()=>{


    localStorage.setItem(
        "projects",
        JSON.stringify(projects)
    );


},[projects]);


    const [showForm,setShowForm]=useState(false);


    const [form,setForm]=useState({

        title:"",
        description:"",
        technology:""

    });




    const handleChange=(e)=>{

        setForm({

            ...form,

            [e.target.name]:e.target.value

        });

    };




    const addProject=(e)=>{

        e.preventDefault();


        const newProject={

            id:Date.now(),

            ...form,

            status:"Active"

        };


        setProjects([

            ...projects,

            newProject

        ]);



        setForm({

            title:"",
            description:"",
            technology:""

        });


        setShowForm(false);


    };





    const deleteProject=(id)=>{


        setProjects(

            projects.filter(
                project=>project.id!==id
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

Project Management

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

Add Project

</button>


</div>





{
showForm &&

<form

onSubmit={addProject}

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

name="title"

placeholder="Project Title"

value={form.title}

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

placeholder="Project Description"

value={form.description}

onChange={handleChange}

className="
border
p-3
w-full
rounded
"

/>



<input

name="technology"

placeholder="Technology Stack"

value={form.technology}

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
py-2
rounded
"

>

Save Project

</button>



</form>

}





<div className="
grid
md:grid-cols-2
gap-6
">


{

projects.map((project)=>(


<div

key={project.id}

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
h-32
bg-blue-100
rounded-lg
flex
items-center
justify-center
text-5xl
mb-5
">

💻

</div>



<h2 className="
text-xl
font-bold
">

{project.title}

</h2>



<p className="
mt-2
text-gray-600
">

{project.description}

</p>



<p className="
mt-3
text-blue-600
font-semibold
">

{project.technology}

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

onClick={()=>
deleteProject(project.id)
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


</div>



</div>


))

}


</div>


</div>

)

}


export default Projects;