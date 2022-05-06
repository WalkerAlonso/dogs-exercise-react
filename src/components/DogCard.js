import React from 'react';

/* Improvements: Implement Lazy Loading for big files*/ 
/* Autoplay disabled for videos */
class DogCard  extends React.Component {
    render(){
        let value = ""
        if(this.props.url.includes(".mp4")){
            value = (<video alt='dog'  className='dogcard--image'>
                        <source src={this.props.url}type="video/mp4"></source>
                    </video>
                )
        }else if(this.props.url.includes(".webm")){
            value = (<video alt='dog'  className='dogcard--image'>
                        <source src={this.props.url}type="video/webm"></source>
                    </video>
                )
        }
        else{
            value = <img alt='dog' src={this.props.url} className='dogcard--image' />
        }

        return (
            <div className='dogcard' onClick={() => this.props.onClick(this.props.id)}>
                        
                {value}
                
            </div>
        );
    }
} 

export default DogCard;