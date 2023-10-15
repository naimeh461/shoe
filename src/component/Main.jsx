import AboutUs from "./AboutUs/AboutUs";
import Herosection from "./Herosection/Herosection";
import SpecialOffer from "./Special Offer/SpecialOffer";
import Footer from "./footer/footer";

const Main = () => {
    return (
        <div>
            <Herosection></Herosection>
            <SpecialOffer></SpecialOffer>
            <AboutUs></AboutUs>
            <Footer/>
        </div>
    );
};

export default Main;