import React, { useCallback, useState } from 'react'
import { Info } from './components/Info'
import { Input } from './components/Input'
import { List } from './components/List'
import { type FilterType, type TodoType } from './types'
import { changeTodoStatus } from './utils/changeTodoStatus'
import styles from './App.module.scss'
import { getFilteredTodos } from './utils/getFilteredTodos'

function App () {
  const [todos, setTodos] = useState<TodoType[]>([])
  const [filter, setFilter] = useState<FilterType>('all')

  const checkTodo = useCallback((todoId: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId
          ? { ...todo, status: changeTodoStatus(todo.status) }
          : todo
      )
    )
  }, [])

  const addTodo = useCallback((value: string) => {
    setTodos((prevTodos) =>
      prevTodos.concat({
        id: (prevTodos.at(-1)?.id ?? 0) + 1,
        value,
        status: 'active'
      })
    )
  }, [])

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => todo.status === 'active'))
  }

  const itemsLeft = todos.filter((todo) => todo.status === 'active').length
  const haveTodos = todos.length !== 0
  const filteredTodos = getFilteredTodos(todos, filter)

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <Input addTodo={addTodo} />
        <List todos={filteredTodos} checkTodo={checkTodo} />
        <Info
          currentFilter={filter}
          itemsLeft={itemsLeft}
          haveTodos={haveTodos}
          setFilter={setFilter}
          clearCompleted={clearCompleted}
        />
      </div>
    </main>
  )
}

export default App
