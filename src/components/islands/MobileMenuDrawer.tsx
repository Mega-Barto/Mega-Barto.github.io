import { useStore } from '@nanostores/react';
import type { ResolvedNavItem } from '../../content/types';
import { $mobileMenuOpen, setMobileMenuOpen } from '../../stores/mobileNav';
import LanguageToggle from './LanguageToggle';
import SocialLinksIsland from './SocialLinksIsland';

interface MobileMenuDrawerProps {
  items: ResolvedNavItem[];
  labelsEs: Record<string, string>;
}

export default function MobileMenuDrawer({ items, labelsEs }: MobileMenuDrawerProps) {
  const open = useStore($mobileMenuOpen);
  const close = () => setMobileMenuOpen(false);

  return (
    <>
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="mobile-nav-link"
                  onClick={close}
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                >
                  <span data-i18n-key={item.labelKey}>
                    {labelsEs[item.labelKey] ?? item.labelKey}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-social">
            <SocialLinksIsland />
          </div>
          <div className="mobile-language">
            <LanguageToggle showText />
          </div>
        </nav>
      </div>
      {open && <div className="mobile-overlay" onClick={close} role="presentation" />}
    </>
  );
}
