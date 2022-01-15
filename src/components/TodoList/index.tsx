import { FC, ReactElement, createContext, version } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import useTodoReducer from './useTodoReducer'
import Input from './Input'
import List from './List'
import Footer from './Footer'
import { ITodoCtx } from './typings'

const todoCtx = createContext<ITodoCtx | null>(null)

const TodoList: FC = (): ReactElement => {
  const { state, addTodo, removeTodo, toggleTodo, reverseTodoList, resetTodoList } =
    useTodoReducer()

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
      <Grid container direction="column" columns={10} sx={{ userSelect: 'none' }}>
        <Grid item xs={2}>
          <Grid container spacing={2} sx={{ alignItems: 'center' }}>
            <Grid item>
              <Typography variant="h3">TodoList</Typography>
            </Grid>
            <Grid item>React {version}</Grid>
          </Grid>
          <Typography variant="subtitle1"></Typography>
        </Grid>
        <Grid item xs={8}>
          <Input />
          <List />
          {state.todoList.length > 0 && <Footer />}
        </Grid>
      </Grid>
    </todoCtx.Provider>
  )
}

export { TodoList, todoCtx }
