import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServerCliComponent } from './server-cli/server-cli.component';
import { ServerDatabindingComponent } from './server-databinding/server-databinding.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServerCliComponent,
    ServerDatabindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
