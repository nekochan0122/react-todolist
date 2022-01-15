import { FC, ReactElement, useContext } from 'react'
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

const Item: FC<IProps> = ({ todo }): ReactElement => {
  const { toggleTodo, removeTodo } = useContext(todoCtx) as ITodoCtx

  return (
    <>
      <ListItem disablePadding dense>
        <ListItemButton onClick={() => toggleTodo(todo.id)}>
          <ListItemIcon>
            <Checkbox checked={todo.completed} disableRipple />
          </ListItemIcon>
          <ListItemText>
            <Typography>{todo.content}</Typography>
          </ListItemText>
          <Button variant="outlined" onClick={() => removeTodo(todo.id)}>
            刪除
          </Button>
        </ListItemButton>
      </ListItem>
      <Divider />
    </>
  )
}

export default Item
