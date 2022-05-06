import React, {Component} from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './components/HomePage';
import Favorites from './components/Favorites';

class App extends Component {
  
	constructor(){
		super(); 
		this.state = {
			dogs: [],
      dogsFavorited: []
		}

	}

    
  setStateOfParent = (data) => {
    if (data.length == 0){
      this.setState({dogs: []})
      this.setState(previousState => ({
        dogs: [...previousState.dogs, data]
        }))
      this.setState(previousState => ({
        dogs: [...previousState.dogs.shift()]
        }))
    }else{
      this.setState(previousState => ({
        dogs: [...previousState.dogs, data]
        }))
    }
  }

  
  setStateOfParentFavorites = (data) => {
    console.log("IN FAVORITES FUNCTION:")
    console.log(data)
      this.setState(previousState => ({
        dogsFavorited: [...previousState.dogsFavorited, data]
        }))
    
  }

	componentDidMount(){
    let value = JSON.parse(localStorage.getItem('fav'))
    if (value){
      this.setState({dogsFavorited: value})
    }

    for (let i = 0; i < 6; i++) {
      fetch('https://random.dog/woof.json')
        .then(response => response.json()) //Convert the response to JSON
        .then(data => this.setState(previousState => ({
          dogs: [...previousState.dogs, data]
          })))
    }
  }
	
  
	render(){
		const { dogs, dogsFavorited } = this.state;
    
		return (
      <BrowserRouter>
        <Routes>
        <Route exact path='/' element={<HomePage data={dogs} favorites={dogsFavorited} setStateOfParent={this.setStateOfParent} setStateOfParentFavorites={this.setStateOfParentFavorites}/>}   />
        <Route exact path='/favorites'  element={<Favorites data={dogsFavorited} />}/>
        </Routes>
      </BrowserRouter>
    );
    /*        
*/
	}
}

export default App;