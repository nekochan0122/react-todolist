import { useReducer, useEffect, useCallback } from 'react'
import { reducer, init } from './reducer'
import {
  IState,
  ACTION_TYPE,
  TAddTodo,
  TRemoveTodo,
  TToggleTodo,
  TReverseTodoList,
  TResetTodoList,
} from './typings'

const {
  SET_TODOLIST,
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  REVERSE_TODOLIST,
  RESET_TODOLIST,
  UPDATE_COMPLETED,
} = ACTION_TYPE

interface IReturn {
  state: IState
  addTodo: TAddTodo
  removeTodo: TRemoveTodo
  toggleTodo: TToggleTodo
  reverseTodoList: TReverseTodoList
  resetTodoList: TResetTodoList
}

const useTodoReducer = (): IReturn => {
  // 對於以不同方式修改同一個狀態，且將修改狀態的回調交給子組件，使用 useReducer 會是更好的選擇。
  const [state, dispatch] = useReducer(reducer, [], init)

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('todolist') ?? '[]')

    dispatch({
      type: SET_TODOLIST,
      payload: localData,
    })
  }, [])

  useEffect(() => {
    dispatch({
      type: UPDATE_COMPLETED,
      payload: null,
    })

    localStorage.setItem('todolist', JSON.stringify(state.todoList))
  }, [state.todoList])

  const addTodo = useCallback<TAddTodo>(todo => {
    dispatch({
      type: ADD_TODO,
      payload: todo,
    })
  }, [])

  const removeTodo = useCallback<TRemoveTodo>(id => {
    dispatch({
      type: REMOVE_TODO,
      payload: id,
    })
  }, [])

  const toggleTodo = useCallback<TToggleTodo>(id => {
    dispatch({
      type: TOGGLE_TODO,
      payload: id,
    })
  }, [])

  const reverseTodoList = useCallback<TReverseTodoList>(completed => {
    dispatch({
      type: REVERSE_TODOLIST,
      payload: completed,
    })
  }, [])

  const resetTodoList = useCallback<TResetTodoList>(todoList => {
    dispatch({
      type: RESET_TODOLIST,
      payload: todoList,
    })
  }, [])

  return { state, addTodo, removeTodo, toggleTodo, reverseTodoList, resetTodoList }
}

export default useTodoReducer
