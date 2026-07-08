import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { translations } from '../data/translations'

function LiveMetric() {
  const language = useSelector((state) => state.ui.language)
  const t = translations[language]
  const [count, setCount] = useState(18420)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 3) + 1)
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-slate-800 rounded-xl p-5 shadow-lg mb-6 flex items-center justify-between">
      <div>
        <p className="text-slate-400 text-sm">{t.liveMetricLabel}</p>
        <p className="text-white text-4xl font-bold tabular-nums mt-1">
          {count.toLocaleString()}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
        <span className="text-green-400 text-sm font-medium">Live</span>
      </div>
    </div>
  )
}

export default LiveMetric