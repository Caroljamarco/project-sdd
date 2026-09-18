import './App.css'

function App() {
  return (
    <main className="app-shell">
      <header className="app-header">
        <span className="brand-mark" aria-hidden="true">L</span>
        <span>LexRadar</span>
      </header>
      <section className="app-placeholder" aria-labelledby="app-title">
        <p className="eyebrow">Consulta processual</p>
        <h1 id="app-title">Encontre um processo</h1>
        <p>A base da aplicação está pronta para receber o fluxo de busca.</p>
      </section>
    </main>
  )
}

export default App
