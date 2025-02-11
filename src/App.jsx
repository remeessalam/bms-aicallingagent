import FeaturedIn from "./component/FeaturedIn";
import HomeBanner from "./component/HomeBanner";
import "keen-slider/keen-slider.min.css";
import TopNotchFeatures from "./component/TopNotchFeatures";
import HowItWorks from "./component/HowItWork";
function App() {
  return (
    <>
      <HomeBanner />
      <section className="pt-20">
        <FeaturedIn />
      </section>
      <TopNotchFeatures />
      <HowItWorks />
    </>
  );
}

export default App;
