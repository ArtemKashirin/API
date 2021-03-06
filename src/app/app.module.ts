import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AsyncPipeComponent} from './pipe/async-pipe/async-pipe.component';
import {DecimalPipeComponent} from './pipe/decimal-pipe/decimal-pipe.component';
import {JsonPipeComponent} from './pipe/json-pipe/json-pipe.component';
import {PercentPipeComponent} from './pipe/percent-pipe/percent-pipe.component';
import {UpperCasePipeComponent} from './pipe/upper-case-pipe/upper-case-pipe.component';
import {CurrencyPipeComponent} from './pipe/currency-pipe/currency-pipe.component';
import {KeyValuePipeComponent} from './pipe/key-value-pipe/key-value-pipe.component';
import {SlicePipeComponent} from './pipe/slice-pipe/slice-pipe.component';
import {DatePipeComponent} from './pipe/date-pipe/date-pipe.component';
import {LowerCasePipeComponent} from './pipe/lower-case-pipe/lower-case-pipe.component';
import {TitleCasePipeComponent} from './pipe/title-case-pipe/title-case-pipe.component';
import {NgContainerComponent} from './element/ng-container/ng-container.component';
import {NgContentComponent} from './element/ng-content/ng-content.component';
import {ClildContentComponent} from './element/ng-content/clild-content/clild-content.component';
import {NgTemplateComponent} from './element/ng-template/ng-template.component';
import {ComponentComponent} from './decorator/component/component.component';
import {DirectiveComponent} from './decorator/directive/directive.component';
import {HostListenerComponent} from './decorator/host-listener/host-listener.component';
import {InputComponent} from './decorator/input/input.component';
import {InputChildComponent} from './decorator/Input/input-child/input-child.component';
import {OutputComponent} from './decorator/output/output.component';
import {OutputChildComponent} from './decorator/Output/output-child/output-child.component';
import {SkipSelfComponent} from './decorator/skip-self/skip-self.component';
import {ContentChildComponent} from './decorator/content-child/content-child.component';
import {ChildContentComponent} from './decorator/content-child/child-content/child-content.component';
import {HostComponent} from './decorator/host/host.component';
import {NgModuleComponent} from './decorator/ng-module/ng-module.component';
import {PipeComponent} from './decorator/pipe/pipe.component';
import {ViewChildComponent} from './decorator/view-child/view-child.component';
import {ContentChildrenComponent} from './decorator/content-children/content-children.component';
import {ContentChildrenChildComponent} from './decorator/content-children/content-children-child/content-children-child.component';
import {HostBindingComponent} from './decorator/host-binding/host-binding.component';
import {OptionalComponent} from './decorator/optional/optional.component';
import {SelfComponent} from './decorator/self/self.component';
import {ViewChildrenComponent} from './decorator/view-children/view-children.component';
import {InjectComponent} from './decorator/inject/inject.component';
import {InjectableComponent} from './decorator/injectable/injectable.component';
import {NgClassComponent} from './directive/ng-class/ng-class.component';
import {NgIfComponent} from './directive/ng-if/ng-if.component';
import {NgStyleComponent} from './directive/ng-style/ng-style.component';
import {NgSwitchComponent} from './directive/ng-switch/ng-switch.component';
import {NgForOfComponent} from './directive/ng-for-of/ng-for-of.component';
import {NgComponentOutletComponent} from './directive/ng-component-outlet/ng-component-outlet.component';
import {NgTemplateOutletComponent} from './directive/ng-template-outlet/ng-template-outlet.component';
import {NgPluralComponent} from './directive/ng-plural/ng-plural.component';
import {AbstractFormGroupDirectiveComponent} from './directive/abstract-form-group-directive/abstract-form-group-directive.component';
import {DefaultValueAccessorComponent} from './directive/default-value-accessor/default-value-accessor.component';
import {FormControlDirectiveComponent} from './directive/form-control-directive/form-control-directive.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormGroupNameComponent} from './directive/form-group-name/form-group-name.component';
import {MinLengthValidatorComponent} from './directive/min-length-validator/min-length-validator.component';
import {NgControlStatusGroupComponent} from './directive/ng-control-status-group/ng-control-status-group.component';
import {NgModelGroupComponent} from './directive/ng-model-group/ng-model-group.component';
import {FormControlNameComponent} from './directive/form-control-name/form-control-name.component';
import {NgFormComponent} from './directive/ng-form/ng-form.component';
import {NgSelectOptionComponent} from './directive/ng-select-option/ng-select-option.component';
import {FormArrayNameComponent} from './directive/form-array-name/form-array-name.component';
import {FormGroupDirectiveComponent} from './directive/form-group-directive/form-group-directive.component';
import {NgControlStatusComponent} from './directive/ng-control-status/ng-control-status.component';
import {NgModelComponent} from './directive/ng-model/ng-model.component';
import {RouterLinkComponent} from './directive/router-link/router-link.component';
import {RouterLinkActiveComponent} from './directive/router-link-active/router-link-active.component';
import {RouterLinkWithHrefComponent} from './directive/router-link-with-href/router-link-with-href.component';
import {RouterOutletComponent} from './directive/router-outlet/router-outlet.component';
import {AbstractControlDirectiveComponent} from './class/forms/abstract-control-directive/abstract-control-directive.component';
import {ControlContainerComponent} from './class/forms/control-container/control-container.component';
import {NgControlComponent} from './class/forms/ng-control/ng-control.component';
import {AbstractControlComponent} from './class/forms/abstract-control/abstract-control.component';
import {FormControlComponent} from './class/forms/form-control/form-control.component';
import {FormArrayComponent} from './class/forms/form-array/form-array.component';
import {FormGroupComponent} from './class/forms/form-group/form-group.component';
import {FormBuilderComponent} from './class/forms/form-builder/form-builder.component';
import {ValidatorsComponent} from './class/forms/validators/validators.component';
import {ChangeDetectorRefComponent} from './class/core/change-detector-ref/change-detector-ref.component';
import {ViewRefComponent} from './class/core/view-ref/view-ref.component';
import { EmbeddedViewRefComponent } from './class/core/embedded-view-ref/embedded-view-ref.component';
import { ComponentFactoryComponent } from './class/core/component-factory/component-factory.component';
import { ComponentFactoryResolverComponent } from './class/core/component-factory-resolver/component-factory-resolver.component';
import { TemplateRefComponent } from './class/core/template-ref/template-ref.component';
import { ComponentRefComponent } from './class/core/component-ref/component-ref.component';
import { ViewContainerRefComponent } from './class/core/view-container-ref/view-container-ref.component';
import { Renderer2Component } from './class/core/renderer2/renderer2.component';
import { ElementRefComponent } from './class/core/element-ref/element-ref.component';
import { ErrorHandlerComponent } from './class/core/error-handler/error-handler.component';
import { SimpleChangeComponent } from './class/core/simple-change/simple-change.component';
import { EventEmitterComponent } from './class/core/event-emitter/event-emitter.component';
import { HttpResponseBaseComponent } from './class/http/http-response-base/http-response-base.component';
import { HttpHeaderResponseComponent } from './class/http/http-header-response/http-header-response.component';
import { HttpResponseComponent } from './class/http/http-response/http-response.component';
import { HttpErrorResponseComponent } from './class/http/http-error-response/http-error-response.component';
import { HttpClientComponent } from './class/http/http-client/http-client.component';
import {HttpClientModule} from "@angular/common/http";
import { HttpRequestComponent } from './class/http/http-request/http-request.component';
import { HttpHeadersComponent } from './class/http/http-headers/http-headers.component';
import { HttpParamsComponent } from './class/http/http-params/http-params.component';
import { RouteComponent } from './class/router/route/route.component';
import { RouterComponent } from './class/router/router/router.component';
import { ActivatedRouteComponent } from './class/router/activated-route/activated-route.component';
import { HomeComponent } from './class/router/activated-route/home/home.component';
import { AboutComponent } from './class/router/activated-route/about/about.component';
import { ContactsComponent } from './class/router/activated-route/contacts/contacts.component';
import { LinksComponent } from './class/router/activated-route/links/links.component';
import { RouterEventComponent } from './class/router/router-event/router-event.component';
import { RouterStateComponent } from './class/router/router-state/router-state.component';
import { RouterStateSnapshotComponent } from './class/router/router-state-snapshot/router-state-snapshot.component';
import { ActivatedRouteSnapshotComponent } from './class/router/activated-route-snapshot/activated-route-snapshot.component';


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
    ContentChildComponent,
    ChildContentComponent,
    HostComponent,
    NgModuleComponent,
    PipeComponent,
    ViewChildComponent,
    ContentChildrenComponent,
    ContentChildrenChildComponent,
    HostBindingComponent,
    OptionalComponent,
    SelfComponent,
    ViewChildrenComponent,
    InjectComponent,
    InjectableComponent,
    NgClassComponent,
    NgIfComponent,
    NgStyleComponent,
    NgSwitchComponent,
    NgForOfComponent,
    NgComponentOutletComponent,
    NgTemplateOutletComponent,
    NgPluralComponent,
    AbstractFormGroupDirectiveComponent,
    DefaultValueAccessorComponent,
    FormControlDirectiveComponent,
    FormGroupNameComponent,
    MinLengthValidatorComponent,
    NgControlStatusGroupComponent,
    NgModelGroupComponent,
    FormControlNameComponent,
    NgFormComponent,
    NgSelectOptionComponent,
    FormArrayNameComponent,
    FormGroupDirectiveComponent,
    NgControlStatusComponent,
    NgModelComponent,
    RouterLinkComponent,
    RouterLinkActiveComponent,
    RouterLinkWithHrefComponent,
    RouterOutletComponent,
    AbstractControlDirectiveComponent,
    ControlContainerComponent,
    NgControlComponent,
    AbstractControlComponent,
    FormControlComponent,
    FormArrayComponent,
    FormGroupComponent,
    FormBuilderComponent,
    ValidatorsComponent,
    ChangeDetectorRefComponent,
    ViewRefComponent,
    EmbeddedViewRefComponent,
    ComponentFactoryComponent,
    ComponentFactoryResolverComponent,
    TemplateRefComponent,
    ComponentRefComponent,
    ViewContainerRefComponent,
    Renderer2Component,
    ElementRefComponent,
    ErrorHandlerComponent,
    SimpleChangeComponent,
    EventEmitterComponent,
    HttpResponseBaseComponent,
    HttpHeaderResponseComponent,
    HttpResponseComponent,
    HttpErrorResponseComponent,
    HttpClientComponent,
    HttpRequestComponent,
    HttpHeadersComponent,
    HttpParamsComponent,
    RouteComponent,
    RouterComponent,
    ActivatedRouteComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    LinksComponent,
    RouterEventComponent,
    RouterStateComponent,
    RouterStateSnapshotComponent,
    ActivatedRouteSnapshotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
