// import './Todo.css';

function Todo(props) {



  return (
    <div className="Todo">
        <li>{props.it}</li>
        <button onClick={()=>props.deleteFn(props.i)}>x</button>
    </div>
  );

}

export default Todo