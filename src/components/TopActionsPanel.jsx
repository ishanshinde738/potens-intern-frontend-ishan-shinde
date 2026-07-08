import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { approveAction, holdAction } from '../store/actionsSlice'
import { translations } from '../data/translations'

function TopActionsPanel() {
  const actions = useSelector((state) => state.actions)
  const language = useSelector((state) => state.ui.language)
  const dispatch = useDispatch()
  const t = translations[language]

  const [focusedIndex, setFocusedIndex] = useState(0)

  useEffect(() => {
    function handleKeyDown(e) {
      const tag = document.activeElement.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return

      if (e.key === 'j') {
        setFocusedIndex((prev) => Math.min(prev + 1, actions.length - 1))
      } else if (e.key === 'k') {
        setFocusedIndex((prev) => Math.max(prev - 1, 0))
      } else if (e.key === 'a') {
        const item = actions[focusedIndex]
        if (item) dispatch(approveAction(item.id))
      } else if (e.key === 'h') {
        const item = actions[focusedIndex]
        if (item) dispatch(holdAction(item.id))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [focusedIndex, actions, dispatch])

  const statusStyles = {
    pending: 'bg-slate-700 text-slate-200',
    approved: 'bg-green-600 text-white',
    held: 'bg-amber-600 text-white',
  }

  return (
    <div className="bg-slate-800 rounded-xl p-5 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">
          {t.topActionsHeading}
        </h2>
        <span className="text-xs text-slate-500">
          j/k navigate · a approve · h hold
        </span>
      </div>
      <div className="space-y-3">
        {actions.map((item, index) => (
          <div
            key={item.id}
            className={`bg-slate-900 rounded-lg p-4 flex items-center justify-between gap-4 border-2 transition ${
              index === focusedIndex
                ? 'border-blue-500'
                : 'border-transparent'
            }`}
          >
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="text-white font-medium">{t[item.titleKey]}</h3>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${statusStyles[item.status]}`}
                >
                  {item.status === 'pending'
                    ? '—'
                    : item.status === 'approved'
                    ? t.approved
                    : t.held}
                </span>
              </div>
              <p className="text-slate-400 text-sm mt-1">
                {t[item.contextKey]}
              </p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={() => dispatch(approveAction(item.id))}
                disabled={item.status === 'approved'}
                className="px-3 py-1.5 rounded-md bg-green-600 hover:bg-green-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-medium transition"
              >
                {t.approve}
              </button>
              <button
                onClick={() => dispatch(holdAction(item.id))}
                disabled={item.status === 'held'}
                className="px-3 py-1.5 rounded-md bg-amber-600 hover:bg-amber-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-medium transition"
              >
                {t.hold}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopActionsPanel