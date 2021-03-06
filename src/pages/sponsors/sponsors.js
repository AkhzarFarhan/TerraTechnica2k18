import React, { Component } from 'react';
import '../../css/sponsors.css';



class Sponsors extends Component {
      constructor(props) {
      super(props);
      this.state = {
        open: false,
      };
    }
  render() {
  	const spo=[
		'pcm logo.png',
		'ETS-TOEFL-4C.jpg',
		'EDST Logo.png',
		'IBC Logo.png',
		'Canara-Bank-logo.png',
	]
  	let	  spomap=spo.map(e=>{
  		  		return(
  		  			<img 
        				src={require('../../static/'+e)} 
        				className="co-sponsor-img" 
        				alt={e}
        			/>
  		  			)
  		  })
  	const part=[
		  {tit:'tata_hackathon.jpg',span:'Hackathon Partner'},
  		{tit:'fidelity-international-logo.png',span:'ML Challenge Partner'},
  		{tit:'ace academy logo.jpg',span:'Higher Education Partner'},
  		{tit:'NDT logo.png',span:'Media Partner'},
      {tit:'smaaashlogo.jpg',span:'Recreation Partner'},
  		{tit:'wittyfeed logo.png',span:'Official outreach Partner'},
  		
  	]
  	let partmap=part.map(e=>{
  		return(
  				<div className="co-sponsors">
					<span>{e.span}</span><br/>
		        	<img 
		        		src={require('../../static/'+e.tit)} 
		        		className="co-sponsor-img" 
		        		alt={e.tit}
		        	/>
  				</div>
  			)
  	})
    return (
      <div className="Sponsors">
        <div className="co-sponsors">
        	<span>Co-sponsor</span><br/>
        	<img 
        		src={require('../../static/honda1.jpg')} 
        		className="co-sponsor-img" 
        		alt="honda"
        	/>
        </div>
        <div className="co-sponsors">
        	<span>Prime sponsors</span><br/>
        	{spomap}
        </div>
        {partmap}
      </div>
    );
  }
}

export default Sponsors;
