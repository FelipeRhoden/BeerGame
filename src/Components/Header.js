'use strict';

class Header extends React.Component {
    
    constructor(props){
        super(props)
    }

    render(){
    
        return (
            <header>
                <h1>{this.props.brand}</h1>
            </header>
        );
    }
}