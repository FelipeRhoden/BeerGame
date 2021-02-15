'use strict';

function App (){

  const random = () => {
    const min = Math.ceil(0);
    const max = Math.floor(sheetQuests.length - 1);
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    return sheetQuests[result];
  }

  const [quests, onChangeQuests] = React.useState(random());

  return (
    <div>
      {Header({brand:"Beer Game"})}
      {Main({quests: quests, newQuest:() => onChangeQuests(random())})}
      {Footer}
    </div>
  );
}


ReactDOM.render(App(), document.getElementById('App'));
