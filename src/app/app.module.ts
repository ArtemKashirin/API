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
import { SlicePipeComponent } from './pipe/slice-pipe/slice-pipe.component';
import { DatePipeComponent } from './pipe/date-pipe/date-pipe.component';
import { LowerCasePipeComponent } from './pipe/lower-case-pipe/lower-case-pipe.component';
import { TitleCasePipeComponent } from './pipe/title-case-pipe/title-case-pipe.component';
import { NgContainerComponent } from './element/ng-container/ng-container.component';
import { NgContentComponent } from './element/ng-content/ng-content.component';
import { ClildContentComponent } from './element/ng-content/clild-content/clild-content.component';

@NgModule({
  declarations: [
    AppComponent,
    AsyncPipeComponent,
    DecimalPipeComponent,
    JsonPipeComponent,
    PercentPipeComponent,
    UpperCasePipeComponent,
    CurrencyPipeComponent,
    KeyValuePipeComponent,
    SlicePipeComponent,
    DatePipeComponent,
    LowerCasePipeComponent,
    TitleCasePipeComponent,
    NgContainerComponent,
    NgContentComponent,
    ClildContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
