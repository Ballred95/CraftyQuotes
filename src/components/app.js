import React, { Component } from 'react';
// import Homescreen from './homescreen';
import Board from './board';
import Card from './card';



export default class App extends Component {
  render() {
    return (
      <div className='app'>
        {/* <Homescreen /> */}
        <Board id='board-1' className='board'>
        <Card id ='card-1' className='card' draggable='true'>
        <p>card one</p>
        </Card>
        </Board>

        <Board id='board-2' className='board'>
        <Card id ='card-2' className='card' draggable='true'>
        <p>card two</p>
        </Card>
        </Board>
      </div>
    );
  }
}
