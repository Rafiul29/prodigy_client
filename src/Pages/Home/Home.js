import MarqueeComp from "../../components/Marquee/Marquee";
import MobileApp from "../../components/MobileApp/MobileApp";
import TopBanner from "../../components/TopBanner/TopBanner";
import Courses from "../Courses/Courses";

const Home = () => {
  return (
    <div className="bg-white">
      <TopBanner />
      <div className="max-w-7xl mx-auto">
        <div>
          <div className="flex justify-center">
            <h1 className="font-bold mb-10">
              All of these companies are looking for you
            </h1>
          </div>
          <MarqueeComp />
        </div>
        {/* <Stats /> */}
        <Courses />

        <MobileApp />
      </div>
    </div>
  );
};

export default Home;
