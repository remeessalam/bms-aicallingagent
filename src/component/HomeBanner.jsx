import ReactPlayer from "react-player";
import aicallingbannervideo from "../assets/videos/aicallingbannervideo.mp4";
import Banner from "./Banner";
import { useState } from "react";
const HomeBanner = () => {
  const [introVidIsPlaying, setIntroVidIsPlaying] = useState(false);

  return (
    <div>
      {" "}
      <div className="min-h-screen w-screen flex items-center relative">
        <div className="landing-page-bg h-full w-full absolute left-0 top-0">
          <div className="absolute inset-0 h-full w-full bg-black/60 z-[1]"></div>
          <ReactPlayer
            url={aicallingbannervideo}
            loop={true}
            playsinline
            playing={true}
            width="100%"
            height="100vh"
            muted
            className=" object-cover"
            config={{
              file: {
                attributes: {
                  style: {
                    objectFit: "cover",
                    width: "100vw",
                    height: "100vh",
                    transform: "scaleX(-1)",
                  },
                },
              },
            }}
          />
        </div>
        <div className="wrapper h-fit">
          <Banner
            introVidIsPlaying={introVidIsPlaying}
            setIntroVidIsPlaying={setIntroVidIsPlaying}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
