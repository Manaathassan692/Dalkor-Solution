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
import Premierbank from "./pages/website/premierbank"
import Register from "./pages/website/Register"
import SomBank from "./pages/website/SomBank"
import AmalBank from "./pages/website/AmalBank"
import IBSBank from "./pages/website/IBSBank"
import Serveicee from "./pages/website/SEr"
import Dahbord from "./pages/website/Dashbord"
import PrimerBanksy from "./pages/system/primerBanksy"
import SomBankSy from "./pages/system/SomBankSY"
import AmalBankSy from "./pages/system/AmalBankSY"
import UsersSy from "./pages/system/USERSSY"
import IBSBankSY from "./pages/system/IBSBankSY"

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



        <Route    path="Premier"      element={<Premierbank/>}/>
        <Route    path="/Sombank"  element={<SomBank/>}    />
        <Route  path="/Amal"  element={<AmalBank/>}/>
        <Route  path="IBS"  element={<IBSBank/>}  />



        <Route   path="/dashboard"  element={<Dahbord/>}      />

        <Route   path="/primerBanksy"  element={<PrimerBanksy/>}      />
        <Route  path="AmalBankSy" element={<AmalBankSy/>}/>
        <Route path="/IBSSy"    element={<IBSBankSY/>} />
        <Route   path="/SomBank/Sy" element={<SomBankSy/>}/>
        <Route  path="/USERS" element={<UsersSy/>}              />



        <Route    path="/amal/regiter" element={<Register/>}/>
        <Route    path="premier/regiter"   element={<Register/>} />
        <Route path="/sombank/regiter" element={<Register/>}       />
        <Route   path="/IBS/regiter"  element={<Register/>}     />







        

  </Routes>
}
export default App