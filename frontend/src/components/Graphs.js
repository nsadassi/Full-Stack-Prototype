import React, { Component } from "react";
import { Bar, Line, Pie } from 'chart.js';

export default class Graphs extends Component{
    constructor(props){
        //console.log(data);
        super(props);
        this.state = {
            
        };
    }

    render(){
        return(
            <div className="chart">
                Graph
            </div>
        );
    }
}