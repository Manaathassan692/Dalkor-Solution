function Header(){
    return  <>
    {/* <div className="bg-blue-700 h-10">
    <h1 className=" text-white text-center font-semibold pt-1">Get the latest information from us about  
    <button className="bg-blue-500 border-2  border-blue-500  w-[120px] mt-1 hover:to-blue-950 rounded-lg text-center text-white ml-6 hover:bg -blue-700 hover:border-black hover:bg-black">Learn More</button>
    </h1>
</div> */}

{ <div className="flex  justify-between  hidden md:flex">

<div className="pl-2 pt-5" >
    <ul className="flex gap-5">
        <li className="hover:text-blue-700"><i class="fa-solid fa-phone"></i> + 2526 18641201 </li>
        <li className="hover:text-blue-700">    < a href="https://mail.google.com/mail/u/0/#inbox
">  <i class="fa-solid fa-envelope"></i> DalkorSolution@gmail.com</a>
                                             </li>
        <li className="hover:text-blue-700"><i class="fa-solid fa-location-dot"></i>Wartnabdda, Mogadishu ,somalia
        </li>
    </ul> 
    </div>

    <div className="pr-8 pt-5"> 
        <ul className="flex gap-5" >
            <li className="text-2xl hover:text-blue-700"> < a href="https://www.facebook.com/"       >   <i class="fa-brands fa-facebook"></i></a>        </li>
            <li className="text-2xl hover:text-blue-700">  < a href="https://www.instagram.com/manaat_hassan/"><i class="fa-brands fa-instagram"></i> </a></li>
            {/* <li className="text-2xl hover:text-blue-700"><i class="fa-brands fa-youtube"></i></li> */}
            <li className="text-2xl hover:text-blue-700"><i class="fa-brands fa-twitter"></i></li>
            {/* <li className="text-2xl hover:text-blue-700">  <a href="https://github.com/Manaathassan692">  <i class="fa-brands fa-github"></i></a> </li> */}
        </ul>

    </div>
    
   
 
</div> } 
 {/* <hr class=" border-gray-300 my-4 pt-4  border-shadow-md" /> */}
 <hr class="border-t-2 border-gray-300 my-4 shadow-sm relative before:absolute before:inset-0 before:top-[2px] before:rounded-full before:h-[2px] before:bg-black/10 before:content-[''] hidden md:flex" />








    </>

        



   
}
export default Header 