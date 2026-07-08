import { useSelector } from 'react-redux'
import { mockAnomalies } from '../data/mockAnomalies'
import { translations } from '../data/translations'

function AnomalyPanel() {
  const language = useSelector((state) => state.ui.language)
  const t = translations[language]

  const severityStyles = {
    high: 'border-red-500 bg-red-500/10 text-red-400',
    medium: 'border-amber-500 bg-amber-500/10 text-amber-400',
    low: 'border-slate-500 bg-slate-500/10 text-slate-400',
  }

  const severityLabels = {
    high: t.severityHigh,
    medium: t.severityMedium,
    low: t.severityLow,
  }

  return (
    <div className="bg-slate-800 rounded-xl p-5 shadow-lg">
      <h2 className="text-xl font-semibold text-white mb-4">
        {t.anomaliesHeading}
      </h2>
      <div className="space-y-3">
        {mockAnomalies.map((anomaly) => (
          <div
            key={anomaly.id}
            className={`rounded-lg p-4 border-l-4 bg-slate-900 ${severityStyles[anomaly.severity]}`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-white font-medium text-sm">
                {anomaly.metric[language]}
              </h3>
              <span className="text-xs text-slate-500">
                {anomaly.detectedAt}
              </span>
            </div>
            <p className="text-slate-400 text-sm mt-1">
              {anomaly.description[language]}
            </p>
            <span
              className={`inline-block mt-2 text-xs px-2 py-0.5 rounded-full uppercase tracking-wide ${severityStyles[anomaly.severity]}`}
            >
              {severityLabels[anomaly.severity]}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnomalyPanel