import {BrowserRouter,Routes,Route} from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/public/Home";
import ThankYou from "./pages/public/ThankYou";


import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import Leads from "./pages/admin/Leads";
import Projects from "./pages/admin/Projects";
import Mentors from "./pages/admin/Mentors";
import Technologies from "./pages/admin/Technologies";
import Reports from "./pages/admin/Reports";



import ProtectedRoute from "./routes/ProtectedRoute";
import AdminLayout from "./layouts/AdminLayout";

function App(){
  return(
  <BrowserRouter>
  
  <Routes>
    <Route path="/" element={
      <PublicLayout>
        <Home/>
      </PublicLayout>}
    />
    
    <Route path="/thank-you" element={
      <ThankYou/>
    }
    />


    <Route path="/admin/login" element={<Login/>}/>


    <Route path="/admin" element={
      <ProtectedRoute>
        <AdminLayout/>
        </ProtectedRoute>
      }
    >
      
    <Route path="dashboard" element={<Dashboard/>}/>

    <Route path="leads" element={<Leads/>}/>

    <Route path="projects" element={<Projects/>}/>

    <Route path="mentors" element={<Mentors/>}/>

    <Route path="technologies" element={<Technologies/>}/>

    <Route path="reports" element={<Reports/>}/>
    
    </Route>
    
    </Routes>
    </BrowserRouter>
    
  )
}


export default App;