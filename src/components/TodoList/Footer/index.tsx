import { FC, ReactElement, useContext } from 'react'
import { todoCtx } from '../'
import { ITodoCtx } from '../typings'

const Footer: FC = (): ReactElement => {

  const { state: { todoList, completed }, reverseTodoList, resetTodoList } = useContext(todoCtx) as ITodoCtx

  return (
    <>
      <input
        type="checkbox"
        checked={completed === todoList.length}
        onChange={e => reverseTodoList(e.target.checked)}
      />
      <span>
        &nbsp;
        {completed} / {todoList.length}
        &nbsp;
      </span>
      <button onClick={() => resetTodoList([])}>重置</button>
    </>
  )
}

export default Footer
