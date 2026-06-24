import {
    createContext,
    useContext,
    useState
} from "react";

const AuthContext = createContext();

export function AuthProvider({children}){
    
    const [user,setUser]=useState(()=>{
        const savedUser =
        localStorage.getItem("adminUser");
        return savedUser?
        JSON.parse(savedUser):null;
    });
    
    
    const login=(username,password)=>{
        if(username==="admin"
            &&
            password==="admin123"){
                
                const adminUser={
                    
                    username:"admin",
                    role:"Administrator"
                };
                
                localStorage.setItem(
                    "adminUser",
                    JSON.stringify(adminUser)
                );
                
                setUser(adminUser);
                
                return true;
            }
            
            return false;
    };
        
        
        const logout=()=>{
            localStorage.removeItem(
                "adminUser"
            );
            
            setUser(null);
        };
        
        
        return(
        <AuthContext.Provider
        value={{user,
            login,logout
            }}>
                {children}
            
            </AuthContext.Provider>
        )
}
        
        
        export function useAuth(){
            
            return useContext(AuthContext);
        
        
        }