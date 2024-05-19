import React from 'react';
import './main.css';
import Schedule from './Schedule';
import Trends from './Trends';
import Blog from './Blog';

function Main() {
    return (
        <main>
            <Schedule />
            <Trends />
            <Blog/>
        </main>
    )
}

export default Main;
