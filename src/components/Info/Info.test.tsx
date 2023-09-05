import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { Info } from './Info'

describe('Info', () => {
  it('Shows how many items left if have todos', async () => {
    render(<Info currentFilter='all' itemsLeft={5} haveTodos={true} setFilter={jest.fn()} clearCompleted={jest.fn()} />)
    expect(await screen.findByText('5 items left')).toBeInTheDocument()
  })

  it('Call "clear completed" when press button', async () => {
    const clearCompletedMock = jest.fn()
    render(<Info currentFilter='all' itemsLeft={5} haveTodos={false} setFilter={jest.fn()} clearCompleted={clearCompletedMock} />)
    fireEvent.click(await screen.findByText('Clear completed'))
    expect(clearCompletedMock).toBeCalled()
  })
})
