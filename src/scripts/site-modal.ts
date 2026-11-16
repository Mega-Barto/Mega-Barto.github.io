const ACTIVE_CLASS = 'active';

const returnFocusByOverlay = new Map<string, HTMLElement>();

function overlayElement(id: string): HTMLElement | null {
  return document.getElementById(id);
}

export function closeAllSiteModals(): void {
  for (const el of document.querySelectorAll<HTMLElement>('.site-modal-overlay.active')) {
    const id = el.id;
    el.classList.remove(ACTIVE_CLASS);
    if (id) restoreFocus(id);
  }
  document.body.style.overflow = '';
}

function restoreFocus(overlayId: string): void {
  const focus = returnFocusByOverlay.get(overlayId);
  if (focus?.isConnected) focus.focus({ preventScroll: true });
  returnFocusByOverlay.delete(overlayId);
}

export function openSiteModal(overlayId: string, returnFocus?: HTMLElement | null): void {
  closeAllSiteModals();
  const overlay = overlayElement(overlayId);
  if (!overlay) return;
  if (returnFocus) returnFocusByOverlay.set(overlayId, returnFocus);
  overlay.classList.add(ACTIVE_CLASS);
  document.body.style.overflow = 'hidden';
}

export function closeSiteModal(overlayId: string): void {
  const overlay = overlayElement(overlayId);
  if (!overlay?.classList.contains(ACTIVE_CLASS)) return;
  overlay.classList.remove(ACTIVE_CLASS);
  restoreFocus(overlayId);
  if (!document.querySelector('.site-modal-overlay.active')) {
    document.body.style.overflow = '';
  }
}

let escapeListenerBound = false;

function ensureEscapeListener(): void {
  if (escapeListenerBound) return;
  escapeListenerBound = true;
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    const active = document.querySelector<HTMLElement>('.site-modal-overlay.active');
    if (active?.id) closeSiteModal(active.id);
  });
}

export function initSiteModal(config: {
  overlayId: string;
  closeButtonId: string;
  boundAttr?: string;
}): void {
  const overlay = overlayElement(config.overlayId);
  if (!overlay) return;

  const boundAttr = config.boundAttr ?? 'siteModalBound';
  if (overlay.dataset[boundAttr] === '1') return;
  overlay.dataset[boundAttr] = '1';

  ensureEscapeListener();

  const close = () => closeSiteModal(config.overlayId);
  document.getElementById(config.closeButtonId)?.addEventListener('click', close);
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) close();
  });
}

export function bindSiteModalOpen(
  triggerId: string,
  overlayId: string,
  options?: { boundAttr?: string },
): void {
  const trigger = document.getElementById(triggerId);
  if (!trigger) return;

  const boundAttr = options?.boundAttr ?? 'siteModalOpenBound';
  if (trigger.dataset[boundAttr] === '1') return;
  trigger.dataset[boundAttr] = '1';

  const open = () => {
    const focusEl =
      document.activeElement instanceof HTMLElement ? document.activeElement : trigger;
    openSiteModal(overlayId, focusEl);
  };

  trigger.addEventListener('click', open);
  trigger.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      open();
    }
  });
}
