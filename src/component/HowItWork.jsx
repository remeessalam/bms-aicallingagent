import personalcall from "../assets/images/personalcall.png";
import handlecall from "../assets/images/handlecall.png";
import manageenquary from "../assets/images/manageenquary.png";
import groupImg from "../assets/images/group.png";
const HowItWorks = () => {
  const features = [
    {
      title: "Personalized call scripts easily",
      image: personalcall,
    },
    {
      title: "Handle calls seamlessly",
      image: handlecall,
    },
    {
      title: "Manage Enquiries and schedules appointment",
      image: manageenquary,
    },
  ];

  return (
    <div className="bg-black min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-[#FFA500]">How It Works</span>
          <span className="text-white"> - Simple Fast and Effective</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg"
            >
              <div className="aspect-[1/1] relative overflow-hidden">
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-full h-full group-hover:opacity-30  object-cover transition-transform duration-300 group-hover:scale-95"
                />
                <div className="absolute top-0 w-full h-full group-hover:hidden flex bg-black/40 " />
                <div className="absolute bottom-4 left-0 right-0 text-center transition-transform duration-300 group-hover:-translate-y-28">
                  <p className="text-[#FFA500] text-lg font-medium">
                    {feature.title}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70">
                  <p className="text-white text-center text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="section-pt flex flex-col items-center justify-center text-center gap-10">
          <h1
            data-aos="zoom-in"
            className=" text-[2.7rem] leading-[3rem] md:text-5xl font-semibold text-primary text-center"
          >
            Launch the company <br />
            {"you've always envisioned."}
          </h1>
          <div
            data-aos="fade-up"
            className="flex flex-col gap-3 w-full justify-center items-center"
          >
            <a
              className="primary-btn font-medium w-[20rem] flex justify-center py-3"
              href={`/contact`}
            >
              Start your own AI company
            </a>
            <div className="flex items-center gap-2">
              <img src={groupImg} alt="group" className="h-[1.2rem]" />
              <p className="text-[.7rem] font-light text-white/60">
                Join 250+ like-minded Entrepreneurs
              </p>
            </div>{" "}
          </div>
          <div className="mt-2 text-white" data-aos="fade-up">
            <p className="text-white/80 max-w-[40rem] text-sm">
              We are constantly adding new technology and creation methods that
              we couldn’t previously disclose. Join{" "}
              <span className="text-white font-medium">Boostmysites</span> and
              level up now.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowItWorks;
