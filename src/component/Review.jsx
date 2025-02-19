import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import avt1 from "../assets/images/Ellipse 39.png";
import avt2 from "../assets/images/Ellipse 40.png";
import avt3 from "../assets/images/Ellipse 41.png";
import avt4 from "../assets/images/Ellipse 42.png";
import avt5 from "../assets/images/Ellipse 43.png";
import avt6 from "../assets/images/Ellipse 44.png";

const reviews = [
  {
    id: 1,
    name: "Pratik Srivashtav",
    img: avt1,
    desc: "“I recently worked with Boostmysites to start my own AI company, and I couldn’t be happier with the experience. From the very beginning, they provided expert guidance on everything from developing a solid business plan to understanding the technical aspects of AI. Their team was incredibly knowledgeable, patient, and genuinely invested in my success. They offered valuable resources, support, and even connected me with potential clients worldwide. Thanks to Boostmysites, I felt confident and well-prepared to launch my AI business. Highly recommended for anyone looking to enter the AI industry with a strong foundation!”",
  },
  {
    id: 2,
    name: "Ahan R",
    img: avt3,
    desc: "“I started my AI company with zero coding experience, and Boostmysites made it possible. They provided all the tools, resources, and step-by-step guidance I needed to bring my vision to life without any technical background. Their team was incredibly supportive, helping me navigate the process and connect with the right people to build a successful AI business. Thanks to Boostmysites, I now have a thriving company, even without coding skills. Highly recommend them for anyone looking to break into the AI field!”",
  },
  {
    id: 3,
    name: "Manish Yadav",
    img: avt4,
    desc: "“Working with Boostmysites to start my AI company was incredibly affordable. I was amazed at how little investment was needed to get my business off the ground. They provided everything I needed—guidance, resources, and connections—all at a fraction of what I expected. Despite the low cost, the quality of support was top-notch, and I felt fully equipped to launch and grow my AI company. If you’re looking to start in AI with minimal investment, Boostmysites is the way to go!”",
  },
  {
    id: 4,
    name: "Janvi Singh",
    img: avt6,
    desc: "“As a woman entrepreneur starting in AI, Boostmysites was exactly what I needed. They provided all the support and guidance to help me understand the industry and launch my business with confidence. The team was incredibly encouraging, making everything easy to navigate, even without a tech background. With minimal investment, I was able to start my AI company thanks to Boostmysites. I’d recommend them to any woman looking to break into tech!”",
  },
  {
    id: 5,
    name: "Arpit and Navya",
    img: avt5,
    desc: "“My spouse and I decided to start our AI company together, and Boostmysites made the whole process so much easier. They provided clear guidance, valuable resources, and great support at every step. We had minimal tech experience, but their team helped us feel confident and prepared to launch. Starting a business as a married couple can be challenging, but Boostmysites really helped us turn our idea into a reality. Highly recommend for any couple looking to break into AI!”",
  },
  {
    id: 6,
    name: "Hassam Khan",
    img: avt2,
    desc: "Boostmysites made starting my AI company a seamless experience. Their expert guidance, resources, and connections helped me get up and running quickly. They truly care about their clients’ success, and I couldn’t be happier with the support I received. Highly recommend!”",
  },
];

const Reviews = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    rtl: true,
    mode: "free-snap",
    slides: { perView: 2, spacing: 10 },
    breakpoints: {
      "(max-width: 768px)": { perView: 1, spacing: 5 },
    },
    created: (slider) => {
      slider.moveToIdx(1, true, { duration: 5000 });
    },
    animationEnded: (slider) => {
      slider.moveToIdx(slider.track.details.abs + 1, true, { duration: 5000 });
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider mt-14">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="keen-slider__slide bg-white p-4 rounded-lg shadow-lg"
        >
          <img
            src={review.img}
            alt={review.name}
            className="w-16 h-16 rounded-full mx-auto mb-2"
          />
          <h3 className="text-lg font-bold text-center text-black">
            {review.name}
          </h3>
          <p className="text-center text-gray-600">{review.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
