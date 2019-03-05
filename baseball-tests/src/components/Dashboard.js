import React from 'react';

import Button from '@material-ui/core/Button';

class Dashboard extends React.Component{
    render(){
        return(
            <>
            <h1>Welcome, Baseball Personnel!</h1>
            <Button>Strike</Button>
            <Button>Ball</Button>
            <Button>Foul</Button>
            <Button>Hit</Button>
            </>
        );
    }
}

export default Dashboard;