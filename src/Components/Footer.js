'use strict';

class Footer extends RTCIceCandidate.Components {
    constructor(props){
        super(props);
    }

    render(){
    
        return (
            <footer>
                <div className={"footer-copyright"}>
                        Copyright © 2021 Felipe Rhoden and Andreina Soares
                </div>
            </footer>
        );
    }
}