import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsyncPipeComponent } from './pipe/async-pipe/async-pipe.component';
import { DecimalPipeComponent } from './pipe/decimal-pipe/decimal-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    AsyncPipeComponent,
    DecimalPipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
