/** Valores por defecto (públicos en el HTML); overrides con PUBLIC_UMAMI_* */
const DEFAULT_UMAMI_SCRIPT_URL = 'https://cloud.umami.is/script.js';
const DEFAULT_UMAMI_WEBSITE_ID = '35b5ec12-2341-41eb-a12d-0561827ea4e6';

const envScript = import.meta.env.PUBLIC_UMAMI_SCRIPT_URL?.trim();
const envWebsiteId = import.meta.env.PUBLIC_UMAMI_WEBSITE_ID?.trim();

const scriptUrl = envScript ?? (import.meta.env.PROD ? DEFAULT_UMAMI_SCRIPT_URL : undefined);
const websiteId = envWebsiteId ?? (import.meta.env.PROD ? DEFAULT_UMAMI_WEBSITE_ID : undefined);

/** Umami analytics; en dev solo si hay PUBLIC_UMAMI_* en `.env`. */
export const umami = scriptUrl && websiteId ? { scriptUrl, websiteId } : null;

export function umamiScriptOrigin(script: string): string | undefined {
  try {
    return new URL(script).origin;
  } catch {
    return undefined;
  }
}
