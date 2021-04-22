// import './NewTask.css';
import {Component} from 'react'

class NewTasks extends Component{
    constructor(){
      super()
      this.state = {
        input: '',
        input2: ''
      }
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        let {value, name} = e.target
        this.setState({
            [name]: value
        })
    }
  
  render(){
  
    return (
      <div className="NewTasks">
          <input name='input' value={this.state.input} onChange={this.handleChange} />
          {/* <input name='input2' value={this.state.input2} onChange={this.handleChange} /> */}
          <button onClick={()=> {
              this.props.submit(this.state.input)
              this.setState({input:''})
              }}>Submit</button>
      </div>
    );
  }
  }
  
  export default NewTasks;
  