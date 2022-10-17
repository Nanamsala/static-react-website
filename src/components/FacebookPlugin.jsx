import './facebookPlugin.css'
import React, { Component } from 'react'
export default class FacebookPlugin extends Component {
    componentDidMount() {
        window.FB.XFBML.parse();
      }  
    componentDidUpdate() {
        window.FB.XFBML.parse();
      }  
  render() { 
    const currentURL = window.location.href   
    return (
      <div className='fbpl'>
        <div class="fb-like" data-href={currentURL} data-width="" data-layout="standard" data-action="like" data-size="small" data-share="true"></div>
        <div class="fb-comments" data-href={currentURL}  data-width="" data-numposts="5"></div>
      </div>
    )
  }
}

