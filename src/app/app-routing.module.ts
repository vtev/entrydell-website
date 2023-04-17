import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { DirectionsPageComponent } from './directions-page/directions-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PartnersPageComponent } from './partners-page/partners-page.component';
import {HealthcarePageComponent} from "./healthcare-page/healthcare-page.component";
import {PharmacologyPageComponent} from "./pharmacology-page/pharmacology-page.component";
import {EngineeringPageComponent} from "./engineering-page/engineering-page.component";

const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'directions', component: DirectionsPageComponent },
  { path: 'partners', component: PartnersPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'healthcare', component: HealthcarePageComponent },
  { path: 'pharmacology', component: PharmacologyPageComponent },
  { path: 'engineering', component: EngineeringPageComponent },
  { path: '**', redirectTo: '/main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
