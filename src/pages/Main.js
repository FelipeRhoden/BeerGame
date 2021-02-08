import React from 'react';

export default function Main(props){

    const [status, onChangeStatus] = React.useState(false);


    const refresh = () => {
        onChangeStatus(false);
        for (const quest of props.quests) {
            let element = document.getElementById(quest.value);
            element.checked = false;
        }
        props.newQuest();
    }

    const quests =  props.quests.map(
        (quest)=>(
            <p key={quest.value}>
                
                <label >
                    
                    <input name="quests" type="radio" id={quest.value} onChange={() => onChangeStatus(true)}/>
                    {!status ? 
                        <span>{quest.value}</span>
                        :<span className={quest.validate ? "green-text" : "red-text"}>
                            {quest.value}
                            {quest.validate?
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