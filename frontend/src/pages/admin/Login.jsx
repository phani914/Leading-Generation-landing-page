import {
useState
} from "react";


import {
useNavigate
} from "react-router-dom";


import {
useAuth
} from "../../context/AuthContext";



function Login(){


const [username,setUsername]=useState("");

const [password,setPassword]=useState("");

const [error,setError]=useState("");



const {
login
}=useAuth();



const navigate=useNavigate();




const handleSubmit=(e)=>{

e.preventDefault();



const success=login(
username,
password
);



if(success){

navigate("/admin/dashboard");

}
else{

setError(
"Invalid credentials"
);

}


}




return(

<div className="
min-h-screen
flex
items-center
justify-center
bg-slate-100
">


<form

onSubmit={handleSubmit}

className="
bg-white
p-8
rounded-xl
shadow-lg
w-96
"


>


<h1 className="
text-3xl
font-bold
mb-6
text-center
">

Admin Login

</h1>


{
error &&

<p className="
text-red-500
mb-4
">

{error}

</p>

}



<input

className="
border
p-3
w-full
mb-4
rounded
"

placeholder="Username"

value={username}

onChange={
e=>setUsername(e.target.value)
}

/>



<input

className="
border
p-3
w-full
mb-6
rounded
"

placeholder="Password"

type="password"

value={password}

onChange={
e=>setPassword(e.target.value)
}

/>



<button

className="
bg-blue-600
text-white
w-full
py-3
rounded
"

>

Login

</button>



</form>


</div>

)


}


export default Login;