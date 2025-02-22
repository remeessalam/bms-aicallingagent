import { useState } from "react";
import ReactPlayer from "react-player";
import introVid from "../assets/videos/intro.mp4";
import vidThumb from "../assets/videos/introvideothumb.png";
import { BiPlay } from "react-icons/bi";

const Banner = () => {
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div className="h-full wrapper relative z-10 flex items-center pt-[10rem] pb-[5rem] lg:pb-0 lg:pt-[5%]">
      <div className="grid lg:grid-cols-2 gap-[2rem] items-start">
        <div className="flex flex-col gap-3 items-start text-center lg:text-start">
          <h1
            data-aos="zoom-in"
            className="text-[2.7rem] text-balance leading-[3rem] md:text-5xl font-semibold text-orange-400"
          >
            AI - Powered Conversation, Real Business Results.
          </h1>
          <p className="tracking-widest text-white">
            Imagine an AI calling agency that can handle customer service,
            resolve Issues, answer any questions about your business, and book
            appointments for you on autopilot.
          </p>
          <button className="primary-btn font-medium w-fit hidden lg:flex justify-center py-3 mt-5">
            Get Started
          </button>
        </div>

        {/* Video Section */}
        <div className="w-full flex justify-center" data-aos="fade-up">
          <div className="intro-vid h-[50vh] sm:h-[60vh] max-h-[35rem] w-fit relative z-10 px-5 py-6 backdrop-blur-sm rounded-[1rem] bg-white/10 !overflow-hidden">
            {/* Video Loading Thumbnail - Now behind play button */}

            {/* Video Player */}
            <ReactPlayer
              url={introVid}
              playing={isPlaying}
              loop={false}
              width="100%"
              height="100%"
              pip={false}
              controls={false}
              onClick={togglePlayPause}
              onEnded={handleVideoEnd}
              playsInline={true}
              className="relative z-10"
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
            {!isPlaying && (
              <img
                src={vidThumb}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-[1rem] z-10"
                alt="thumbnail"
              />
            )}
            {/* Overlay with Play Button - Now above thumbnail */}
            {!isPlaying ? (
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/40 z-20"
                onClick={togglePlayPause}
              >
                <div className="w-16 h-16 bg-orange-500 rounded-full flex justify-center items-center">
                  <BiPlay className="text-black w-8 h-8" />
                </div>
              </div>
            ) : (
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/10 z-20"
                onClick={togglePlayPause}
              />
            )}
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
