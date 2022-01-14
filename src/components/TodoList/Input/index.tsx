import { FC, ReactElement, KeyboardEvent, useContext, useRef } from 'react'
import { nanoid } from 'nanoid'
import { todoCtx } from '../'
import { ITodoCtx } from '../typings'

const Input: FC = (): ReactElement => {
  const { state: { todoList }, addTodo } = useContext(todoCtx) as ITodoCtx

  const inputRef = useRef<HTMLInputElement>(null)

  const inputOnKeyUpHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.code === 'Enter') btnHandler()
  }

  const btnHandler = (): void => {
    if (!inputRef.current) return console.log('找不到 inputRef DOM 節點')

    const todoContent = inputRef.current.value.trim()

    if (todoList.find(todo => todo.content === todoContent)) return alert('該代辦事項已存在')

    if (!todoContent.length) return alert('請輸入有效內容的代辦事項')

    addTodo({
      id: nanoid(),
      content: todoContent,
      completed: false,
    })

    inputRef.current.value = ''
  }

  return (
    <>
      <input
        onKeyUp={inputOnKeyUpHandler}
        type="text"
        placeholder="請輸入代辦事項"
        ref={inputRef}
      />
      <button onClick={btnHandler}>新增</button>
    </>
  )
}

export default Input
