import 'zone.js/testing';

import { getTestBed } from '@angular/core/testing';
import { BrowserTestingModule, platformBrowserTesting } from '@angular/platform-browser/testing';

// Initialiser l’environnement de test Angular
getTestBed().initTestEnvironment(
  BrowserTestingModule,
  platformBrowserTesting()
);

// Angular CLI détecte automatiquement tous les fichiers *.spec.ts, pas besoin de require.context
