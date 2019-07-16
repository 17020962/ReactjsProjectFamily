import React from 'react';
import Banner from '../components/Banner';
import About from '../components/About';
import FeatureNews from '../components/FeatureNews';
import Entry from '../components/Entry';
import LastNews from '../components/LastNews';
import SeeAllNewsButton from '../components/SeeAllNewsButton';
import Author from '../components/Author';

export default function Home() {
    return (
        <>
            <Banner />
            <About />
            <FeatureNews />
            <Entry/>
            <LastNews/>
            <SeeAllNewsButton/>
            <Author/>
        </>
    )
}
