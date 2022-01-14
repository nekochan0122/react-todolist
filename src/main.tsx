import { StrictMode, version } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)

console.log(`React: ${version} | Project: ${process.env.NODE_ENV} | By NekoChanTaiwan`)
