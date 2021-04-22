import {Component} from 'react';
import './App.css';
import NewTask from './components/NewTasks';
import TodoList from './components/TodoList';

class App extends Component{
  constructor(){
    super()
    this.state = {
      list:[]
    }
    this.submit = this.submit.bind(this)
    this.deleteFn = this.deleteFn.bind(this)
  }

  submit(listItem){
    this.setState({
      list:[...this.state.list, listItem]
    })
  }

  deleteFn(i){
    const {list} = this.state
    const arr = list.slice()
    arr.splice(i,1)
    this.setState({
      list: arr
    })
  }

render(){

  return (
    <div className="App">
    <NewTask submit={this.submit}/>
    <TodoList deleteFn={this.deleteFn} list={this.state.list}/>
    </div>
  );
}
}

export default App;
