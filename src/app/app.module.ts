import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServerComponet } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessComponent } from './success/success.component';
import { WarningComponent} from './warning/warning.component';

import { ServerElementComponent } from './server-element/server-element.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { SearchDataComponent } from './search-data/search-data.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

import { FilterPipe } from './shared/filter.pipe';

import { ApiService } from './shared/api.service';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductItemComponent } from './product/product-listing/product-item/product-item.component';
import { ProductDescriptionComponent } from './product/product-description/product-description.component';
import { ProductListingComponent } from './product/product-listing/product-listing.component';
import { ProductComponent } from './product/product.component';
import { ColorPalattesComponent } from './color-palattes/color-palattes.component';
import { ColorItemComponent } from './product/color-listing/color-item/color-item.component';
import { ColorListingComponent } from './product/color-listing/color-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponet,
    ServersComponent,
    SuccessComponent,
    WarningComponent,
    ServerElementComponent,
    CockpitComponent,
    SearchDataComponent,
    SearchBarComponent,
    FilterPipe,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductItemComponent,
    ProductDescriptionComponent,
    ProductListingComponent,
    ProductComponent,
    ColorPalattesComponent,
    ColorItemComponent,
    ColorListingComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
