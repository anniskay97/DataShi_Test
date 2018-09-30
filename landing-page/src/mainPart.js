import React from 'react';
import './App.css';
import Slider from './slider'
import Quote from'./quote'
import BlockName from'./blockName'
import Services from './services'
import Players from './players'
import ExchangeRateTable from'./exhangeRateTable'


const MainPart = () =>(
    <div className="mainPart text-center">
        <Quote></Quote>
        <Slider></Slider>
        <hr/>
        <BlockName name="Our Services"/>
        <Services/>
        <hr/>
        <BlockName name="Our Players"/>
        <Players/>
        <hr/>
        <BlockName name="Exchange Rate"/>
        <ExchangeRateTable/>
    </div>
)
export default MainPart