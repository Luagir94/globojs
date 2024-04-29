import { renderHook,  } from '@testing-library/react'
import useToggle from './'
import {act} from 'react'

describe('useToggle', () => {
  test('should initialize toggle as false', () => {
    const { result } = renderHook(() => useToggle())

    expect(result.current.toggle).toBe(false)
  })

  test('should toggle the value of toggle', () => {
    const { result } = renderHook(() => useToggle())

    expect(result.current.toggle).toBe(false)

    act(() => {
      result.current.handleToggle()
    })

    expect(result.current.toggle).toBe(true)

    act(() => {
      result.current.handleToggle()
    })

    expect(result.current.toggle).toBe(false)
  })
})