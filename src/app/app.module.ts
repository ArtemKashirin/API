import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsyncPipeComponent } from './pipe/async-pipe/async-pipe.component';
import { DecimalPipeComponent } from './pipe/decimal-pipe/decimal-pipe.component';
import { JsonPipeComponent } from './pipe/json-pipe/json-pipe.component';
import { PercentPipeComponent } from './pipe/percent-pipe/percent-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    AsyncPipeComponent,
    DecimalPipeComponent,
    JsonPipeComponent,
    PercentPipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
