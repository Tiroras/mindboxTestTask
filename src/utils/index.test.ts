import { type TodoType } from '../types'
import { changeTodoStatus } from './changeTodoStatus'
import { getFilteredTodos } from './getFilteredTodos'

test('changeTodoStatus', () => {
  expect(changeTodoStatus('active')).toBe('completed')
  expect(changeTodoStatus('completed')).toBe('active')
})

test('getFilteredTodos', () => {
  const todos: TodoType[] = [
    {
      id: 1,
      status: 'active',
      value: '1'
    },
    {
      id: 2,
      status: 'active',
      value: '2'
    },
    {
      id: 3,
      status: 'active',
      value: '3'
    },
    {
      id: 4,
      status: 'active',
      value: '4'
    },
    {
      id: 5,
      status: 'completed',
      value: '5'
    },
    {
      id: 6,
      status: 'completed',
      value: '6'
    },
    {
      id: 7,
      status: 'completed',
      value: '7'
    }
  ]

  expect(getFilteredTodos(todos, 'all')).toHaveLength(7)
  expect(getFilteredTodos(todos, 'active')).toHaveLength(4)
  expect(getFilteredTodos(todos, 'completed')).toHaveLength(3)
})
