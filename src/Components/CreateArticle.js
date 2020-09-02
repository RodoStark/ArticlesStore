import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import Sidebar from './Sidebar';


//Validacion formularios y alertas

class CreateArticle extends Component{
	render(){
		return(
			<div className="center">
				<section id="content">
					<h1 className="subheader">Crear Articulo</h1>
				</section>
				<Sidebar/>
			</div>			
		);
	}
}

export default CreateArticle;