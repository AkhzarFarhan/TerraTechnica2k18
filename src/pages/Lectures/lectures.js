import React, { Component } from 'react';
import '../../css/lectures.css';

class Lectures extends Component {
  render () {
    return (
      <div className="Lectures">
           <img 
            src={require('../../static/lec2.jpg')}
            className="images"
            alt="lecture 1"
          />
 		<img 
      		src={require('../../static/lecture.jpg')}
            className="images"
            alt="lecture 2"
          />

    		<img 
            	src={require('../../static/gigi_jopesh.png')}
      			className="images"
      			alt="lecture 3"
      		/>
      </div>
    )
  }

}

export default Lectures;
