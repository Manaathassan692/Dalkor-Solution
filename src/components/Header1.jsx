import { Link } from "react-router-dom"

function Header1(){
    return  <>
    <div className="pt-3   flex   justify-center md:justify-center md:pt-5 ">
        
                <h1 className=" font-bold text-3xl  md:justify-center mt-4">Dalkor <span className="text-blue-700  font-semibold ">Solution</span></h1> 

                    <div className="hidden md:flex">
                <ul className="flex gap-16 pl-[180px] pt-5 ">

                    <li className="text-2xl  hover:text-blue-700  font-semibold">Home</li>
                   <Link to="/ser"><li  className="text-2xl  hover:text-blue-700 font-semibold">services</li></Link> 
                   <Link to="/Contact"><li  className="text-2xl  hover:text-blue-700 font-semibold"> Contact</li></Link>
                    <div  className="ml-28">
                    <Link to="/sign-up"><button  className="border-2 border-blue-700 rounded-lg  h-9  w-[140px] bg-blue-700 text-white font-semibold hover:bg-black hover:border-black">Sign Up</button></Link> 

                <Link to="/Registration"><button className="border-2 border-black rounded-lg  h-9  w-[140px] bg-black text-white font-semibold ml-8  "> <i class="fa-solid fa-user-tie text-2xl mr-4"></i>Admin</button> </Link>  
                    </div>
                </ul>
                    </div>


    </div>
    </>
}
export default Header1