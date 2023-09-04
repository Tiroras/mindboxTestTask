import React from 'react'
import { Todo } from './Todo'
import { type TodoType } from '../../types'
import styles from './List.module.scss'

interface IProps {
  todos: TodoType[]
  checkTodo: (todoId: number) => void
}

export const List: React.FC<IProps> = ({ todos, checkTodo }) => {
  return (
    <div className={styles.list}>
      {todos.map(todo => <Todo key={todo.id} id={todo.id} status={todo.status} value={todo.value} checkTodo={checkTodo} />)}
    </div>
  )
}
