import React, { memo } from 'react'
import cn from 'classnames'
import { type Status } from '../../../types'
import styles from './Todo.module.scss'

interface IProps {
  id: number
  status: Status
  value: string
  checkTodo: (todoId: number) => void
}

export const Todo: React.FC<IProps> = memo(({ id, status, value, checkTodo }) => {
  const isChecked = status === 'completed'
  const handleCheck = () => { checkTodo(id) }
  return (
    <div className={cn(styles.todo, isChecked && styles.checked)}>
      <input
        className={styles.checkbox}
        id={String(id)}
        type='checkbox'
        checked={isChecked}
        onChange={handleCheck}
      />
      <label className={styles.label} htmlFor={String(id)} title={value}>{value}</label>
    </div>
  )
})

Todo.displayName = 'Todo'
