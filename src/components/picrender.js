import React, { Component } from 'react';
import Imagesearch from './image_search/imagesearch';
import Imagelist from './image_list/imagelist'

const API_KEY = '17478784-735f4f1d92940cc091944cc00'



export default class Picrender extends Component {
constructor(props){
  super(props)

  this.state = {
    images: [],
    fullscreen: null
  }
this.handleGetRequest=this.handleGetRequest.bind(this)
}
  
  handleGetRequest = async (e) => {
    e.preventDefault()
    const searchTerm = e.target.elements.searchValue.value
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo`
    const request = await fetch(url)
    const response = await request.json()
    this.setState({images: response.hits})
    console.log(this.state.images)
    
  }

  

  render() {

    

    return (
      <div className=''>
        <Imagesearch handleGetRequest ={this.handleGetRequest} />
        
        <Imagelist images = {this.state.images} clh = {()=>this.setState({fullscreen: 'test'})} />
      </div>
    );
  }
}
