import React from 'react';


class Counter extends React.Component{


    constructor() {
        super();
        this.state = {counter: 0};
    }

    doClick = () => {
        this.setState(s => ({counter: s.counter + 1}));
    }


    componentDidMount() {
        console.log('Loaded');
    }


    render() {                                  // render grazina 
        return (
            <>
                <div>{this.state.counter}: {this.props.when}</div>
                <button onClick={this.doClick}>GO + 1</button>
            </>
        )
    }

}


export default Counter;