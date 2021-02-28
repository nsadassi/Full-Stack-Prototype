import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import CSRFToken from './Csrftoken';


export default class Navbar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            startingtime:"7:30",
            endingtime:"07:30",
            graphtype:"Bar",
        };

        this.handleSubmitButtonPressed = this.handleSubmitButtonPressed.bind(this);
        this.handleStartTime = this.handleStartTime.bind(this);
        this.handleEndTime = this.handleEndTime.bind(this);
        this.handleGraphType = this.handleGraphType.bind(this);
    }
    
    handleStartTime(e){
        this.setState({
        startingtime : e.target.value,
        });
    }

    handleEndTime(e){
        this.setState({
            endingtime : e.target.value,
        });
    }

    handleGraphType(e){
        this.setState({
            graphtype : e.target.value,
        });
    }

    handleSubmitButtonPressed(){
        //console.log(this.state);
        const requestOptions = {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                startTime : this.state.startingtime,
                endTime : this.state.endingtime,
                graphType : this.state.graphtype
            }),
        };
        const axios = require('axios');
        axios.post('/api/graph/',
            requestOptions.body).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        //fetch('api/graph/' , requestOptions).then( console.log(requestOptions.startTime));
    }

      render() {
          return(
              <Grid container spacing={1}>
                  <Grid item xs={12} align="center">
                    <Typography component='h4' variant='h4'>
                        Graph data query
                    </Typography>
                  </Grid>
                  <Grid item xs={12} align="center">
                      <FormControl component="fieldset">
                            <CSRFToken />
                            <FormHelperText>
                                <div align="center">
                                    Choose Time frame for data 
                                </div>
                                <FormControlLabel 
                                    control = {<TextField
                                        id="time"
                                        type="time"
                                        defaultValue="07:30"
                                        onChange={this.handleStartTime}
                                        InputLabelProps={{
                                            shrink: true,
                                          }}
                                          inputProps={{
                                            step: 300, // 5 min
                                          }}
                                    />}
                                    label="Start Time"
                                    labelPlacement="top"
                                />
                                <FormControlLabel 
                                    control = {<TextField
                                        id="time"
                                        type="time"
                                        defaultValue="07:30"
                                        onChange={this.handleEndTime}
                                        InputLabelProps={{
                                            shrink: true,
                                          }}
                                          inputProps={{
                                            step: 300, // 5 min
                                          }}
                                    />}
                                    label="End Time"
                                    labelPlacement="top"
                                />
                            
                            </FormHelperText>
                      </FormControl>
                  </Grid>
                  <Grid item xs={12} align="center">
                    <FormControlLabel 
                        control = {
                            <NativeSelect id="select" onChange={this.handleGraphType}>
                            <option value="Bar">Bar</option>
                            <option value="Line">Line</option>
                          </NativeSelect>
                        }
                        label="Graph Type"
                        labelPlacement="top"
                    />
                  </Grid>
                  <Grid item xs={12} align="center">
                    <Button color="primary" variant="contained" onClick={this.handleSubmitButtonPressed}>Get Graph</Button>
                  </Grid>
              </Grid>
          );
      }
}