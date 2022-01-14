import { ITodo, IState, ACTION_TYPE } from './typings'

interface IAction {
  type: ACTION_TYPE
  payload: ITodo | ITodo[] | string | boolean | null
}

const {
  SET_TODOLIST,
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  REVERSE_TODOLIST,
  RESET_TODOLIST,
  UPDATE_COMPLETED,
} = ACTION_TYPE

// 惰性初始化的好處 : 可以讓初始邏輯函式寫在 reducer 外面，且在 useReducer 初始狀態時復用函式
function init(initialTodoList: ITodo[]): IState {
  return {
    todoList: initialTodoList,
    completed: 0,
  }
}

function reducer(state: IState, action: IAction): IState {
  const { type, payload } = action
  const { todoList } = state

  switch (type) {
    case SET_TODOLIST:
      return {
        ...state,
        todoList: payload as ITodo[],
      }

    case ADD_TODO:
      return {
        ...state,
        todoList: [payload as ITodo, ...todoList],
      }

    case REMOVE_TODO:
      return {
        ...state,
        todoList: todoList.filter(todo => todo.id !== (payload as string)),
      }

    case TOGGLE_TODO:
      return {
        ...state,
        todoList: todoList.map(todo =>
          todo.id === (payload as string)
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : todo
        ),
      }

    case REVERSE_TODOLIST:
      return {
        ...state,
        todoList: todoList.map(todo => ({
          ...todo,
          completed: payload as boolean,
        })),
      }

    case RESET_TODOLIST:
      return init(payload as ITodo[])

    case UPDATE_COMPLETED:
      return {
        ...state,
        completed: todoList.reduce((sum, todo) => sum + (todo.completed ? 1 : 0), 0),
      }

    default:
      throw new Error(`Unknown ${type} action type.`)
  }
}

export { reducer, init }
