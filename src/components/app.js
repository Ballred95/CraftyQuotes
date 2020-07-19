import React, { Component } from 'react';
// import 'tui-image-editor/dist/tui-image-editor.css'
// import ImageEditor from '@toast-ui/react-image-editor'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Homescreen from './homescreen';




export default class App extends Component {
  
  render() {
    return (
      <div className='app'>
        <Homescreen />
       
      </div>
    );
  }
}
