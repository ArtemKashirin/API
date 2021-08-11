import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./class/router/activated-route/home/home.component";
import {AboutComponent} from "./class/router/activated-route/about/about.component";
import {ContactsComponent} from "./class/router/activated-route/contacts/contacts.component";
import {LinksComponent} from "./class/router/activated-route/links/links.component";

const routes: Routes = [
  {path: "ActivatedRoute", component: HomeComponent},
  {path: "Router", component: AboutComponent},
  {path: "contacts", component: ContactsComponent},
  {path: "links", component: LinksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
