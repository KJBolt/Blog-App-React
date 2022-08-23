import React from 'react';
import LandingPage from './LandingPage';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import { Container } from '@mui/system';
import SectionFour from './SectionFour';
import SectionFive from './SectionFive';
import SectionSix from './SectionSix';
import Footer from './Footer';
import Creator from './Creator';


function Homepage() {
    return ( 
        <div>
            {/* Main Body Components */}
            <LandingPage />

            <Container>
                <SectionTwo />
                <SectionThree />
                <SectionFour/>
            </Container>

            <SectionFive />

            <Container>
                <SectionSix />
            </Container>

            <Footer />

            <Creator />
        </div>
    );
}

export default Homepage;