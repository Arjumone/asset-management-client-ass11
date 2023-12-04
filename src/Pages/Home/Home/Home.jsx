
import Banner from "../Banner/Banner";
import AboutSection from "../AboutSection/AboutSection";
import PackagesSection from "../PackagesSection/PackagesSection";
import { Helmet } from "react-helmet-async";
const Home = () => {
    return (
        <div className=" min-h-screen">
            <Helmet>
                <title>Asset || Home</title>
            </Helmet>
         <Banner></Banner>
         <AboutSection></AboutSection>
         <PackagesSection></PackagesSection>
        </div>
    );
};

export default Home;