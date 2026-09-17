import { BrowserRouter, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { findProcessById, findProcesses } from './mockData'
import './App.css'
import type { LegalProcess } from './types'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/processos/:id" element={<ProcessDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

function SearchPage() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<LegalProcess[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const performSearch = (nextQuery: string) => {
    const trimmedQuery = nextQuery.trim()

    if (!trimmedQuery) {
      setResults([])
      setError('')
      return
    }

    setLoading(true)
    setError('')

    window.setTimeout(() => {
      try {
        setResults(findProcesses(trimmedQuery))
      } catch {
        setError('Não foi possível realizar a busca neste momento.')
        setResults([])
      } finally {
        setLoading(false)
      }
    }, 150)
  }

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    performSearch(query)
  }

  const handleClear = () => {
    setQuery('')
    setResults([])
    setError('')
    setLoading(false)
  }

  const suggestions = ['0001234', 'TechNova', 'sentença']

  return (
    <main className="page-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">LexRadar</p>
          <h1>Consulta de processos</h1>
        </div>
      </header>

      <form className="search-panel" onSubmit={handleSearch}>
        <label htmlFor="process-search" className="sr-only">
          Buscar processo
        </label>
        <input
          id="process-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar por número, parte ou palavra-chave"
          aria-label="Buscar processo"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
        {query && (
          <button type="button" className="secondary" onClick={handleClear} aria-label="Limpar busca">
            Limpar
          </button>
        )}
      </form>

      {!query && !error && (
        <div className="suggestions-box" aria-label="Sugestões de busca">
          <p>Exemplos de busca:</p>
          <div className="suggestions">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                className="suggestion-btn"
                onClick={() => {
                  setQuery(suggestion)
                  performSearch(suggestion)
                }}
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      {error && <div className="state-box error">{error}</div>}

      {!query && !error && (
        <div className="state-box empty">Digite um termo para consultar processos.</div>
      )}

      {loading && <div className="state-box loading">Carregando processos...</div>}

      {!loading && query && results.length === 0 && !error && (
        <div className="state-box empty">
          Nenhum processo encontrado para a busca atual.
          <button type="button" className="secondary inline" onClick={handleClear}>
            Limpar busca
          </button>
        </div>
      )}

      {!loading && results.length > 0 && (
        <section className="results" aria-live="polite">
          <div className="results-header">
            <span>{results.length} resultado(s)</span>
          </div>
          {results.map((process) => (
            <article
              key={process.id}
              className="process-card"
              onClick={() => navigate(`/processos/${process.id}`)}
              role="button"
              tabIndex={0}
              aria-label={`Abrir processo ${process.number}`}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  navigate(`/processos/${process.id}`)
                }
              }}
            >
              <div className="process-card-header">
                <strong>{process.number}</strong>
                <span className={`status status-${process.status.toLowerCase().replace(/\s+/g, '-')}`}>
                  {process.status}
                </span>
              </div>
              <p className="parties">Partes: {process.parties.join(', ')}</p>
              <div className="meta-grid">
                <span>
                  <b>Tribunal:</b> {process.court}
                </span>
                <span>
                  <b>Início:</b> {new Date(process.startDate).toLocaleDateString('pt-BR')}
                </span>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  )
}

function ProcessDetailPage() {
  const { id } = useParams()
  const [process, setProcess] = useState<LegalProcess | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(() => (id ? '' : 'Processo não informado.'))
  const navigate = useNavigate()

  useEffect(() => {
    let isActive = true

    if (!id) {
      const timer = window.setTimeout(() => {
        if (!isActive) {
          return
        }

        setError('Processo não informado.')
        setLoading(false)
      }, 0)

      return () => {
        isActive = false
        window.clearTimeout(timer)
      }
    }

    const timer = window.setTimeout(() => {
      if (!isActive) {
        return
      }

      setLoading(true)
      setError('')
      setProcess(null)

      window.setTimeout(() => {
        if (!isActive) {
          return
        }

        try {
          const current = findProcessById(id)

          if (!current) {
            setError('Não foi possível carregar os detalhes do processo.')
            setProcess(null)
          } else {
            setProcess(current)
            setError('')
          }
        } catch {
          setError('Não foi possível carregar os detalhes do processo.')
          setProcess(null)
        } finally {
          setLoading(false)
        }
      }, 150)
    }, 0)

    return () => {
      isActive = false
      window.clearTimeout(timer)
    }
  }, [id])

  if (loading) {
    return <div className="state-box loading">Carregando detalhes...</div>
  }

  if (error || !process) {
    return (
      <main className="page-shell detail-shell">
        <div className="state-box error">{error || 'Processo não encontrado.'}</div>
        <button type="button" className="secondary" onClick={() => navigate('/')}>
          Voltar para busca
        </button>
      </main>
    )
  }

  return (
    <main className="page-shell detail-shell">
      <button type="button" className="secondary back-btn" onClick={() => navigate('/')}>
        Voltar
      </button>

      <section className="detail-header">
        <div>
          <p className="eyebrow">Processo</p>
          <h1>{process.number}</h1>
        </div>
        <span className="status large">{process.status}</span>
      </section>

      <section className="detail-grid">
        <div className="detail-card">
          <h2>Informações</h2>
          <ul>
            <li>
              <b>Tribunal:</b> {process.court}
            </li>
            <li>
              <b>Data de início:</b> {new Date(process.startDate).toLocaleDateString('pt-BR')}
            </li>
            <li>
              <b>Partes:</b> {process.parties.join(', ')}
            </li>
          </ul>
        </div>

        <div className="detail-card">
          <h2>Resumo</h2>
          <p>{process.summary}</p>
        </div>
      </section>

      <section className="movements">
        <h2>Movimentações</h2>
        {process.movements.map((movement) => (
          <article key={movement.id} className="movement-item">
            <div className="movement-date">
              {new Date(movement.date).toLocaleDateString('pt-BR')}
            </div>
            <div className="movement-content">
              <strong>{movement.title}</strong>
              <p>{movement.description}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
