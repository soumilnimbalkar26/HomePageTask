import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Brands from "./components/Brands";
import Goals from "./components/Goals";
import Traffic from "./components/Traffic";
import Freesignup from "./components/Freesignup";
import OurPromise from "./components/OurPromise";
import Colab from "./components/Colab";
import Globalnetwork from "./components/Globalnetwork";
import CollaborationSense from "./components/CollaborationSense";
import EnhanceEfforts from "./components/EnhanceEfforts";
import Services from "./components/Services";
import Promotion from "./components/Promotion";
import Rewards from "./components/Rewards";
import FootSignupBtn from "./components/FootSignupBtn";
import FooterHome from "./components/FooterHome";
// import Loading from "./components/Loading";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Brands />
      <Goals />
      <Traffic />
      <Freesignup />
      <OurPromise />
      <Colab />
      <Globalnetwork />
      <CollaborationSense />
      <EnhanceEfforts />
      <Services />
      <Promotion />
      <Rewards />
      {/* <Loading /> */}
      <FootSignupBtn />
      <FooterHome/>
    </>
  );
}

export default App;
