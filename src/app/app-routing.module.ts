import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductDescriptionComponent } from './product/product-description/product-description.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchComponent } from './search/search.component';



const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'product-list', component:ProductComponent},
  {path: 'product-description', component:ProductDescriptionComponent},
  {path: 'landing-page', component:LandingPageComponent},
  {path: 'search', component:SearchComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
