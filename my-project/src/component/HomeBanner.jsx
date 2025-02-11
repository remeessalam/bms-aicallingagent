import ReactPlayer from "react-player";

const HomeBanner = () => {
  return (
    <div>
      {" "}
      <div className="min-h-screen flex items-center relative">
        <div className="landing-page-bg h-full w-full absolute left-0 top-0">
          <div className="absolute inset-0 h-full w-full bg-black/60 z-[1]"></div>
          <ReactPlayer
            url={bannerBgVid}
            playing
            muted
            playsinline
            loop
            pip={false}
          />
        </div>
        <div className="wrapper h-fit">
          <Banner
            introVidIsPlaying={introVidIsPlaying}
            setIntroVidIsPlaying={setIntroVidIsPlaying}
            path={path}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
