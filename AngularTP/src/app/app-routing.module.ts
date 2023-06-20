import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DondeComponent } from './components/donde/donde.component';
import { ProductsComponent } from './components/products/products.component';
import { DetalleInstrumentComponent } from './components/detalle-instrument/detalle-instrument.component';
import { CrudComponent } from './components/crud/crud.component';
import { FormInstrumentoComponent } from './components/form-instrumento/form-instrumento.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "donde", component: DondeComponent },
  { path: "products", component: ProductsComponent },
  { path: "crud", component: CrudComponent },
  { path: "detalleProducts/:id", component: DetalleInstrumentComponent },
  { path: "crud/:id", component: FormInstrumentoComponent },
  { path: "**", pathMatch:"full", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
