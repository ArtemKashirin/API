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
import { NgTemplateComponent } from './element/ng-template/ng-template.component';
import { ComponentComponent } from './decorator/component/component.component';
import { DirectiveComponent } from './decorator/directive/directive.component';
import { HostListenerComponent } from './decorator/host-listener/host-listener.component';
import { InputComponent } from './decorator/input/input.component';
import { InputChildComponent } from './decorator/Input/input-child/input-child.component';
import { OutputComponent } from './decorator/output/output.component';
import { OutputChildComponent } from './decorator/Output/output-child/output-child.component';
import { SkipSelfComponent } from './decorator/skip-self/skip-self.component';


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
    ClildContentComponent,
    NgTemplateComponent,
    ComponentComponent,
    DirectiveComponent,
    HostListenerComponent,
    InputComponent,
    InputChildComponent,
    OutputComponent,
    OutputChildComponent,
    SkipSelfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
