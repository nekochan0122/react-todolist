export interface ITodo {
  id: string
  content: string
  completed: boolean
}

export interface IState {
  todoList: ITodo[]
  completed: number
}

export enum ACTION_TYPE {
  SET_TODOLIST = 'setTodoList',
  ADD_TODO = 'addTodo',
  REMOVE_TODO = 'removeTodo',
  TOGGLE_TODO = 'toggleTodo',
  REVERSE_TODOLIST = 'reverseTodoList',
  RESET_TODOLIST = 'resetTodoList',
  UPDATE_COMPLETED = 'updateCompleted',
}

export type TAddTodo = (todo: ITodo) => void
export type TRemoveTodo = (id: string) => void
export type TToggleTodo = (id: string) => void
export type TReverseTodoList = (completed: boolean) => void
export type TResetTodoList = (todoList: ITodo[]) => void

export interface ITodoCtx {
  state: IState
  addTodo: TAddTodo
  removeTodo: TRemoveTodo
  toggleTodo: TToggleTodo
  reverseTodoList: TReverseTodoList
  resetTodoList: TResetTodoList
}
