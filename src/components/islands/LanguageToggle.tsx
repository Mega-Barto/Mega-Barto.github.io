import { useStore } from '@nanostores/react';
import { FaGlobeAmericas } from 'react-icons/fa';
import type { SiteLanguage } from '../../i18n/t';
import { $language, setLanguage } from '../../stores/i18n';
import '../LanguageToggle/LanguageToggle.css';

interface LanguageToggleProps {
  className?: string;
  showText?: boolean;
}

export default function LanguageToggle({ className = '', showText = true }: LanguageToggleProps) {
  const current = useStore($language);
  const next: SiteLanguage = current === 'es' ? 'en' : 'es';

  return (
    <button
      type="button"
      className={`language-toggle ${className}`}
      onClick={() => setLanguage(next)}
      title="Toggle language"
      aria-label="Toggle language"
    >
      <span className="language-icon">
        <FaGlobeAmericas />
      </span>
      {showText && <span className="language-text">{current === 'es' ? 'ES' : 'EN'}</span>}
    </button>
  );
}
