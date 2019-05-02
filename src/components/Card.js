import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class Card extends React.Component{
    render(){
      const{name,tasks}=this.props.b;
      return(
        <div className="board__container col-lg-3 col-md-6 col-sm-6 " >
          <div  className="board__box mx-auto text-center ">
             <div>
              <h6 className="small_title">{this.props.b.name}</h6>
             {this.props.b.tasks.map((t)=>{
               const key = Math.random() * (100) + 1;
               const taskIndex=this.props.b.tasks.indexOf(t);
               return(
                 <div key={key} className="container2 d-flex ">
                   <div>
                      {this.props.boardIndex>0 ?
                      (<button className="form__button2 item1  "
                       onClick={()=>this.props.moveLeft(this.props.boardIndex,taskIndex,t)}>
                         <i className="fas fa-chevron-left"></i>
                      </button>):
                      (<i/>)}
                   </div>
                   <div className="flex-grow-1 ml-1 px-1  text-left ">
                       {t.length<10 ? `${t}`:`${t.substring(0,15)}...`}
                   </div>
                   <div className=" item2">
                       {this.props.boardIndex<3?
                        (<button className="form__button2 "
                         onClick={()=>this.props.moveRight(this.props.boardIndex,taskIndex,t)}>
                           <i className="fas fa-chevron-right"></i>
                        </button>):
                        (<i/>)}
                    </div>
                   <div className="item2">
                       <button className="form__button2  " onClick={()=>this.props.delete(this.props.boardIndex,taskIndex,t)}>
                          <i className="fas fa-trash"></i>
                       </button>
                   </div>
                </div>
             );})}
            </div >
             <form className="form-wraper" onSubmit={(e)=>this.props.addTask(e,this.props.boardIndex)} style={{marginBottom:"2rem"} }>
              <input className="form__input " type="text" name="task"/>
              <button className="form__button mx-1">+</button>
             </form>
           </div>
          </div>
      );
    }
};

export default Card;
