import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { ButtonsGroup } from './ButtonsGroup'

describe('ButtonsGroup', () => {
  const filter = 'all'

  it('Change current filter to active', async () => {
    const mockFn = jest.fn()
    render(<ButtonsGroup currentFilter={filter} setFilter={mockFn} />)
    fireEvent.click(await screen.findByText('Active'))
    expect(mockFn).toBeCalledWith('active')
  })

  it('Change current filter to completed', async () => {
    const mockFn = jest.fn()
    render(<ButtonsGroup currentFilter={filter} setFilter={mockFn} />)
    fireEvent.click(await screen.findByText('Completed'))
    expect(mockFn).toBeCalledWith('completed')
  })

  it('Change current filter to all', async () => {
    const mockFn = jest.fn()
    render(<ButtonsGroup currentFilter={filter} setFilter={mockFn} />)
    fireEvent.click(await screen.findByText('All'))
    expect(mockFn).toBeCalledWith('all')
  })
})
