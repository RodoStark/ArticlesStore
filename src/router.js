import React, {Component} from 'react';
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';

import Peliculas from './Components/Peliculas.js';
import SeccionPruebas from './Components/SeccionPruebas.js';
import Error from './Components/Error.js';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Home from './Components/Home.js';
import Blog from './Components/Blog.js';
import Formulario from './Components/Formulario.js';
import Search from './Components/Search.js';
import Article from './Components/Article.js';
import CreateArticle from './Components/CreateArticle.js';


class Router extends Component{
	render(){

		return(
			<BrowserRouter>

				<Header/>

			    {/*<div className='center'>*/}
					{/*CONFUIGURAR RUTAS Y PAGINAS*/}
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route exact path="/Home" component={Home}/>
						<Route exact path="/blog" component={Blog}/>
						<Route exact path="/blog/articulo/:id" component={Article}/>
						<Route exact path="/blog/crear" component={CreateArticle}/>
						<Route exact path="/blog/busqueda/:search" component={Search}/>

						<Route exact path="/redirect/:search" render={
							(props) =>{
								var search = props.match.params.search;
								return(<Redirect to = {'/blog/busqueda/'+search}/>);
							}
						}/>						


						<Route exact path="/peliculas" component={Peliculas}/>
						<Route exact path="/formulario" component={Formulario}/>

						

						<Route exact path ="/pagina-1" render={()=>(
							<h1>Hola mundo desde la ruta: Pagina 1</h1>						
						)}/>

						<Route exact path ="/pruebas/:nombre/:apellidos?" render={(props)=>{
							var nombre = props.match.params.nombre;
							var apellidos = props.match.params.apellidos;
							return(
								<div id="content">
									<h1 class="subheader">Pagina de pruebas</h1>								
									<h2>
									{nombre&&!apellidos&&
										<React.Fragment>{nombre}</React.Fragment>
									}	
									{nombre&&apellidos&&
										<React.Fragment>{nombre+' '+apellidos}</React.Fragment>
									}
									</h2>
								</div>
							);
						}}/>

						<Route component={Error}/>
					</Switch>					
					
 
					<div className="clearfix"></div>
			    {/*</div>*/}
				<Footer/>
			</BrowserRouter>
		);
	}
}
export default Router;


