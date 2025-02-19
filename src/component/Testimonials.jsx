import { BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Reviews from "./Review";
import groupImg from "../assets/images/group.png";

const Testimonials = () => {
  return (
    <div>
      <section id="reviews" className="pt-[4rem] text-center text-white">
        <div className="max-w-[40rem] mx-auto">
          <h1
            data-aos="zoom-in"
            className="text-4xl font-bold text-white mt-2 text-center"
          >
            Wall Of Love <BsHeartFill className="text-red-500 inline ml-1" />
          </h1>
          <h1
            data-aos="fade-up"
            className="text-xl font-medium mt-[1rem] text-primary"
          >
            <span className="font-bold">Latest Reviews</span> from our Customers
          </h1>
        </div>
      </section>

      <section>
        <Reviews />
        <div
          data-aos="fade-up"
          className="flex flex-col gap-3 w-full justify-center items-center pt-[3rem]"
        >
          <Link
            className="primary-btn font-medium w-[20rem] flex justify-center py-3"
            to={"#"}
          >
            Start your own AI company
          </Link>
          {/* <JoinEntrepreneurs /> */}
        </div>
        <div className="flex w-full justify-center items-center gap-2 pt-[1rem]">
          <img src={groupImg} alt="group" className="h-[1.2rem]" />
          <p className="text-[.7rem] font-light text-white/60">
            Join 250+ like-minded Entrepreneurs
          </p>
        </div>{" "}
      </section>
    </div>
  );
};

export default Testimonials;
