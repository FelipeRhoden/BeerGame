'use strict';

class Main extends React.Component {
    
    constructor(props){
        super(props);
        state = {
            status : false
        }

        this.onChangeStatus.bind(this);
        this.refresh.bind(this);
    }

    onChangeStatus(status){
        this.setState({status});
    }

    refresh(){
        this.onChangeStatus(false);
        for (const quest of props.quests.answers) {
            let element = document.getElementById(quest.value);
            element.checked = false;
        }
        props.newQuest();
    }

    render(){

        const quests = this.props.quests.answers.map(
            (answer)=>(
                <p key={answer.value}>
                    
                    <label >
                        
                        <input name="quests" type="radio" id={answer.value} onChange={() => this.onChangeStatus(true)}/>
                        {!this.state.status ? 
                            <span>{answer.value}</span>
                            :<span className={answer.validate ? "green-text" : "red-text"}>
                                {answer.value}
                                {answer.validate?
                                    " Certa"
                                    :" Errada"
                                }
                            </span>
                        }
                    </label>
                </p>
            )
        );
        
        return (
            <div>
                <p>{this.props.quests.quest}</p>
                <form>
                    {quests}
                </form>
                <button 
                    className={"waves-effect waves-light btn"} 
                    onClick={this.refresh}
                >
                    Proxima
                </button>
            </div>
       );
    }
}