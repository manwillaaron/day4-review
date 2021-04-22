// import './TodoList.css'

import Todo from "./Todo";

function TodoList({list, deleteFn}) {

console.log(list)

  return (
    <div className="TodoList">
        {list.map((it,i) => <Todo deleteFn={deleteFn} key={i} i={i} it={it}/>)}
    </div>
  );

}

export default TodoList