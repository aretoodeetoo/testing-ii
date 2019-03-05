import React from 'react';
import Display from './Display';

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
            <div className="dashboard">
            <h1>Welcome, Baseball Personnel!</h1>
                <Button data-testid="strike-button" onClick={() => this.strikeIncrement()}>Strike</Button>
                <Button data-testid="ball-button" onClick={() => this.ballIncrement()}>Ball</Button>
                <Button data-testid="foul-button" onClick={() => this.foulIncrement()}>Foul</Button>
                <Button data-testid="hit-button" onClick={() => this.hitIncrement()}>Hit</Button>
            </div>
            <div className="display">
                <Display
                    balls={this.state.ballCount}
                    strikes={this.state.strikeCount}
                />
            </div>
            </>
        );
    }
}

export default Dashboard;