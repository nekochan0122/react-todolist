import { useContext, useCallback, ChangeEvent } from 'react'
import Grid from '@mui/material/Grid'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { todoCtx } from '../'
import { ITodoCtx } from '../typings'

const Footer = () => {
  const {
    state: { todoList, completed },
    reverseTodoList,
    resetTodoList,
  } = useContext(todoCtx) as ITodoCtx

  const reverseTodoHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => reverseTodoList(e.target.checked),
    []
  )

  const resetTodoHandler = useCallback(() => resetTodoList(), [])

  return (
    <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
      <Grid item>
        <Checkbox checked={completed === todoList.length} onChange={reverseTodoHandler} />
        <Typography variant="button">
          {completed} / {todoList.length}
        </Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={resetTodoHandler}>
          重置
        </Button>
      </Grid>
    </Grid>
  )
}

export default Footer
