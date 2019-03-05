import React from 'react';
import styled from 'styled-components';

const CountWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
`

const CountDiv = styled.div`
    display: flex;
    flex-direction: column;
`

class Display extends React.Component{
    render(){
        return(
            <>
            <h1>Let's Play Ball!</h1>
            <h2>Check Out The Score:</h2>
            <CountWrapper>
                <CountDiv>
                    <h3>Strikes</h3>
                    <div data-testid="strike-display">{this.props.strikes}</div>
                </CountDiv>
                <CountDiv>
                    <h3>Balls</h3>
                    <div>{this.props.balls} balls</div>
                </CountDiv>
            </CountWrapper>
            </>
        );
    }
}

export default Display;