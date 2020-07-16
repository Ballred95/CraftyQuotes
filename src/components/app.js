import React, { Component } from 'react';
import { Emitter } from 'raycast-dom';

import Homescreen from './homescreen';




export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        circles: [],
        selectedCircleIndex: -1
    };

    // Emitter subscription
    Emitter.getInstance().connect({
        onMouseOver: this.onMouseOver,
        onMouseOut: this.onMouseOut
    });
}

onMouseOver(ray) {
    var circle = ray.intersectsId(CIRCLE_ID_PREFIX),
        circleId, circleIndex;

    if (circle) { // circle mouse over            
        circleId = circle.id;
        circleIndex = parseInt(circleId.split(CIRCLE_ID_PREFIX)[1]);
        this.setState({
            hoveredCircleIndex: circleIndex
        });
    }
}

onMouseOut(ray) {
    if (ray.intersectsId(CIRCLE_ID_PREFIX)) {
        // circle mouse over
        this.setState({
            hoveredCircleIndex: -1
        });
    }
}
  render() {
    return (
      <div className='app'>
        {/* <Homescreen /> */}
       
      </div>
    );
  }
}
