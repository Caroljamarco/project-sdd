import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('LexRadar app shell', () => {
  it('renders the process search entry point', () => {
    render(<App />)

    expect(screen.getByText('LexRadar')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Encontre um processo' })).toBeInTheDocument()
  })
})
