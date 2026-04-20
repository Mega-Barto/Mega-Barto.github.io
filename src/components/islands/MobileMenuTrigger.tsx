import { useStore } from '@nanostores/react';
import { $mobileMenuOpen, toggleMobileMenu } from '../../stores/mobileNav';

export default function MobileMenuTrigger() {
  const open = useStore($mobileMenuOpen);
  return (
    <button
      type="button"
      className={`mobile-toggle ${open ? 'active' : ''}`}
      onClick={toggleMobileMenu}
      aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
      aria-expanded={open}
    >
      <span className="hamburger-line" />
      <span className="hamburger-line" />
      <span className="hamburger-line" />
    </button>
  );
}
