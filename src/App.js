import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Grid, Row, Col} from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import {setCity} from './actions';
import './App.css';

const cities = [
  "Bogota,col","Cali,col","Miami,usa","Chicago,usa"
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: null
    }
  }

  handleSelectedLocation = city => {
    this.setState({
      city
    });
    console.log(`handleSelectedLocation ${city}`);

    this.props.dispatchSetCity(city);
  }

  render() {
    const {city} = this.state;
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="title" color="inherit">
                  Weather App
                </Typography>
              </Toolbar>
            </AppBar>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList 
              cities={cities} 
              onSelectedLocation={this.handleSelectedLocation} >
            </LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={3}>
              <div className="detail">
                {
                  city ?
                  <ForecastExtended city={city}></ForecastExtended> :
                  <h2>No se seleccionó ciudad</h2>               
                }
              </div>
            </Paper>           
          </Col>
        </Row>
      </Grid>
    );
  }
}

App.propTypes = {
  dispatchSetCity: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({ // action
  dispatchSetCity: value => dispatch(setCity(value))
});

const AppConnected = connect(null, mapDispatchToProps)(App); // connect -> returns another function (component)

export default AppConnected;
