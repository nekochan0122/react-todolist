import { useContext } from 'react'
import List from '@mui/material/List'
import { todoCtx } from '../'
import { ITodoCtx } from '../typings'
import Item from './Item'

const MyList = () => {
  const {
    state: { todoList },
  } = useContext(todoCtx) as ITodoCtx

  return (
    <List disablePadding sx={{ width: '100%' }}>
      {todoList.map(todo => (
        <Item key={todo.id} todo={todo} />
      ))}
    </List>
  )
}

export default MyList
