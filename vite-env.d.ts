/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />

export interface ImportMetaEnv {
  readonly VITE_APP_PUBLIC_URL: string;
  readonly VITE_APP_TITLE: string;
}

export interface ImportMeta {
  readonly env: ImportMetaEnv;
}
