// function Customer(){
//     return 
// }
// export default Customer
// import React from "react";

import Header1 from "../../components/Header1";

function Customer() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      feedback:
        "Dalkor Solution has completely transformed how I manage my electricity services. Their mobile application is incredibly easy to use, and the customer support team is always helpful. I love being able to recharge my electricity directly from my phone, and the notifications keep me informed about my balance. It’s a game-changer for managing my electricity needs!.",
      image:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fHdvbWFuJTIwc21pbGV8ZW58MHx8fHwxNjU2MzU4MDAz&ixlib=rb-1.2.1&q=80&w=1080",
      rating: 5,
      title: "Small Business Owner",
    },
    {
      name: "Michael Adams",
      feedback:
        "Dalkor Solution has revolutionized the way I handle my electricity payments. The app is user-friendly and allows me to recharge my electricity with just a few taps. I appreciate the flexibility of choosing between prepaid and postpaid plans. Plus, the real-time balance notifications ensure I never run out of electricity unexpectedly. The customer service is also top-notch, always ready to assist with any questions I have. I highly recommend Dalkor Solution to anyone looking for a convenient and reliable way to manage their electricity services!.",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDN8fG1hbiUyMHNtaWxpbmd8ZW58MHx8fHwxNjU2MzU4MDA3&ixlib=rb-1.2.1&q=80&w=1080",
      rating: 4,
      title: "Tech Enthusiast",
    },
    {
      name: "Emily Clark",
      feedback:
        "Dalkor Solution has made managing my electricity so easy! The app is straightforward, and I love the instant recharge feature. Plus, the customer support is always quick to help. Highly recommended!.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDZ8fHdvbWFuJTIwZHJpbmtpbmd8ZW58MHx8fHwxNjU2MzU4MDA1&ixlib=rb-1.2.1&q=80&w=1080",
      rating: 5,
      title: "Frequent Traveler",
    },
  ];

  return <>
  <Header1/>
 
    <section className="bg-gray-100 py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Customer Testimonials</h2>
        <p className="text-lg text-gray-600 mb-12">
        Hear what our satisfied users have to say about Dalkor Solution. We strive to provide the best experience in managing electricity services for everyone.

</p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-left"
            >
              {/* Image */}
              <div className="flex items-center mb-4">
                <img
                  className="w-16 h-16 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600">{testimonial.title}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {Array(testimonial.rating)
                  .fill()
                  .map((_, i) => (
                    <i key={i} className="fa-solid fa-star text-yellow-500"></i>
                  ))}
              </div>

              {/* Feedback */}
              <p className="text-gray-600 italic">{`"${testimonial.feedback}"`}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
}

export default Customer
