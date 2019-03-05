import React from 'react';

class Display extends React.Component{
    render(){
        return(
            <>
            <h1>Let's Play Ball!</h1>
            <h2>Check Out The Score:</h2>
            <div className="countWrapper">
                <h3>Balls</h3>
                <div>{this.props.balls}</div>
                <h3>Strikes</h3>
                <div>{this.props.strikes}</div>
            </div>
            </>
        );
    }
}

export default Display;