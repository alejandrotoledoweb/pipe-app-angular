import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

// confirguración del locale de la app
import localeEsEC from '@angular/common/locales/es-EC'
import localeFrCA from '@angular/common/locales/fr-CA'
import localeEnAS from '@angular/common/locales/en-AU'
import { registerLocaleData } from "@angular/common";

registerLocaleData(localeEsEC)
registerLocaleData(localeFrCA)
registerLocaleData(localeEnAS)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'en-AU' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
