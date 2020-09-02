import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import Sidebar from './Sidebar';
import Moment from 'react-moment';
import 'moment/locale/es';
import ImageDefault from '../assets/images/paisaje.jpg';

class Article extends Component{

    url = Global.url;

    state = {
        article: false,
        status: null
    }

    componentWillMount(){
        this.getArticle();
    }

    getArticle = () => {
        var id = this.props.match.params.id;

        axios.get(this.url + 'article/' + id)
        .then(res =>{
            this.setState({
                article: res.data.article,
                status: 'success'
            });
        }).catch(err =>{
            this.setState({
                article:false,
                status: 'success'
            });
        });
    }

	render(){

        var article = this.state.article;

		return(
			<div class="center">
            <section id="content">       

                {this.state.article &&
                    <article className="article-item article-detail">
                        <div className="image-wrap">
                            {
                                article.image != null?(
                                    <img src={this.url+'get-image/'+article.image} alt={article.title}/>
                                ):(
                                    <img src={ImageDefault} alt={article.title}/>
                                )
                            }
                        </div>
                        <h1 className="subheader">{this.state.article.title}</h1>
                        <span className="date">
                            <Moment local='es' fromNow>{article.date}</Moment>
                        </span>
                        <p>
                            {article.content}     
                        </p>                        
                        <a href="#" className="btn btn-danger">Eliminar</a>
                        <a href="#" className="btn btn-edit">Editar</a>

                        <div className="clearfix"></div>
                    </article>
                }         

                {!this.state.article && this.state.status === 'success' &&
                    <div id="article"> 
                        <h2 className="subheader">El articulo no existe</h2>
                        <p>:'(</p>
                    </div> 
                }                           
                {!this.state.status == null &&
                    <div id="article"> 
                        <h2 className="subheader">Cargando</h2>
                        <p>:'(</p>
                    </div> 
                }                                           
            </section>
            <Sidebar/>
            </div>
		);
	}
}

export default Article;