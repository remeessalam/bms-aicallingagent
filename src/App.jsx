import FeaturedIn from "./component/FeaturedIn";
import HomeBanner from "./component/HomeBanner";
import "keen-slider/keen-slider.min.css";
import TopNotchFeatures from "./component/TopNotchFeatures";
import HowItWorks from "./component/HowItWork";
import WhatItDo from "./component/WhatItDo";
import Testimonials from "./component/Testimonials";
import ServiceWeOffer from "./component/ServiceWeOffer";
import FAQ from "./component/FAQ";
import OurOffices from "./component/OurOffices";
function App() {
  return (
    <>
      <HomeBanner />
      <section className="pt-20">
        <FeaturedIn />
      </section>
      <TopNotchFeatures />
      <HowItWorks />
      <WhatItDo />
      <Testimonials />
      <ServiceWeOffer />
      <FAQ />
      <OurOffices />
    </>
  );
}

export default App;
