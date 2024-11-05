// function Part3(){
//     return <div>
        

//     </div>
// }
// export default Part3


// import React from 'react';
import React from 'react';

class Part3 extends React.Component {
  render() {
    return (
      <div className="max-w-6xl mx-auto p-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-8"> Explore Our Offerings</h2>
        
        {/* Grid for the content boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img
              className="rounded-t-lg w-full h-48 object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZm3717Qiifx4SGjU4JnUxMotgipFPgS5Ie8TZZzPB4cR4O_Vg8-PUqf6Fl9K6B_djvFA&usqp=CAU"
              alt="premier bank somalia"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2"> Beco Powering  </h3>
              <p className="text-gray-600 mb-4">
                Discover the wide range of services we offer to help you manage your finances effectively.
              </p>
              <a
                href="/BecoPowering"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img
              className="rounded-t-lg w-full h-48 object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLdSqZEp47sWINTpK96-66vS7gToTyX4t0Jg&s"
              alt="Customer Testimonials"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2">Mugadish Power </h3>
              <p className="text-gray-600 mb-4">
              Discover the wide range of services we offer to help you manage your finances effectively..
              </p>
              <a
                href="/Sombank"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img
              className="rounded-t-lg w-full h-48 object-cover"
              src="data:image/jpeg;base64,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"
              alt="FAQs"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2"> NecoSom</h3>
              <p className="text-gray-600 mb-4">
              Discover the wide range of services we offer to help you manage your finances effectively.
              </p>
              <a
                href="/NecoSom2s"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img
              className="rounded-t-lg w-full h-48 object-cover"
              src="https://hadhwanaagnews.ca/uploads/article/photo/IMG_0E54E5-C0E6A5-1514C5-C9CCFF-E5484D-A31335.jpg"
              alt="Contact Us"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2">SomPower</h3>
              <p className="text-gray-600 mb-4">
              Discover the wide range of services we offer to help you manage your finances effectively.
              </p>
              <a
                href="/Somp"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Part3
