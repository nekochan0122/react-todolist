import { FC, ReactElement, useContext } from 'react'
import { todoCtx } from '../'
import { ITodoCtx } from '../typings'
import Item from './Item'

const List: FC = (): ReactElement => {
  const { state: { todoList } } = useContext(todoCtx) as ITodoCtx

  return (
    <ul>
      {todoList.map(todo => (
        <Item key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default List
