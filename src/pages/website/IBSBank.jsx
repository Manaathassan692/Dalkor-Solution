import { Link } from "react-router-dom"
function IBSBank(){
    return <>
  
     <div class="bg-white shadow">
    <div class="max-w-6xl mx-auto flex items-center justify-between p-4 ">
        <div class="flex items-center ">
            <img src="" alt="SomPower  Logo" class="h-20" />
        </div>

        <nav class="hidden md:flex space-x-6">
            <a href="#" class="text-gray-700 hover:text-indigo-600 font-semibold">Home</a>
            <a href="#" class="text-gray-700 hover:text-indigo-600 font-semibold">About</a>
            <a href="#" class="text-gray-700 hover:text-indigo-600 font-semibold">Contact Us</a>
            <a href="#" class="text-gray-700 hover:text-indigo-600 font-semibold">Services</a>
        </nav>

        <div>
        <Link to="/IBS/regiter"><button class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-200">Prepaid</button></Link>
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
                        IBS Bank has been at the forefront of financial transformation, setting benchmarks in innovation and service. Established to provide accessible and sustainable financial solutions, we have evolved into a modern institution without losing sight of our foundational values.
                    </p>
                </div>
                <div class="md:w-1/2 mt-6 md:mt-0">
                    <img src="" alt="Legacy of IBS Bank" class="rounded-lg shadow-lg" />
                </div>
            </div>
        </div>

        <div class="bg-white shadow-lg rounded-lg mb-12 p-8">
            <div class="flex flex-col md:flex-row-reverse items-center">
                <div class="md:w-1/2">
                    <h3 class="text-3xl font-bold text-blue-900 mb-4">Our Purpose</h3>
                    <p class="text-lg text-gray-700 leading-relaxed">
                        Driven by our commitment to empower communities, we focus on inclusive banking solutions that align with our clients' diverse needs. From individuals to corporations, IBS Bank tailors financial strategies designed for sustainable growth and long-term success.
                    </p>
                </div>
                <div class="md:w-1/2 mt-6 md:mt-0">
                    <img src="" alt="Purpose of IBS Bank" class="rounded-lg shadow-lg" />
                </div>
            </div>
        </div>

        <div class="bg-white shadow-lg rounded-lg p-8 mb-12">
            <h3 class="text-4xl font-bold text-center text-blue-900 mb-8">Our Key Services</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="p-6 bg-blue-50 rounded-lg text-center">
                    <h4 class="text-xl font-semibold text-blue-800 mb-2">Inclusive Financial Products</h4>
                    <p class="text-gray-700">Designed to meet the diverse needs of individuals, offering secure savings, flexible loans, and advisory services.</p>
                </div>
                <div class="p-6 bg-blue-50 rounded-lg text-center">
                    <h4 class="text-xl font-semibold text-blue-800 mb-2">Corporate Banking Solutions</h4>
                    <p class="text-gray-700">Expert-driven services to help businesses flourish, including trade financing, asset management, and business loans.</p>
                </div>
                <div class="p-6 bg-blue-50 rounded-lg text-center">
                    <h4 class="text-xl font-semibold text-blue-800 mb-2">Ethical Islamic Banking</h4>
                    <p class="text-gray-700">Providing Sharia-compliant banking products that respect Islamic values while offering modern financial conveniences.</p>
                </div>
                <div class="p-6 bg-blue-50 rounded-lg text-center">
                    <h4 class="text-xl font-semibold text-blue-800 mb-2">SME Financing</h4>
                    <p class="text-gray-700">Supporting small and medium-sized enterprises with tailored financial solutions to fuel growth and development.</p>
                </div>
                <div class="p-6 bg-blue-50 rounded-lg text-center">
                    <h4 class="text-xl font-semibold text-blue-800 mb-2">Digital Banking</h4>
                    <p class="text-gray-700">Offering a seamless online banking experience, IBS Bank ensures your financial transactions are secure and accessible 24/7.</p>
                </div>
                <div class="p-6 bg-blue-50 rounded-lg text-center">
                    <h4 class="text-xl font-semibold text-blue-800 mb-2">Wealth Management</h4>
                    <p class="text-gray-700">Advising clients on the best ways to manage, invest, and grow their wealth through trusted investment solutions.</p>
                </div>
            </div>
        </div>

        <div class="text-center">
            <h3 class="text-4xl font-bold text-blue-900 mb-6">Our Commitment to the Community</h3>
            <p class="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                IBS Bank is dedicated to giving back to the communities we serve. Our initiatives focus on education, financial literacy, and supporting local businesses to create a thriving economy for all.
            </p>
            <img src="Z" alt="Community Impact" class="rounded-lg shadow-lg mx-auto" />
        </div>
    </div>
</section>

</>
}
export default IBSBank