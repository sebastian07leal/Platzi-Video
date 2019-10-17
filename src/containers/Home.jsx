import React from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.sass';

const Home = () => (
    <>
        <Search />
        <Categories title="Mi lista">
            <Carousel>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
            </Carousel>
        </Categories>

        <Categories title="Tendencias">
            <Carousel>
                <CarouselItem />
                <CarouselItem />
            </Carousel>
        </Categories>

        <Categories title="Originales de Platzi Video">
            <Carousel>
                <CarouselItem />
            </Carousel>
        </Categories>
    </>
);

export default Home;