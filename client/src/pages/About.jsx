import React from 'react'
import AboutLanding from '../About/AboutLanding';
import AboutOurWork from '../About/AboutOurWork';
import Testimonial from '../ServicesPage/ResumeBuildingInfo/TestimonialsResume';
import AboutCards from '../About/AboutCards';
import JoinUs from '../About/JoinUs';
import WhyChooseUs from '../About/WhyChooseUs';
import TechStack from '../Home/TechnologyWeUsedToBuild'
import OurWork from '../Home/OurWork'
import OurTeam from '../About/OurTeam';
import Footer from '../components/Footer'

const About = () => {

    return (
        <>
            <AboutLanding />
            <WhyChooseUs />
            <AboutOurWork />
            <AboutCards />
            <JoinUs />
            <TechStack />
            <OurWork />
            <Testimonial />
            <OurTeam />
            <Footer />
        </>
    )
}

export default About
