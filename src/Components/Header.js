import React, {Component} from 'react';
import react from '../assets/images/react.svg';
import {NavLink} from 'react-router-dom';


class Header extends Component{
	render(){
		return(
			        <header id="header">
            <div className="center">
                {/*LOGO */}
                <div id="logo">
                    <img src={react} className="app-logo" alt="Logotipo" />
                    <span id="brand">
                        <strong>Curso</strong>React
                    </span>
                </div>
                
                {/* MENU */}
                <nav id="menu">
                    <ul>
                        <li>
                            <NavLink to="/home" activeclass="active">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" activeclass="active">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formulario" activeclass="active">Formulario</NavLink>
                        </li>
                        <li>
                            <NavLink to="/peliculas" activeclass="active">Peliculas</NavLink>
                        </li>
                        <li>
                            <NavLink to="/pruebas/Victor" activeclass="active">Pagina 2</NavLink>
                        </li>                            
                    </ul>
                </nav>

                {/*LIMPIAR FLOTADOS*/}
                <div className="clearfix"></div>
            </div>
        </header>
		);
	}
}
export default Header;