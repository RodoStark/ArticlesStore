import React, {Component} from 'react';
import logo from '../assets/images/logo.svg';


class SeccionPruebas extends Component{

	contador = 0;

	//Props: cuando se crea un componente, al final es un objeto, y se le pueden pasar propiedades or agurmentos
	//propiedades o asi bien mamonamente dicho> *props*
	constructor(props) {
	  super(props);	
	  this.state = {
	  	contador: 0
	  };
	}

	HolaMundo(nombre,edad){
		var presentacion = (
			<div>
				<h2>Hola soy {nombre}</h2>
				<h3>Tengo {edad}</h3>
			</div>			
		);
		return presentacion;
	}

	//De esta manera, se necesita poner bind en el onclick = onClick.bind(this)
	/*sumar(e){
		//this.contador= this.contador+1;
		//this.state.contador = this.state.contador=1;
		this.setState({
			contador: (this.state.contador+1)
		});
	}

	restar(e){
		//this.contador= this.contador-1;
		//this.state.contador = this.state.contador=1;
		this.setState({
			contador: (this.state.contador-=1)
		});
	}*/


	sumar = (e) =>{
		//this.contador= this.contador+1;
		//this.state.contador = this.state.contador=1;
		this.setState({
			contador: (this.state.contador+1)
		});
	}

	restar = (e) =>{
		//this.contador= this.contador-1;
		//this.state.contador = this.state.contador=1;
		this.setState({
			contador: (this.state.contador-=1)
		});
	}

	//con funciones de flecha no es necesario le bind


	render(){
		var nombre = "Karla";

		return(

			<section id="content">
          		<h2 className="subheader">Funciones  y JSX basico</h2>
          		<p>
            		Hola, bienvenido al curso de master web de Rodo
          		</p>

				<h2 className="subheader">Componentes</h2>
		        {this.	HolaMundo(nombre,31)}

        	    <section className="componentes">
          
				<h2 className="subheader">Componentes</h2>        	    	
				<p>
					Contador: {this.state.contador}
				</p>
				<p>
					<input type ="button" value="Sumar" onClick={this.sumar}/>
					<input type ="button" value="Restar" onClick={this.restar}/>
				</p>

		        </section>
        	</section>
		);
	}
}

export default SeccionPruebas