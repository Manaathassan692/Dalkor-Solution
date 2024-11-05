import { Link } from "react-router-dom"
function SomPower1(){
    return <>
  
     <div class="bg-white shadow">
    <div class="max-w-6xl mx-auto flex items-center justify-between p-4 ">
        <div class="flex items-center ">
            <img src="data:image/png;base64,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" alt="SomPower  Logo" class="h-20" />
        </div>

        <nav class="hidden md:flex space-x-6">
            <a href="#" class="text-gray-700 hover:text-indigo-600 font-semibold">Home</a>
            <a href="#" class="text-gray-700 hover:text-indigo-600 font-semibold">About</a>
            <a href="#" class="text-gray-700 hover:text-indigo-600 font-semibold">Contact Us</a>
            <a href="#" class="text-gray-700 hover:text-indigo-600 font-semibold">Services</a>
        </nav>

        <div>
        <Link to="/SomPower/prapid"><button class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-200">Prepaid</button></Link>
        </div>
    </div>
</div>
<section class="bg-gray-100 py-16">
    <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-5xl font-extrabold text-center text-blue-900 mb-12">About SomPower </h2>

        <div class="bg-white shadow-lg rounded-lg mb-12 p-8">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2">
                    <h3 class="text-3xl font-bold text-blue-900 mb-4">A Legacy of Innovation</h3>
                    <p class="text-lg text-gray-700 leading-relaxed">
                    SoPower Somaliland has been a leader in energy transformation, setting benchmarks in sustainability and service. Established to provide accessible and efficient energy solutions, we have evolved into a modern institution while maintaining our commitment to foundational values.


                    </p>
                </div>
                <div class="md:w-1/2 mt-6 md:mt-0">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZr8zxdfZFVQdBHmKG11-CBkcCigwDIGD1wg&s" alt="Legacy of IBS Bank" class="rounded-lg shadow-lg" />
                </div>
            </div>
        </div>

        <div class="bg-white shadow-lg rounded-lg mb-12 p-8">
            <div class="flex flex-col md:flex-row-reverse items-center">
                <div class="md:w-1/2">
                    <h3 class="text-3xl font-bold text-blue-900 mb-4">Our Purpose</h3>
                    <p class="text-lg text-gray-700 leading-relaxed">
                    Driven by our commitment to empower communities, SoPower Somaliland focuses on inclusive energy solutions that align with our clients' diverse needs. From residential customers to businesses, we tailor our energy strategies to promote sustainable growth and long-term success.


                    </p>
                </div>
                <div class="md:w-1/2 mt-6 md:mt-0">
                    <img src="data:image/jpeg;base64,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" alt="Purpose of IBS Bank" class="rounded-lg shadow-lg" />
                </div>
            </div>
        </div>





        <div class="bg-white shadow-lg rounded-lg p-8 mb-12">
            <h3 class="text-4xl font-bold text-center text-blue-900 mb-8">Our Key Services</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="p-6 bg-blue-50 rounded-lg text-center">
                    <h4 class="text-xl font-semibold text-blue-800 mb-2">        Inclusive Energy Solutions
                    </h4>
                    <p class="text-gray-700">Designed to meet the diverse needs of individuals, offering secure energy services, flexible payment plans, and advisory services.
                    </p>
                </div>
                <div class="p-6 bg-blue-50 rounded-lg text-center">
                    <h4 class="text-xl font-semibold text-blue-800 mb-2">Corporate Energy Solutions
                    </h4>
                    <p class="text-gray-700">Expert-driven services to help businesses thrive, including energy financing, asset management, and business energy solutions.
                    </p>
                </div>
                <div class="p-6 bg-blue-50 rounded-lg text-center">
                    <h4 class="text-xl font-semibold text-blue-800 mb-2">Sustainable Energy Practices
                    </h4>
                    <p class="text-gray-700">Providing environmentally-friendly energy products that align with sustainable practices while offering modern conveniences.
                    </p>
                </div>
                <div class="p-6 bg-blue-50 rounded-lg text-center">
                    <h4 class="text-xl font-semibold text-blue-800 mb-2">SME Energy Financing
                    </h4>
                    <p class="text-gray-700">Supporting small and medium-sized enterprises with tailored energy solutions to fuel growth and development.
                    </p>
                </div>
                <div class="p-6 bg-blue-50 rounded-lg text-center">
                    <h4 class="text-xl font-semibold text-blue-800 mb-2">Digital Energy Management
                    </h4>
                    <p class="text-gray-700">Offering a seamless online energy management experience, SoPower Somaliland ensures your energy consumption and transactions are secure and accessible 24/7.
                    </p>
                </div>
                <div class="p-6 bg-blue-50 rounded-lg text-center">
                    <h4 class="text-xl font-semibold text-blue-800 mb-2">Wealth of Energy Solutions
</h4>
                    <p class="text-gray-700">Advising clients on the best ways to manage, invest in, and grow their energy assets through trusted sustainable solutions.
                    </p>
                </div>
            </div>
        </div>

        <div class="text-center">
            <h3 class="text-4xl font-bold text-blue-900 mb-6">Our Commitment to the Community</h3>
            <p class="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            SoPower Somaliland is dedicated to giving back to the communities we serve. Our initiatives focus on education, energy literacy, and supporting local businesses to create a thriving economy for all.


            </p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCacbEnlhb03A_v3rGlOoDSsNJIgKnwBzSgA&s" alt="Community Impact" class="rounded-lg shadow-lg mx-auto" />
        </div>
    </div>
</section>

</>
}
export default SomPower1