import React, { Component } from 'react';
// import 'tui-image-editor/dist/tui-image-editor.css'
// import ImageEditor from '@toast-ui/react-image-editor'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Homescreen from './homescreen';
import Imageview from './imageview/imageview';




export default class App extends Component {
  
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path = '/' component = {Homescreen} />
          <Route path ='/image/:id' component={Imageview} />
        </Switch>
      </Router>
    );
  }
}
