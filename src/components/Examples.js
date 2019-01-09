import React, { Component } from 'react';
import { Fade, Button } from 'reactstrap';
import API from '../api/index';

class Examples extends Component {
  state = {
    fadeIn: false,
    list: [...API]
  }

  toggle = () => {
    this.setState(prevState => ({
      fadeIn: !prevState.fadeIn
    }));
  }

  render() {
    const { fadeIn, list} = this.state;
    return (
      <React.Fragment>
        <Button className="bg-dark" onClick={this.toggle}>
          Example
        </Button>
        <Fade in={fadeIn} className="ml-3">
          <div className="mt-2">
            {list.map((item, index) => (
              <div key={index} className="highlight">
                {item.name}
              </div>
            ))}
          </div>
          <span className="highlight text-primary">
            Created by @anderjs Front End Developer
          </span>
        </Fade>
      </React.Fragment>
    );
  }
}

export default Examples;