import { Link } from "react-router-dom"

function AmalBank(){
    return<>
    <div class="bg-white shadow">
    <div class="max-w-6xl mx-auto flex items-center justify-between p-4 ">
        <div class="flex items-center ">
            <img src="" alt="NecoSom power Logo" class="h-20" />
        </div>

        <nav class="hidden md:flex space-x-6">
            <a href="#" class="text-gray-700 hover:text-indigo-600 font-semibold">Home</a>
            <a href="#" class="text-gray-700 hover:text-indigo-600 font-semibold">About</a>
            <a href="#" class="text-gray-700 hover:text-indigo-600 font-semibold">Contact Us</a>
            <a href="#" class="text-gray-700 hover:text-indigo-600 font-semibold">Services</a>
        </nav>

        <div>
            <Link to="/amal/regiter"><button class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-200">Prepaid</button></Link>
        </div>
    </div>
</div>
<section class="bg-gray-50 py-16">
    <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-5xl font-bold text-center text-gray-900 mb-12">Welcome to  NecoSom </h2>

        <div class="flex flex-col lg:flex-row items-center justify-between mb-12">
            <div class="lg:w-1/2 mb-8 lg:mb-0">
                <img src="" alt="Our Story" class="rounded-lg shadow-lg" />
            </div>
            <div class="lg:w-1/2 lg:pl-8">
                <h3 class="text-3xl font-semibold text-gray-800 mb-6">Our Story</h3>
                <p class="text-lg text-gray-700 leading-relaxed">
                    Founded with a vision of financial inclusion, Amal Bank has been a cornerstone in empowering individuals and businesses across the region. We are committed to providing innovative banking services that adapt to the evolving needs of our community.
                </p>
            </div>
        </div>

        <div class="flex flex-col lg:flex-row items-center justify-between mb-12">
            <div class="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
                <h3 class="text-3xl font-semibold text-gray-800 mb-6">Our Commitment</h3>
                <p class="text-lg text-gray-700 leading-relaxed">
                    At Amal Bank, our focus is on creating seamless banking experiences through innovation, integrity, and customer-first services. Whether it's personal banking or business solutions, we ensure a customer-centered approach in every interaction.
                </p>
            </div>
            <div class="lg:w-1/2">
                <img src="" alt="Our Commitment" class="rounded-lg shadow-lg" />
            </div>
        </div>

        <h3 class="text-4xl font-bold text-center text-gray-800 mb-8">Our Services</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                <h4 class="text-xl font-semibold text-gray-800 mb-4">Personal Banking</h4>
                <p class="text-gray-600">Customized financial solutions to meet your personal banking needs.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                <h4 class="text-xl font-semibold text-gray-800 mb-4">Business Solutions</h4>
                <p class="text-gray-600">Supporting your business growth with loans, advisory, and more.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                <h4 class="text-xl font-semibold text-gray-800 mb-4">Investments</h4>
                <p class="text-gray-600">Secure your future with expert-led investment opportunities.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                <h4 class="text-xl font-semibold text-gray-800 mb-4">Digital Banking</h4>
                <p class="text-gray-600">Convenient, secure, and flexible digital banking services.</p>
            </div>
        </div>

        <div class="text-center">
            <img src="" alt="Community Impact" class="rounded-lg shadow-lg mx-auto" />
        </div>
    </div>
</section>


</>
}
export default AmalBank
