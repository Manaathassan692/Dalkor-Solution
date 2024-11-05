import { Link } from "react-router-dom"

function Neco(){
    return<>
    <div class="bg-white shadow">
    <div class="max-w-6xl mx-auto flex items-center justify-between p-4 ">
        <div class="flex items-center ">
            <img src="data:image/jpeg;base64,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" alt="NecoSom power Logo" class="h-20" />
        </div>

        <nav class="hidden md:flex space-x-6">
            <a href="#" class="text-gray-700 hover:text-indigo-600 font-semibold">Home</a>
            <a href="#" class="text-gray-700 hover:text-indigo-600 font-semibold">About</a>
            <a href="#" class="text-gray-700 hover:text-indigo-600 font-semibold">Contact Us</a>
            <a href="#" class="text-gray-700 hover:text-indigo-600 font-semibold">Services</a>
        </nav>

        <div>
            <Link to="/Neco/prepaid"><button class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-200">Prepaid</button></Link>
        </div>
    </div>
</div>
<section class="bg-gray-50 py-16">
    <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-5xl font-bold text-center text-gray-900 mb-12">Welcome to  NecoSom </h2>

        <div class="flex flex-col lg:flex-row items-center justify-between mb-12">
            <div class="lg:w-1/2 mb-8 lg:mb-0">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEEgYJwfDu53vNqoNBifD3XIV-_WPCODCBb-mbisMD-l6cZqv-zVUmEtSbMYXg8buD5sc&usqp=CAU" alt="Our Story" class="rounded-lg shadow-lg" />
            </div>
            <div class="lg:w-1/2 lg:pl-8">
                <h3 class="text-3xl font-semibold text-gray-800 mb-6">Our Story</h3>
                <p class="text-lg text-gray-700 leading-relaxed">
                NecoSom Power: Founded with a vision of financial inclusion, NecoSom Power has been a cornerstone in empowering individuals and businesses across the region. We are committed to providing innovative banking services that adapt to the evolving needs of our community.
                </p>
            </div>
        </div>

        <div class="flex flex-col lg:flex-row items-center justify-between mb-12">
            <div class="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
                <h3 class="text-3xl font-semibold text-gray-800 mb-6">Our Commitment</h3>
                <p class="text-lg text-gray-700 leading-relaxed">
                NecoSom Power: At NecoSom Power, our focus is on creating seamless banking experiences through innovation, integrity, and customer-first services. Whether it's personal banking or business solutions, we ensure a customer-centered approach in every interaction.
                </p>
            </div>
            <div class="lg:w-1/2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Mnz8tL6Qz67VIg28ZyyO7yT8c5Z7uvqbBfF7dqTLf-PVXNKdEXC_52GrG7E9Tqg9xK4&usqp=CAU" alt="Our Commitment" class="rounded-lg shadow-lg" />
            </div>
        </div>



        <h3 class="text-4xl font-bold text-center text-gray-800 mb-8">Our Services</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                <h4 class="text-xl font-semibold text-gray-800 mb-4">        Prepaid Electricity Management
                </h4>
                <p class="text-gray-600">Customized solutions to manage your prepaid electricity needs seamlessly.
                </p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                <h4 class="text-xl font-semibold text-gray-800 mb-4">User Empowerment
                </h4>
                <p class="text-gray-600">Empowering users with tools and insights for better electricity management and monitoring.
                </p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                <h4 class="text-xl font-semibold text-gray-800 mb-4">Affordable Services
                </h4>
                <p class="text-gray-600">Supporting your household and business energy needs with flexible and affordable electricity plans.
                </p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                <h4 class="text-xl font-semibold text-gray-800 mb-4">Real-Time Monitoring
                </h4>
                <p class="text-gray-600">Convenient, secure, and flexible monitoring services for tracking energy usage and payments.
                </p>
            </div>
        </div>

        <div class="text-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK6GbhromuD94fuw1zq3DteaXY2sagWvWa-Q&s" alt="Community Impact" class="rounded-lg shadow-lg mx-auto" />
        </div>
    </div>
</section>


</>
}
export default Neco
