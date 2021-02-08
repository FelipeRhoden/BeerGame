import * as React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import sheetQuests from "../utils/sheetQuests";

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import '../styles/global.css';

function App (){

  const random = () => {
    const min = Math.ceil(0);
    const max = Math.floor(sheetQuests.length - 1);
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    return sheetQuests[result];
  }

  const [quests, onChangeQuests] = React.useState(random());

  return (
    <>
      <Header brand={"Beer Game"} />
      <Main quests={quests} newQuest={() => onChangeQuests(random())}/>
      <Footer />
    </>
  );
}


export default App;