'use strict';

class Header extends RTCIceCandidate.Component {
    
    constructor(props){
        super(props)
    }

    render(){
    
        return (
            <header>
                <h1>{props.brand}</h1>
            </header>
        );
    }
}