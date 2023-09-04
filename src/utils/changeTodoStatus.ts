import { type Status } from '../types'

export const changeTodoStatus = (status: Status): Status => {
  switch (status) {
    case 'active': return 'completed'
    case 'completed': return 'active'
  }
}
