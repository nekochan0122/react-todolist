import { FC, ReactElement } from 'react'
import Container from '@mui/material/Container'
import { TodoList } from './components/TodoList'

const App: FC = (): ReactElement => {
  return (
    <Container sx={{ paddingTop: '4rem' }}>
      <TodoList />
    </Container>
  )
}

export default App
