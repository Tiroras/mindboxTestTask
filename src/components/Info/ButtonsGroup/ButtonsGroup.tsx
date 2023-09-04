import React from 'react'
import cn from 'classnames'
import styles from './ButtonsGroup.module.scss'
import { type FilterType } from '../../../types'

interface IProps {
  currentFilter: FilterType
  setFilter: (filter: FilterType) => void
}

export const ButtonsGroup: React.FC<IProps> = ({ currentFilter, setFilter }) => {
  const handleFilterAll = () => { setFilter('all') }
  const handleFilterActive = () => { setFilter('active') }
  const handleFilterCompleted = () => { setFilter('completed') }

  const allFilterIsActive = currentFilter === 'all'
  const activeFilterIsActive = currentFilter === 'active'
  const completedFilterIsActive = currentFilter === 'completed'

  return (
    <div className={styles.buttonsGroup}>
      <button
        className={cn(styles.button, allFilterIsActive && styles.active)}
        onClick={handleFilterAll}
      >
        All
      </button>
      <button
        className={cn(styles.button, activeFilterIsActive && styles.active)}
        onClick={handleFilterActive}
      >
        Active
      </button>
      <button
        className={cn(styles.button, completedFilterIsActive && styles.active)}
        onClick={handleFilterCompleted}
      >
        Completed
      </button>
    </div>
  )
}
