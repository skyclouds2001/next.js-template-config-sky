import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hello from '@/components/hello'

describe('index', () => {
  it('index', () => {
    render(<Hello />)

    const div = screen.getByText('Hello!')
    expect(div).toBeDefined()
  })
})
