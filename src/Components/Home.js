import React, {Component} from 'react';
import Slider from './Slider.js';
import Sidebar from './Sidebar.js';
import Articles from './Articles.js';

class Home extends Component{
	
	render(){
		return(
			
			<div id="home">
			    <Slider
			     	title = "Bienvenidos al curso de master React"
			      	btn = "Ir al blog"
			      	size="slider-big"
	     	    /> 
	     	    <div className="center"> 
					<div id="content">
						<h1 className="subheader">Ultimos Articulos</h1>				
						<Articles
						home ="true"
						/>
					</div>

					<Sidebar/>
	     	    </div>
			</div>
		);
	}
}
export default Home;