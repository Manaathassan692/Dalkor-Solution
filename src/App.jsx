import { Route, Routes} from "react-router-dom"
import Home from "./pages/website/Home"
import RegisterAdmin from "./pages/website/RegisterAdmin"
import SignUp from "./pages/website/SignUp"
import About from "./pages/website/AboutUs"
import Contact from "./pages/website/contactus"
import Learn from "./pages/website/learnMore"
import Services from "./pages/website/SErvices"
import Customer from "./pages/website/Customer"
import Faq from "./pages/website/Faq"
import Premierbank from "./pages/website/Beco"
import Register from "./pages/website/Register"
import SomBank from "./pages/website/Muqdisho"
import Serveicee from "./pages/website/SEr"
import Dahbord from "./pages/website/Dashbord"
import UsersSy from "./pages/system/USERSSY"
import BecoPower from "./pages/system/BecoPower"
import Mugadishu from "./pages/system/Mugadishu"
import NecoSom from "./pages/system/NecoSom"
import Sompower from "./pages/system/SomPower"
import SomPower1 from "./pages/website/Sompower"
import NecoSom1 from "./pages/website/NecoSom"
import Beco from "./pages/website/Beco"
import Neco from "./pages/website/NecoSom"

function App(){
  return <Routes>
        <Route path="/" element={<Home/>} />
        < Route path="/Registration"    element={<RegisterAdmin/>}/>

        <Route path="/sign-up"     element={<SignUp/>}         />
        <Route path="/About"     element={<About/>} />
        <Route path="/Contact"     element={<Contact/>}  />
        <Route path="/ser"  element={<Serveicee/>}/>
        <Route  path="/learmore"  element={<Learn/>}/>
        <Route path="/services"  element={<Services/>}        />
        <Route path="customer"    element={<Customer/>}         />
        <Route   path="/faq"    element={<Faq/>}     />



        <Route    path="/BecoPowering"      element={<Beco/>}/>
        <Route    path="/Sombank"  element={<SomBank/>}    />
        <Route  path="/NecoSom2s"  element={<Neco/>}/>
        <Route  path="/Somp"  element={<SomPower1/>}  />



        <Route   path="/dashboard"  element={<Dahbord/>}      />

        <Route   path="/NecoSom"  element={<NecoSom/>}      />
        <Route  path="Beco" element={<BecoPower/>}/>
        <Route path="/Mugadishu"    element={<Mugadishu/>} />
        <Route   path="/Sompower" element={<Sompower/>}/>
        <Route  path="/USERS" element={<UsersSy/>}              />



        <Route    path="/Neco/prepaid" element={<Register/>}/>
        <Route    path="/beco/prepaid"   element={<Register/>} />
        <Route path="/sombank/regiter" element={<Register/>}       />
        <Route   path="/SomPower/prapid"  element={<Register/>}     />







        

  </Routes>
}
export default App