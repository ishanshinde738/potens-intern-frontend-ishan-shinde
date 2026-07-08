import TopActionsPanel from './components/TopActionsPanel'
import AnomalyPanel from './components/AnomalyPanel'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TopActionsPanel />
        <AnomalyPanel />
      </div>
    </div>
  )
}

export default App