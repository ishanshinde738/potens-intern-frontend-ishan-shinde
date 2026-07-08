import { useSelector } from 'react-redux'
import { translations } from '../data/translations'
import LanguageToggle from './LanguageToggle'

function Header() {
  const language = useSelector((state) => state.ui.language)
  const t = translations[language]

  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold text-white">{t.dashboardTitle}</h1>
      <LanguageToggle />
    </div>
  )
}

export default Header