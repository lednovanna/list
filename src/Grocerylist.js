import {Component} from "react";
import chek from './chek.jpg';

export class Grocerylist extends Component {
    state = {
        userInput: "",
        grocerylist: [],
    }

    onChangeEvent(e) {
                this.setState({userInput: e}) 
       }          

   addItem(input) {
    if(input === '' ) {
        alert("Please enter an item")
    } else{
    let listArray = this.state.grocerylist;
    listArray.push(input)
    this.setState ({grocerylist: listArray, userInput: ''})
    }
   }  
   
   deleteItem() {
    let listArray = this.state.grocerylist;
    listArray = [];
    this.setState({grocerylist: listArray})
   }
   crossedWord(event) {
    const li = event.target;
    li.classList.toggle('crossed');
   }    
   onFormSubmit(e) {
    e.preventDefault();
   }    

    render () {
        return (
            <div>
                <form onSubmit = {this.onFormSubmit}>
            <div className="container">
                <input type="text" placeholder = "What do you want to buy today?"
            onChange={(e) => {this.onChangeEvent(e.target.value)}}
        value = {this.state.userInput}/>

           </div>
          
           <div className="container">
            <button onClick = {() => this.addItem(this.state.userInput)} className="add">Add</button>
           </div>

           <ul>
            {this.state.grocerylist.map((item,index) => (
                <li onClick={this.crossedWord} key={index}>
                    <img src={chek} width = "40px" alt="check"/>
                    {item}</li>
             ))}
           </ul>
           <div className="container">
           <button onClick={() => this.deleteItem()} className="delete">Delete</button>
           </div>
           </form>
            </div> 
        )
    }
}
