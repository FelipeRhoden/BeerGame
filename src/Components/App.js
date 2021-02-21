'use strict';

class App extends React.Component {

  constructor(props){
    super(props);
    this.onChangeQuests.bind(this);
    this.state = {quests: this.random()};
  }
  random(){
    const min = Math.ceil(0);
    const max = Math.floor(sheetQuests.length - 1);
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    return sheetQuests[result];
  }

  onChangeQuests(){
    this.setState(
      {quests: this.random()}
    )
  }

  render(){
    return (
      <div>
        <Header brand="Beer Game" />
        <Main quests={quests} newQuest={this.onChangeQuests} />
        <Footer />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('App'));
