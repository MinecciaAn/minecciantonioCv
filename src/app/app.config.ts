import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // zone.js was never added to this project (no polyfill, no dependency), so Angular
    // was already running change detection without it via an implicit fallback. This makes
    // that explicit/official rather than relying on undocumented default behavior.
    provideZonelessChangeDetection()
  ]
};
