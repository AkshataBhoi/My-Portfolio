import React from 'react';
import Hero from '../components/Hero';
// import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Experience />
            <Projects />
            {/* <About /> */}

        </>
    );
};

export default Home;
