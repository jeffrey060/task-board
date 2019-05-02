import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import CardList from "./components/CardList"
class App extends Component {
 state = { boards : [{name:"9:00 - 10:00",tasks:[]},{name:"10:00 - 12:00",tasks:[]}
 ,{name:"12:00 - 14:00",tasks:[]},{name:"14:00 - 16:00",tasks:[]}]
 }
 componentDidMount = () => {
    if (localStorage.getItem("boards")){
    const json =localStorage.getItem("boards");
    const boards =JSON.parse(json);
    this.setState({ boards:boards});}
  }
 componentDidUpdate = () => {
    const boards = JSON.stringify(this.state.boards);
    localStorage.setItem("boards", boards);
  }
 delete=(boardIndex,taskIndex)=>{
   let tempBoards = [...this.state.boards];
   tempBoards[boardIndex].tasks.splice(taskIndex,1);
   this.setState({boards:tempBoards});
  }
  moveLeft=async(boardIndex,taskIndex,t)=>{
    let tempBoards = [...this.state.boards];
     tempBoards[boardIndex].tasks.splice(taskIndex,1);
     tempBoards[boardIndex-1].tasks.push(t);
     this.setState({boards:tempBoards});
  }
  moveRight=async(boardIndex,taskIndex,t)=>{
    let tempBoards = [...this.state.boards];
    tempBoards[boardIndex].tasks.splice(taskIndex,1);
    tempBoards[boardIndex+1].tasks.push(t);
    this.setState({boards:tempBoards});
  }
addTask=async(event,boardIndex)=>{
  const taskInfo = event.target.elements.task.value;
  if(taskInfo){
  let tempBoards = [...this.state.boards];
  tempBoards[boardIndex].tasks.push(taskInfo);

  this.setState({boards:tempBoards});}
}
render() {
    return (
      <div className="App">
        <header >
          <h1 className="App-title item3">Your Tasks Today</h1>
        </header>
         <CardList boards= {this.state.boards} delete={this.delete}
         addTask={this.addTask} moveLeft={this.moveLeft}
         moveRight={this.moveRight}/>
        <h6 className="item3 py-2"> Tasks can be preserved in your localstorage</h6>
       </div>
    );
  }
}

export default App;
