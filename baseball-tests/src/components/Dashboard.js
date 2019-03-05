import React from 'react';

import Button from '@material-ui/core/Button';

class Dashboard extends React.Component{
    state = {
        strikeCount: 0,
        ballCount: 0,
        foulCount: 0,
        hitCount: 0,
    };

    strikeIncrement = () => {
        if (this.state.strikeCount === 3) {
            this.setState({ strikeCount: 0, ballCount: 0})
        } else {
        this.setState({ strikeCount: this.state.strikeCount + 1 });
        }
    }

    ballIncrement = () => {
        if (this.state.ballCount === 4) {
            this.setState({ strikeCount: 0, ballCount: 0})
        } else {
        this.setState({ ballCount: this.state.ballCount + 1 });
        }
    }

    foulIncrement = () => {
        this.setState({ foulCount: this.state.foulCount + 1 });
    }

    hitIncrement = () => {
        if (this.state.hitIncrement === 1){
            this.setState({ strikeCount: 0, ballCount: 0 });
        } else {
        this.setState({ hitCount: this.state.hitCount + 1 });
        }
    }

    render(){
        return(
            <>
            <h1>Welcome, Baseball Personnel!</h1>
            <Button onClick={() => this.strikeIncrement()}>Strike</Button>
            <Button onClick={() => this.ballIncrement()}>Ball</Button>
            <Button onClick={() => this.foulIncrement()}>Foul</Button>
            <Button onClick={() => this.hitIncrement()}>Hit</Button>
            </>
        );
    }
}

export default Dashboard;