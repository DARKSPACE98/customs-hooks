import { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  }

export const useTodo = (initialState = []) => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ))
    }, [todos])
    
  
    const HandleNewTodo = (todo) =>{
  
      const action = {
        type: '[TODO] Add Todo',
        payload: todo
      }
  
      dispatch(action);
    
    }
  
    const HandleDeleteTodo = (id) =>{
      dispatch({
        type:'[TODO] Remove Todo',
        payload: id
      })
    
    }
  
    const HandleToggleTodo = (id) =>{
      dispatch({
        type:'[TODO] Toggle Todo',
        payload: id
      })
    }

    const todosCount =

        todos.length

    

    const pendingTodosCount =

        todos.filter(todo=>!todo.done).length

  return {
    todos, 
    HandleNewTodo,
    HandleDeleteTodo,
    HandleToggleTodo,
    todosCount,
    pendingTodosCount
 }

}

