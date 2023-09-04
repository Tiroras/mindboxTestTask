export type Status = 'active' | 'completed'

export type FilterType = Status | 'all'

export interface TodoType {
  id: number
  value: string
  status: Status
}
