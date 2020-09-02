import React, {Component} from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Formulario extends Component{

	//el valor de los campos es asignado a estas referencias usando React.createRef
	nombreRef = React.createRef();
	apellidosRef = React.createRef();
	bioRef = React.createRef();	
	generoH = React.createRef();
	generoM = React.createRef();
	generoA = React.createRef();


	recibirFormulario = (e) =>{
		e.preventDefault(); //previene recargar la pagina			

		var genero = "hombre";

		if(this.generoH.current.checked){
			genero = this.generoH.current.value;
		}else if(this.generoM.current.checked){
			genero = this.generoM.current.value;
		}else{
			genero = this.generoA.current.value;
		}


		var user ={
			nombre:this.nombreRef.current.value,
			apellidos:this.apellidosRef.current.value,
			bio: this.bioRef.current.value,
			genero: genero
		};

		console.log(user);
	}
	render(){

		return(
			<div id="Formulario">
				<div className="center">
					<div id="content">
						<h1 className="subheader">Formulario</h1>
		                <form className="mid-form" onSubmit={this.recibirFormulario}>
		                    <div className="form-group">
		                        <label htmlFor="nombre">Nombre</label>
		                        <input type="text" name="nombre" ref={this.nombreRef}/>
		                        <label htmlFor="apellido">Apellidos</label>
		                        <input type="text" name="apellido" ref={this.apellidosRef}/>
		                    </div>
		                    <div className="form-group">
		                        <label htmlFor="bio">Biografia</label>                        
		                        <textarea name="bio" ref={this.bioRef}></textarea>
		                    </div>
		                    <div className="form-group radiobuttons">
		                        <input type="radio" name="genero" value="Hombre" ref={this.generoH}/>Hombre
		                        <input type="radio" name="genero" value="Mujer" ref={this.generoM}/>Mujer
		                        <input type="radio" name="genero" value="Androide" ref={this.generoA}/>Androide
		                    </div>
		                    <div className="clearfix"></div>
		                    <input type="submit" value="Enviar" className="btn btn-success" />
		                </form>
					</div>
					<Sidebar
					blog="false"/>
				</div>
			</div>
		);
	}
}

export default Formulario