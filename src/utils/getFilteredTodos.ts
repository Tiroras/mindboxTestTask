import { type FilterType, type TodoType } from '../types'

export const getFilteredTodos = (todos: TodoType[], filter: FilterType) => {
  switch (filter) {
    case 'all': return todos
    case 'active': return todos.filter(todo => todo.status === 'active')
    case 'completed': return todos.filter(todo => todo.status === 'completed')
    default: return []
  }
}
