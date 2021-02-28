import React, { Component } from "react";
import { Bar, Line, Pie } from 'chart.js';

export default class Graphs extends Component{
    constructor(props){
        super(props);
        this.state = {
            Datetime : "000", 
            Light : "0", 
            Bus : "0", 
            SingleUnitTruck : "0", 
            ArticulatedTruck : "0", 
            MotorizedVehicle : "0", 
            Bicycle : "0",
        };
    }

    render(){
        return(
            <div className="chart">
                <p> Date : {this.state.Datetime}</p>
                <p> Light : {this.state.Light}</p>
                <p> Bus : {this.state.Bus}</p>
            </div>
        );
    }
}