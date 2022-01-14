import { FC, ReactElement } from 'react'
import { TodoList } from './components/TodoList'

const App: FC = (): ReactElement => {
  return (
    <>
      <TodoList />
    </>
  )
}

export default App
