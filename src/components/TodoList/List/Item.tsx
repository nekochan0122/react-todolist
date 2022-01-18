import { useContext, useCallback } from 'react'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
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
        <ListItemButton aria-label="reverse completed button" onClick={toggleHandler}>
          <ListItemIcon aria-label="reverse completed icon">
            <Checkbox checked={todo.completed} disableRipple />
          </ListItemIcon>
          <ListItemText aria-label="content">
            <Typography>{todo.content}</Typography>
          </ListItemText>
          <IconButton aria-label="delete button" color="default" onClick={removeHandler}>
            <DeleteIcon />
          </IconButton>
        </ListItemButton>
      </ListItem>
      <Divider />
    </>
  )
}

export default Item
