import Services from "./SErvices"
import { Link } from "react-router-dom"
function Beco(){
    return <>

<div class="bg-white shadow">
    <div class="max-w-6xl mx-auto flex items-center justify-between p-4 ">
        <div class="flex items-center ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmA3D0KNVf92rw9gQbX5HwwSaSbvUIEMtbg0KVfmo9_yyDvzrBsda0BOCXss88_yo-V90&usqp=CAU" alt="Premier Bank Logo" class="h-20" />
        </div>

        <nav class="hidden md:flex space-x-6">
            <a href="#" class="text-gray-700 hover:text-indigo-600 font-semibold">Home</a>
            <a href="#" class="text-gray-700 hover:text-indigo-600 font-semibold">About</a>
            <a href="#" class="text-gray-700 hover:text-indigo-600 font-semibold">Contact Us</a>
            <a href="#" class="text-gray-700 hover:text-indigo-600 font-semibold">Services</a>
        </nav>

        <div>
        <Link to="/beco/prepaid"><button class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-200">Prepaid</button></Link>
        </div>
    </div>
</div>


<section class="bg-gray-50 py-12 ">
    <div class="max-w-6xl mx-auto ">
        <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">About BECO Powering Somalia
        </h2>

        <div class="flex flex-col md:flex-row items-center justify-between mb-14">
            <div class="md:w-1/2 mb-6 md:mb-0">
                <h3 class="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h3>
                <p class="text-lg text-gray-700">
                BECO is a leading service provider dedicated to delivering innovative energy solutions. Established with a commitment to customer satisfaction, we strive to offer personalized services tailored to meet the unique needs of our clients. Our mission is to empower individuals and businesses in Somalia to achieve their energy goals.


                </p>
            </div>
            <div class="md:w-1/2 ml-28">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQr7DJObktnurWHT5IuhhmmV_pcmYHK1UP_A&s" alt="Premier Bank" class="rounded-lg shadow-lg object-cover h-full" />
            </div>
        </div>

        <div class="flex flex-col md:flex-row items-center justify-between mb-10">
            <div class="md:w-1/2 mb-6 md:mb-0">
                <h3 class="text-2xl font-semibold text-gray-800 mb-4">Our Services</h3>
                <p class="text-lg text-gray-700">
                We offer a wide range of energy products and services, including prepaid and postpaid electricity plans, smart meter solutions, and energy management tools. Our team of experts is here to guide you through every step of your energy journey, ensuring you have the resources you need to succeed.
                </p>
            </div>
            <div class="md:w-1/2 ml-24">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrXl79dJ88t15TtPFvVGx00nzxEFPWUg_RNFXkwTMMVjFqUaaZuTPikIxa1yze_d4BynA&usqp=CAU" alt="Our Services" class="rounded-lg shadow-lg object-cover h-full" />
            </div>
        </div>

        <h3 class="text-3xl font-bold text-center text-gray-800 mb-4">Why Choose Us?</h3>
        <ul class="list-disc list-inside text-gray-600 mb-8">
            <li>Personalized Energy Solutions</li>
            <li>Competitive Rates and Plans</li>
            <li>Exceptional Customer Support </li>
            <li>Robust Mobile and Online Management Features</li>
            <li>Community Engagement and Support
            </li>
        </ul>




        <div class="flex justify-center">
            <img src="https://pbs.twimg.com/media/F4nyOPmWUAEAyXf?format=jpg&name=4096x4096" class="rounded-lg shadow-lg object-cover h-full" />
        </div>
    </div>
</section>

<Services/>



</>

}
export default Beco
