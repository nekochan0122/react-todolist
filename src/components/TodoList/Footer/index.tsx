import { FC, ReactElement, useContext } from 'react'
import Grid from '@mui/material/Grid'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { todoCtx } from '../'
import { ITodoCtx } from '../typings'

const Footer: FC = (): ReactElement => {
  const {
    state: { todoList, completed },
    reverseTodoList,
    resetTodoList,
  } = useContext(todoCtx) as ITodoCtx

  return (
    <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
      <Grid item>
        <Checkbox
          checked={completed === todoList.length}
          onChange={e => reverseTodoList(e.target.checked)}
        />
        <Typography variant="button">
          {completed} / {todoList.length}
        </Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={() => resetTodoList([])}>
          重置
        </Button>
      </Grid>
    </Grid>
  )
}

export default Footer
