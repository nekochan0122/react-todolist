import { FC, ReactElement, useContext } from 'react'
import { todoCtx } from '../'
import { ITodo, ITodoCtx } from '../typings'

interface IProps {
  todo: ITodo
}

const Item: FC<IProps> = ({ todo }): ReactElement => {
  const { toggleTodo, removeTodo } = useContext(todoCtx) as ITodoCtx

  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
      <span style={{ textDecorationLine: todo.completed ? 'line-through' : 'none' }}>
        {todo.content}
      </span>
      <button onClick={() => removeTodo(todo.id)}>刪除</button>
    </li>
  )
}

export default Item
