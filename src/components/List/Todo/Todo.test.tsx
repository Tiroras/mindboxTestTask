import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { Todo } from './Todo'
import styles from './Todo.module.scss'

describe('Todo', () => {
  it('Call check fn when clicked', async () => {
    const checkTodoMock = jest.fn()
    render(<Todo id={5} status={'active'} value={'value'} checkTodo={checkTodoMock} />)
    fireEvent.click(await screen.findByText('value'))
    expect(checkTodoMock).toBeCalledWith(5)
  })

  it('Applied style when checked', async () => {
    render(<Todo id={5} status={'completed'} value={'value'} checkTodo={jest.fn} />)
    expect((await screen.findByTestId('todo')).classList.contains(styles.checked)).toBeTruthy()
  })

  it('Not have style if not checked', async () => {
    render(<Todo id={5} status={'active'} value={'value'} checkTodo={jest.fn} />)
    expect((await screen.findByTestId('todo')).classList.contains(styles.checked)).not.toBeTruthy()
  })
})
