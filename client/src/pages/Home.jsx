import React from 'react';
import LandingPage from '../Home/LandingPage';
import WhatWeDo from '../Home/WhatWeDo';
import OurWork from '../Home/OurWork';
import TechnologyWeUsedToBuild from '../Home/TechnologyWeUsedToBuild';
import ShowingOurWork from '../Home/ShowingOurWork'
import OurProducts from '../Home/OurProducts';
import CompanyBasedProjects from '../Home/CompanyBasedProjects';
import CompanyWithTech from '../Home/CompanyWithTech';
import Faq from '../components/FAQ'
import JoinUs from '../components/JoinUs';
import Footer from '../components/Footer';
import CarouselSlider from '../components/Caraousel'
import Testimonial from '../ServicesPage/ResumeBuildingInfo/TestimonialsResume';


const Home = () => {
    return (
        <>
            <LandingPage />
            <WhatWeDo />
            <OurWork />
            <TechnologyWeUsedToBuild />
            <ShowingOurWork />
            <OurProducts />
            <CompanyBasedProjects />
            <JoinUs />
            {/* <CarouselSlider /> */}
            {/* <CompanyWithTech /> */}
            <Testimonial />
            <Faq />
            <Footer />
        </>
    );
};

export default Home;
