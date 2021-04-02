import React from 'react'

// Import Components
import {Experience, Footer, Hero, Introducing, Portfolio, WhoIAM} from '../Components'


const Home = () => {
    return (
        <div>
            <Hero />
            <Experience />
            <Portfolio />
            <Introducing />
            <WhoIAM />
            <Footer />
        </div>
    )
}

export default Home
