import AboutUs from "./AboutUs/AboutUs";
import BestProduct from "./BestProduct/BestProduct";
import Herosection from "./Herosection/Herosection";
import SpecialOffer from "./Special Offer/SpecialOffer";
import Footer from "./footer/footer";

const Main = () => {
    return (
        <div>
            <Herosection></Herosection>
            <SpecialOffer></SpecialOffer>
            <AboutUs></AboutUs>
            <BestProduct/>
            <Footer/>
        </div>
    );
};

export default Main;