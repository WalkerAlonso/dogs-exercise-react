import React from "react";
import DogCardFav from './DogCardFav'


class Favorites extends React.Component{
    constructor(props) {
        super(props);

    }
    
    handleReset = () => {
        localStorage.clear();
        window.location.reload();
    }
    
    

    render(){

        return (
        <div className="homepage">
            <h1 className="homepage--title">
                These are your favorites dogs!
                <button className="homepage--button" onClick={() => this.handleReset()}>Clear LocalStorage</button>
            </h1>

            <div className="homepage--content">
                {
                    this.props.data.map((dog,i) => {
                        return <DogCardFav key={i} url={this.props.data[i].url} />			
                    })
                }
            </div>
        </div>)
    }
}
  
  export default Favorites;


