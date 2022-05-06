import React from "react";
import DogCard from './DogCard'

class HomePage extends React.Component{
    constructor(props) {
        super(props);
        this.handleClickDogs.bind(this);
        this.handleClickLoad.bind(this);
    }
    
    handleClickLoad = () => {
        for (let i = 0; i < 6; i++) {
            fetch('https://random.dog/woof.json')
              .then(response => response.json()) 
              .then(data => this.props.setStateOfParent(data))
          }
    }

    handleClickRefresh = () => {
        this.props.setStateOfParent([])
        for (let i = 0; i < 6; i++) {
            fetch('https://random.dog/woof.json')
              .then(response => response.json()) 
              .then(data => this.props.setStateOfParent(data))
          }
    }

    handleClickDogs (i){
        console.log('FAVORITES:')
        console.log(i)
        console.log(this.props.favorites)
        this.props.setStateOfParentFavorites(this.props.data[i])
        
        localStorage.setItem('fav', JSON.stringify(this.props.favorites))
        window.alert("Added to Favorites");

    }


    render(){
        return (
        <div className="homepage">
            <h1 className="homepage--title">
                Welcome to WoofLand - Click to Pick your Favorite Dogs!
                <button className="homepage--button" onClick={() => this.handleClickLoad()}>Add More</button>
                <button className="homepage--button" onClick={() => this.handleClickRefresh()}>Refresh</button>
            </h1>

            <div className="homepage--content">
                {
                    //Iterating throw the array of objects of robots.js
                    this.props.data.map((dog,i) => {
                        return <DogCard key={i} url={this.props.data[i].url} id={i} onClick={(id) => this.handleClickDogs(id)}/>			
                    })
                }
            </div>
        </div>)
    }
}

export default HomePage;