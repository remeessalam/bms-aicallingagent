import service1 from "../assets/images/callmanagement.png";
import service2 from "../assets/images/queuemangement.png";
import service3 from "../assets/images/automatic.png";
import service4 from "../assets/images/calllogs.png";
const ServiceWeOffer = () => {
  const aiExpertAccesses = [
    { title: "Call Management", img: service1 },
    { title: "Queue Management", img: service2 },
    { title: "Automated Appointment Scheduling", img: service3 },
    { title: "Call Logs and Transcripts", img: service4 },
  ];
  return (
    <div>
      {" "}
      <section id="courses" data-aos="fade-up" className="py-[4rem] text-white">
        <h2 className="text-4xl font-bold text-white text-center">
          <span className="text-primary">Key Features</span> What AI Can Do for
          You{" "}
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10 max-w-3xl mx-auto">
          {aiExpertAccesses.map((access) => (
            <div
              key={access.title}
              style={{ backgroundImage: `url(${encodeURI(access.img)})` }}
              className="shadow-large shadow-white/10 relative bg-center group overflow-hidden hover:scale-105 bg-cover cursor-pointer transition-all duration-200 rounded-md p-5 text-xl sm:text-2xl flex justify-center items-center text-center w-full aspect-square"
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 h-full w-full"></div>
              <p className="z-10 font-semibold">{access.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceWeOffer;
