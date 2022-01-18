import { useContext, useCallback } from 'react'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { todoCtx } from '../'
import { ITodo, ITodoCtx } from '../typings'

interface IProps {
  todo: ITodo
}

const Item = ({ todo }: IProps) => {
  const { toggleTodo, removeTodo } = useContext(todoCtx) as ITodoCtx

  const toggleHandler = useCallback(() => toggleTodo(todo.id), [])

  const removeHandler = useCallback(() => removeTodo(todo.id), [])

  return (
    <>
      <ListItem disablePadding dense>
        <ListItemButton onClick={toggleHandler}>
          <ListItemIcon>
            <Checkbox checked={todo.completed} disableRipple />
          </ListItemIcon>
          <ListItemText>
            <Typography>{todo.content}</Typography>
          </ListItemText>
          <Button variant="outlined" onClick={removeHandler}>
            刪除
          </Button>
        </ListItemButton>
      </ListItem>
      <Divider />
    </>
  )
}

export default Item
