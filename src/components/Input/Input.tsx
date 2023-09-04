import React, { memo, useState } from 'react'
import styles from './Input.module.scss'

interface IProps {
  addTodo: (value: string) => void
}

export const Input: React.FC<IProps> = memo(({ addTodo }) => {
  const [value, setValue] = useState('')

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo(value)
      setValue('')
    }
  }

  return (
    <div className={styles.wrapper}>
      <input
        placeholder='What needs to be done?'
        value={value}
        onChange={handleValue}
        onKeyDown={handleEnter}
        className={styles.input}
      />
    </div>
  )
})

Input.displayName = 'Input'
