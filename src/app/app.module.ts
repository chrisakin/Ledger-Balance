import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VaultHeaderComponent } from './vault-header/vault-header.component';
import { TillAccountComponent } from './till-account/till-account.component';
import { StanbicComponent } from './stanbic/stanbic.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    VaultHeaderComponent,
    TillAccountComponent,
    StanbicComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
