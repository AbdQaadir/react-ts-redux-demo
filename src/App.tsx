import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

import {ADD_ITEM_TO_TODO, REMOVE_ITEM_TO_TODO} from './redux/action-creators';
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from './redux/store'

import './App.css';

function App() {
  const [item, setItem] = useState("");
  const todo: [] = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    //Check if the value of item is truthy before dispatching an action
    if(item){
      const id:string = uuidv4()
      dispatch(ADD_ITEM_TO_TODO(id, item));
      setItem("");
    }
  };

  const handleRemove = (id:string) => {
    dispatch(REMOVE_ITEM_TO_TODO(id));
  }
  return (
    <div className="container">
      <header>
        <h5>React, Redux and TS Todo App</h5>
        <input type="text" name="todo-item" value={item} onChange={(e) => setItem(e.target.value)}/>
        <button onClick={() => handleSubmit()}>Add Todo</button>
      </header>
      <main>
        <ul>
          {todo?.map((item: {id: string, text: string}) => {
            return (
              <li key={item.id}>
                  <span>{item.text}</span>
                  <button onClick={() => handleRemove(item.id)}>Mark Complete</button>
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
