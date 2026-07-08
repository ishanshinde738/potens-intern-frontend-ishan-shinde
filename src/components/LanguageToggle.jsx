import { useSelector, useDispatch } from 'react-redux'
import { setLanguage } from '../store/uiSlice'
import { translations } from '../data/translations'

function LanguageToggle() {
  const language = useSelector((state) => state.ui.language)
  const dispatch = useDispatch()
  const t = translations[language]

  return (
    <div className="flex items-center gap-2">
      <span className="text-slate-400 text-sm">{t.languageLabel}:</span>
      <div className="flex bg-slate-800 rounded-lg p-1">
        <button
          onClick={() => dispatch(setLanguage('en'))}
          className={`px-3 py-1 rounded-md text-sm font-medium transition ${
            language === 'en'
              ? 'bg-blue-600 text-white'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => dispatch(setLanguage('hi'))}
          className={`px-3 py-1 rounded-md text-sm font-medium transition ${
            language === 'hi'
              ? 'bg-blue-600 text-white'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          हिं
        </button>
      </div>
    </div>
  )
}

export default LanguageToggle