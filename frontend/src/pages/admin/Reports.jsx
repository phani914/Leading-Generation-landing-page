import {
    useState,
    useEffect
} from "react";


import {
    FaUsers,
    FaChartLine,
    FaGraduationCap
} from "react-icons/fa";


import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";





function Reports(){



const [reportCards,setReportCards]=useState([]);


const [conversionData,setConversionData]=useState([]);





useEffect(()=>{



const leads =

JSON.parse(

localStorage.getItem("leads")

)

||

[];






const converted =

leads.filter(

lead=>lead.status==="Converted"

).length;






const placement =

leads.length>0

?

Math.round(

(converted/leads.length)*100

)

:

0;






setReportCards([


{
title:"Total Applications",
value:leads.length,
icon:<FaUsers/>
},



{
title:"Converted Students",
value:converted,
icon:<FaGraduationCap/>
},



{
title:"Placement Success",
value:`${placement}%`,
icon:<FaChartLine/>
}


]);








const monthData={};



leads.forEach((lead)=>{


const date =

new Date(

lead.id

);



const month =

date.toLocaleString(

"en-US",

{

month:"short"

}

);



if(!monthData[month]){


monthData[month]={

month,

leads:0,

converted:0

};


}



monthData[month].leads++;



if(lead.status==="Converted"){

monthData[month].converted++;

}



});





setConversionData(

Object.values(monthData)

);



},[]);







const downloadReport=()=>{


const report={

summary:reportCards,

conversion:conversionData

};



const blob=new Blob(

[

JSON.stringify(

report,

null,

2

)

],

{

type:"application/json"

}

);



const url=

URL.createObjectURL(blob);



const link=

document.createElement("a");


link.href=url;


link.download="reports.json";


link.click();



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

Reports & Analytics

</h1>




<button

onClick={downloadReport}

className="
bg-blue-600
text-white
px-5
py-3
rounded-lg
hover:bg-blue-700
"

>

Download Report

</button>



</div>







<div className="
grid
md:grid-cols-3
gap-6
mb-10
">



{

reportCards.map((card,index)=>(


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
gap-5
"

>


<div className="
text-4xl
text-blue-600
">

{card.icon}

</div>




<div>


<p className="
text-gray-500
">

{card.title}

</p>



<h2 className="
text-3xl
font-bold
">

{card.value}

</h2>


</div>



</div>


))

}



</div>








<div className="
bg-white
p-6
rounded-xl
shadow
">


<h2 className="
text-xl
font-bold
mb-6
">

Lead Conversion Report

</h2>





<ResponsiveContainer

width="100%"

height={350}

>


<BarChart

data={conversionData}

>


<XAxis

dataKey="month"

/>


<YAxis/>


<Tooltip/>



<Bar

dataKey="leads"

/>



<Bar

dataKey="converted"

/>



</BarChart>



</ResponsiveContainer>



</div>





</div>


)


}



export default Reports;