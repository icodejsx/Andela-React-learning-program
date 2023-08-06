"use c  lient"
import React from 'react';
import { useEffect } from 'react';
import Header from './Header';

const Home = () => {
    useEffect(() => {
        const fetchHouse = async () => {
            const rsp = await fetch('/house.json')
            const houses = await rsp.json()
        }
    },)
    return (
        <div>
            <Header />
        </div>
    );
}

export default Home;
