import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('LexRadar app', () => {
  it('renders initial empty state', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /consulta de processos/i })).toBeInTheDocument()
    expect(screen.getByText(/digite um termo para consultar processos/i)).toBeInTheDocument()
  })

  it('searches by process number and shows result cards', async () => {
    const user = userEvent.setup()
    render(<App />)

    const input = screen.getByRole('textbox', { name: /buscar processo/i })
    await user.type(input, '0001234')
    await user.click(screen.getByRole('button', { name: /buscar/i }))

    expect(await screen.findByText(/0001234-56\.2024\.8\.26\.0001/i)).toBeInTheDocument()
    expect(screen.getByText(/maria silva/i)).toBeInTheDocument()
  })

  it('navigates to the detail page for a process', async () => {
    const user = userEvent.setup()
    render(<App />)

    const input = screen.getByRole('textbox', { name: /buscar processo/i })
    await user.type(input, 'technova')
    await user.click(screen.getByRole('button', { name: /buscar/i }))

    const result = await screen.findByRole('button', { name: /0104567-89\.2023\.8\.26\.0012/i })
    await user.click(result)

    expect(await screen.findByRole('heading', { name: /0104567-89\.2023\.8\.26\.0012/i })).toBeInTheDocument()
    expect(screen.getAllByText(/sentença/i).length).toBeGreaterThan(0)
  })
})
