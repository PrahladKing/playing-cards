import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {AngularFireModule} from "@angular/fire/compat"
import {AngularFireAuthModule} from "@angular/fire/compat/auth"
import {AngularFirestoreModule} from "@angular/fire/compat/firestore"
import {AngularFireDatabaseModule} from "@angular/fire/compat/database"

import { routes } from './app.routes';
import { environment } from '../environments/environment.development';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireAuthModule,
      AngularFireDatabaseModule,
      AngularFirestoreModule
    ])
  ]
};
