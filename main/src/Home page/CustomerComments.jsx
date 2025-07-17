import React from 'react'
import imageone from "./../Images/team-01.jpg";
import imagetwo from "./../Images/team-02.jpg";
import thirdimage from "./../Images/team-03.jpg";

const CustomerComments = () => {
  
const testimonials = [
  {
    text: "I am absolutely thrilled with the service I received from their company! They were attentive, responsive, and genuinely cared about meeting my needs. I highly recommend them.",
    image: imageone,
    name: "Your Client",
  },
  {
    text: "I am absolutely thrilled with the service I received from their company! They were attentive, responsive, and genuinely cared about meeting my needs. I highly recommend them.",
    image: imagetwo,
    name: "Your Client",
  },
  {
    text: "Their team exceeded our expectations. Their creative approach and attention to detail brought our vision to life. Highly recommended!",
    image: thirdimage,
    name: "Your Client",
  },
];
  return (
    <section className="bg-[#ECF4D3] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          What Our Customers Say
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Discover the reasons why people love us and become your go-to partner.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between"
            >
              <div className="text-4xl text-green-600 mb-4">“</div>
              <p className="text-gray-700 mb-6">{t.text}</p>
              <div className="flex items-center mt-auto">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <p className="text-sm text-gray-700">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerComments