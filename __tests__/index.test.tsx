import { describe, it } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '@/pages/index'
import wrapper from './utils/render'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home name="test" />, { wrapper })

    const heading = screen.getByRole('heading', {
      name: /next\.js template/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
