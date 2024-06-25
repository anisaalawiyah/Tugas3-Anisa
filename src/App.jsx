import Footer from "./component/Footer";
import Header from "./component/Header";
import { Outlet } from "react-router-dom";

export default function App(){
  return(
    
     <div className="min-h-screen flex flex-col">
     <div className="flex-grow">
     <Header/>
     <Outlet/>
     </div>
     <Footer />
   </div>
  )
}