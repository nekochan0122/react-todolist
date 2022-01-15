import {
  FC,
  ReactElement,
  KeyboardEvent,
  useState,
  useContext,
  useRef,
  forwardRef,
  SyntheticEvent,
} from 'react'
import { nanoid } from 'nanoid'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { todoCtx } from '../'
import { ITodoCtx } from '../typings'

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const Input: FC = (): ReactElement => {
  const [alertText, setAlertText] = useState<string>('默認錯誤消息')
  const [open, setOpen] = useState<boolean>(false)

  const {
    state: { todoList },
    addTodo,
  } = useContext(todoCtx) as ITodoCtx

  const inputRef = useRef<HTMLInputElement>(null)

  const inputOnKeyUpHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.code === 'Enter') btnHandler()
  }

  const handleClick = (alertText: string): void => {
    setAlertText(alertText)
    setOpen(true)
  }

  const handleClose = (event?: SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') return

    setOpen(false)
  }

  const btnHandler = (): void => {
    if (!inputRef.current) return console.log('找不到 inputRef DOM 節點')

    const todoContent = inputRef.current.value.trim()

    if (todoList.find(todo => todo.content === todoContent)) return handleClick('該代辦事項已存在')

    if (!todoContent.length) return handleClick('請輸入有效內容的代辦事項')

    addTodo({
      id: nanoid(),
      content: todoContent,
      completed: false,
    })

    inputRef.current.value = ''
  }

  return (
    <>
      <Grid container columns={10} spacing={2}>
        <Grid item xs={8}>
          <TextField
            label="請輸入代辦事項"
            variant="outlined"
            onKeyUp={inputOnKeyUpHandler}
            inputRef={inputRef}
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            onClick={btnHandler}
            variant="contained"
            sx={{
              width: '100%',
              height: '100%',
            }}
          >
            新增
          </Button>
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {alertText}
        </Alert>
      </Snackbar>
    </>
  )
}

export default Input
