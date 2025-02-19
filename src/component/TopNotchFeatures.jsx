import { subscriptionBenefits } from "../constant";

const TopNotchFeatures = () => {
  return (
    <div>
      {" "}
      <div className="wrapper">
        <section
          id="features"
          className="flex flex-col items-center justify-center gap-10 text-center section-pt"
        >
          <div className="flex flex-col gap-2 items-center">
            <p
              data-aos="fade-up"
              className="tracking-widest text-lg font-light text-white/80"
            >
              Top-Notch Features
            </p>
            <h2 data-aos="fade-up" className="text-xl font-normal text-white">
              Our Al never misses a call and is always ready to engage with
              customers. No more interruptions with go no where phone calls.
              From handling support requests to booking appointments, AI is
              smarter than any answering service and more reliable than your top
              sales person.Your business can operate flawlessly for you 24/7{" "}
            </h2>
          </div>
          <div
            data-aos="fade-up"
            className="max-w-5xl mx-auto flex flex-wrap flex-row gap-7 mt-5 justify-center items-center text-white"
          >
            {subscriptionBenefits.map(({ id, title, description, icon }) => {
              //   con/st Icon = icon;
              return (
                <div
                  className="p-5 bg-black md:w-[45%] flex flex-col items-center text-center gap-2 hover:border-t-4 border-primary transition-all duration-150"
                  key={id}
                >
                  <div className="w-[3.5rem] h-[3.5rem] rounded-full bg-white flex items-center justify-center">
                    {/* <Icon className="h-[2rem] w-[2rem] fill-primary1 object-contain" /> */}
                    <img
                      src={icon}
                      alt={title}
                      className="h-[2rem] w-[2rem] fill-primary1 object-contain"
                    />
                  </div>
                  <h4 className="text-2xl font-semibold leading-tight mt-2">
                    {title}
                  </h4>
                  <p className="font-light text-white/80">{description}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TopNotchFeatures;
