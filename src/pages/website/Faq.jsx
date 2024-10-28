// function Faq(){
//     return <div>
//         <h1>hi</h1>
//     </div>
// }
// export default Faq
import  { useState } from "react";
import Header1 from "../../components/Header1";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: ": What is Dalkor Solution?",
      answer:
        "Dalkor Solution is a mobile application designed to simplify electricity management. It allows users to recharge their electricity balance, choose between prepaid and postpaid plans, and receive real-time notifications about their usage.",
      image: "https://i.imgur.com/oIjArxS.jpg",
    },
    {
      question: "How do I create an account with Dalkor Solution?",
      answer:
        "To create an account, download the Dalkor Solution app from your app store, fill out the registration form with your details, and select your district. You’ll receive a confirmation email to activate your account.",
      image: "https://i.imgur.com/7nqpe8k.jpg",
    },
    {
      question: "How can I recharge my electricity using the app?",
      answer:
        " You can recharge your electricity by logging into the app, selecting the recharge option, entering the amount, and confirming your payment method. Your balance will update instantly.",
      image: "https://i.imgur.com/9NOsxo2.jpg",
    },
    {
      question: "What should I do if I have issues with my recharge?",
      answer:
        "If you experience any issues, please contact our customer support through the app or via our website. Our team is available 24/7 to assist you.",
      image: "https://i.imgur.com/B9HH8XW.jpg",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return <>
  <Header1/>
 
    <section className="bg-gray-100 py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 mb-12">
          Find answers to some of the most common questions our customers ask about our Dalkor Solutions services.
        </p>

        {/* FAQs List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 cursor-pointer"
              onClick={() => handleClick(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <span>
                  {activeIndex === index ? (
                    <i className="fa-solid fa-chevron-up text-gray-600"></i>
                  ) : (
                    <i className="fa-solid fa-chevron-down text-gray-600"></i>
                  )}
                </span>
              </div>

              {/* Answer */}
              {activeIndex === index && (
                <div className="mt-4 text-gray-600">
                  <p>{faq.answer}</p>
                  {/* Image related to the FAQ */}
                  <div className="mt-4">
                    <img
                      className="rounded-lg w-full h-40 object-cover"
                      src={faq.image}
                      alt={faq.question}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
}

export default Faq
