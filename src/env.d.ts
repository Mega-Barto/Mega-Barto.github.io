/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_UMAMI_SCRIPT_URL?: string;
  readonly PUBLIC_UMAMI_WEBSITE_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
