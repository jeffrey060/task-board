import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from './Card'
class CardList extends React.Component{
    render(){
      return(
        <div className="container">
      <div className="row text-center">
      {this.props.boards.map((b)=>{
        const boardIndex=this.props.boards.indexOf(b);
        return(
           <Card key={b.name} b={b} boardIndex={boardIndex} delete={this.props.delete}
           addTask={this.props.addTask} moveLeft={this.props.moveLeft}
           moveRight={this.props.moveRight}/>
          )
          ;})}
      </div>
      </div>
      );
    }
};

export default CardList;
