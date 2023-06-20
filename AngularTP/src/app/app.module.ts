import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataManagerService } from './servicios/data-manager.service';
import { FormsModule } from '@angular/forms';
import { DetalleInstrumentComponent } from './components/detalle-instrument/detalle-instrument.component';
import { DondeComponent } from './components/donde/donde.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from 'src/app/components/products/products.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CrudComponent } from './components/crud/crud.component';
import { FormInstrumentoComponent } from './components/form-instrumento/form-instrumento.component';


@NgModule({
  declarations: [
    AppComponent,
    DetalleInstrumentComponent,
    DondeComponent,
    HomeComponent,
    ProductsComponent,
    NavbarComponent,
    CrudComponent,
    FormInstrumentoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [DataManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
