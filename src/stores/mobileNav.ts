import { atom } from 'nanostores';

export const $mobileMenuOpen = atom(false);

export function setMobileMenuOpen(open: boolean): void {
  $mobileMenuOpen.set(open);
}

export function toggleMobileMenu(): void {
  $mobileMenuOpen.set(!$mobileMenuOpen.get());
}
