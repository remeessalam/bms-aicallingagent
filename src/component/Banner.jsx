import { useState } from "react";
import ReactPlayer from "react-player";
import introVid from "../assets/videos/intro.mp4";
import vidThumb from "../assets/videos/introvideothumb.png";
import { BiPlay } from "react-icons/bi";

// eslint-disable-next-line
const Banner = ({ introVidIsPlaying, setIntroVidIsPlaying }) => {
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  const handlePlayVideo = () => {
    setIntroVidIsPlaying(!introVidIsPlaying);
  };

  return (
    <div className="h-full wrapper relative z-10 flex items-center pt-[10rem] pb-[5rem] lg:pb-0 lg:pt-[5%]">
      <div className="grid lg:grid-cols-2 gap-[2rem] items-start">
        <div className="flex flex-col gap-3 items-start text-center lg:text-start">
          <h1
            data-aos="zoom-in"
            className="text-[2.7rem] text-balance leading-[3rem] md:text-5xl font-semibold text-orange-400"
          >
            AI - Powered Conversation, Real Business Results.{" "}
          </h1>
          <p className="tracking-widest text-white">
            Imagine an AI calling agency that can handle customer service,
            resolve Issues, answers any questions about, your business and book
            appointments for you on autopilot.
          </p>
          <button className="primary-btn font-medium w-fit hidden lg:flex justify-center py-3 mt-5">
            Get Started
          </button>
        </div>

        <div className="w-full flex justify-center" data-aos="fade-up">
          <div className="intro-vid h-[50vh] sm:h-[60vh] max-h-[35rem] w-fit relative -z-10 px-5 py-6 backdrop-blur-sm rounded-[1rem] bg-white/10">
            <div
              onClick={() => !isVideoLoading && handlePlayVideo()}
              className={`absolute cursor-pointer top-0 left-0 w-full h-full z-10 rounded-[1rem]
               ${!introVidIsPlaying && "bg-black/20"}
              `}
            >
              {!introVidIsPlaying && !isVideoLoading && (
                <button className="bg-primary w-[3rem] z-10 h-[3rem] p-1 flex justify-center items-center rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <BiPlay className="text-[3rem] text-black" />
                </button>
              )}
            </div>

            {isVideoLoading && (
              <div className="absolute top-0 left-0 w-fit mx-auto h-[50vh] sm:h-[60vh] max-h-[35rem] flex justify-center items-center px-5 py-6 backdrop-blur-sm rounded-[1rem]">
                <img
                  src={vidThumb}
                  className="h-full object-cover rounded-[1rem]"
                  alt="thumbnail"
                />
              </div>
            )}
            <ReactPlayer
              url={introVid}
              playing={introVidIsPlaying} // Control playing via state
              loop={false}
              width="100%"
              height="100%"
              pip={false}
              onReady={() => setIsVideoLoading(false)}
              playsInline={true}
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload noplaybackrate",
                    disablePictureInPicture: true,
                    playsInline: true,
                  },
                },
              }}
            />
          </div>
        </div>
        <button className="primary-btn font-medium w-[17rem] flex mx-auto lg:hidden justify-center py-3 mt-2">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;
