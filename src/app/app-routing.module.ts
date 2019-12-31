import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductDescriptionComponent } from './product/product-description/product-description.component';



const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'product-list', component:ProductComponent},
  {path: 'product-description/:id', component:ProductDescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
