import { FC, ReactElement, createContext } from 'react'
import useTodoReducer from './useTodoReducer'
import Input from './Input'
import List from './List'
import Footer from './Footer'
import { ITodoCtx } from './typings'

const todoCtx = createContext<ITodoCtx | null>(null)

const TodoList: FC = (): ReactElement => {
  const { state, addTodo, removeTodo, toggleTodo, reverseTodoList, resetTodoList } = useTodoReducer()

  return (
    <todoCtx.Provider
      value={{
        state,
        addTodo,
        removeTodo,
        toggleTodo,
        reverseTodoList,
        resetTodoList,
      }}
    >
      <h1>TodoList</h1>
      <Input />
      <List />
      {state.todoList.length > 0 && <Footer />}
    </todoCtx.Provider>
  )
}

export { TodoList, todoCtx }
