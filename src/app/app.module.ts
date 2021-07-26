import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsyncPipeComponent } from './pipe/async-pipe/async-pipe.component';
import { DecimalPipeComponent } from './pipe/decimal-pipe/decimal-pipe.component';
import { JsonPipeComponent } from './pipe/json-pipe/json-pipe.component';
import { PercentPipeComponent } from './pipe/percent-pipe/percent-pipe.component';
import { UpperCasePipeComponent } from './pipe/upper-case-pipe/upper-case-pipe.component';
import { CurrencyPipeComponent } from './pipe/currency-pipe/currency-pipe.component';
import { KeyValuePipeComponent } from './pipe/key-value-pipe/key-value-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    AsyncPipeComponent,
    DecimalPipeComponent,
    JsonPipeComponent,
    PercentPipeComponent,
    UpperCasePipeComponent,
    CurrencyPipeComponent,
    KeyValuePipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
