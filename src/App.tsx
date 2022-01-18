import Container from '@mui/material/Container'
import { TodoList } from './components/TodoList'

const App = () => {
  return (
    <Container sx={{ paddingTop: '4rem' }}>
      <TodoList />
    </Container>
  )
}

export default App
