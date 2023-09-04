import React from 'react'
import { type FilterType } from '../../types'
import styles from './Info.module.scss'
import { ButtonsGroup } from './ButtonsGroup'

interface IProps {
  currentFilter: FilterType
  itemsLeft: number
  haveTodos: boolean
  setFilter: (filter: FilterType) => void
  clearCompleted: () => void
}

export const Info: React.FC<IProps> = ({
  itemsLeft,
  currentFilter,
  haveTodos,
  setFilter,
  clearCompleted
}) => {
  return (
    <div className={styles.info}>
      <div>{haveTodos && <>{itemsLeft} items left</>}</div>
      <ButtonsGroup currentFilter={currentFilter} setFilter={setFilter} />
      <div>
        <button className={styles.button} onClick={clearCompleted}>Clear completed</button>
      </div>
    </div>
  )
}
