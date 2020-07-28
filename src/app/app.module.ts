//where we tell angular which pieces belong to our app. Bundles of functionality for our App
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
@NgModule({
  declarations: [
    //Where you let your app know what components are apart of app
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
  ],
  imports: [
    /*this is where you import packages to let typescript */
    BrowserModule,

  ],
  providers: [],
  //bootsrap is the component that angular recognizes when it starts
  bootstrap: [AppComponent]
})
export class AppModule { }
