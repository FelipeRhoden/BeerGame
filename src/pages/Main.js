import React from 'react';

export default function Main(props){

    const [status, onChangeStatus] = React.useState(false);


    const refresh = () => {
        onChangeStatus(false);
        for (const quest of props.quests.answers) {
            let element = document.getElementById(quest.value);
            element.checked = false;
        }
        props.newQuest();
    }

    const quests =  props.quests.answers.map(
        (answer)=>(
            <p key={answer.value}>
                
                <label >
                    
                    <input name="quests" type="radio" id={answer.value} onChange={() => onChangeStatus(true)}/>
                    {!status ? 
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
            <p>{props.quests.quest}</p>
            <form>
                {quests}
            </form>
            <button 
                className={"waves-effect waves-light btn"} 
                onClick={refresh}
            >
                Proxima
            </button>
        </div>
    );
}