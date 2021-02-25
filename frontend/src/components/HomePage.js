import React, { Component } from "react";
//import { BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom"; 

import Navbar from "./Navbar";
import Graphs from "./Graphs";

export default class HomePage extends Component{
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="homepage">
                <Navbar />
<               Graphs />
            </div>
        );
    }
}