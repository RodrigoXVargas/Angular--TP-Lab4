import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataManagerService } from './servicios/data-manager.service';

import { BuscadorComponent } from './components/buscador/buscador.component';
import { DetalleInstrumentComponent } from './components/detalle-instrument/detalle-instrument.component';
import { DondeComponent } from './components/donde/donde.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from 'src/app/components/products/products.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    DetalleInstrumentComponent,
    DondeComponent,
    HomeComponent,
    ProductsComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [DataManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
