import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
// Importing Components
import Navigation from './components/Navigation';
import CustomForm from './components/CustomForm';
import Examples from './components/Examples';
import './App.css';
import './bootstrap-4.2.1/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Container>
          <h4 className={classes.h4}>React JS Form{" "} 
            <span className="text-info">Select/Discard</span>
          </h4>
          <Row>
            <Col md={6}>
              <CustomForm />
            </Col>
            <Col md={6}>
              <Examples />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

/**
 * @typedef {object} classes
 * @description Each member of classes, will add a custom css of bootstrap.
 * This will give more readibility of code instead of confusing css classNames.
 */
const classes = {
  h4: 'mt-4 highlight'
};

export default App;
