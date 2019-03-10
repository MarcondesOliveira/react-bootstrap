import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      photos: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
    .then(response => response.json())
    .then(json => this.setState({photos: json}))
  }

  render() {
    return (
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainToggler"
          aria-controls="navbarMainToggler" aria-expanded="false" aria-labelledby="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#"><i className="fas fa-stroopwafel"></i>&nbsp;React + Boostrap</a>

        <section className="collapse navbar-collapse" id="navbarMainToggler">
          <div className="navbar-nav ml-auto pr-3">
            <a className="nav-item nav-link" href="#">Nome</a>
            <a className="nav-item nav-link" href="#">Channel</a>
            <a className="nav-item nav-link" href="#">Login</a>
          </div>
          <form  className="form-inline">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">@</span>
            </div>
            <input type="text" className="form-control mr-3" placeholder="Username"/>&nbsp;
            <button className="btn btn-outline-success">Login</button>
          </div></form>
        </section>
        </nav>

        <section id="carouselSection" className="carousel slide" data-ride="carousel" data-interval="3000">
          <ol className="carousel-indicators">
            <li data-target="carouselSection" data-slide-to="0" className="active"></li>
            <li data-target="carouselSection" data-slide-to="1"></li>
            <li data-target="carouselSection" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://via.placeholder.com/600/92c952" alt="Imagem 1" className="d-block w-100 img-fluid"/>
              <div className="carousel-caption d-none d-md-block">
                <h4>Image 1</h4>
                <p>Something about the image</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://via.placeholder.com/600/771796" alt="Imagem 2" className="d-block w-100 img-fluid"/>
              <div className="carousel-caption d-none d-md-block">
                <h4>Image 2</h4>
                <p>Something about the image</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://via.placeholder.com/600/24f355" alt="Imagem 3" className="d-block w-100 img-fluid"/>
              <div className="carousel-caption d-none d-md-block">
                <h4>Image 3</h4>                
                <p>Something about the image</p>                               
              </div>
            </div>
          </div>
          <div className="carousel-control-prev" href="#carouselSection" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </div>
          <div className="carousel-control-next" href="#carouselSection" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </div>

        </section>              

        <section className="container p-2">
          <ul className="list-unstyled">
            {
              this.state.photos.map(photo => {
                return (
                <li key={photo.id} className="media pt-2">
                  <img src={photo.thumbnailUrl} alt="" className="mr-3" />
                  <div className="media-body">
                    <h6 className="mt-0 md-1">{photo.title}</h6>
                    <p>Título: {photo.title}</p>
                  </div>
                </li> 
                )
              })
            }
          </ul>
        </section>

        <footer className="container col-12 pt-3 footer footer bg-dark text-light text-center">          
          <div className="container col-12 col-md-4 d-flex justify-content-around">
              <i className="fab fa-facebook-square"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-google-plus-square"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter-square"></i>         
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
