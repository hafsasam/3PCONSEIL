import { Routes } from '@angular/router';

import { NavbarComponent } from '../navbar/navbar.component';
import { PresentationComponent } from '../presentation/presentation.component';
import { WhoRComponent } from '../who-r/who-r.component';
import { PartnersComponent } from '../partners/partners.component';
import { ValuesSliderComponent } from '../values-slider/values-slider.component';
import { ServicesComponent } from '../services/services.component';
import { ProductsComponent } from '../products/products.component';
import { ContactComponent } from '../contact/contact.component';
import { HomeComponent } from '../home/home.component';
import { ServicesDetailComponent } from '../services-detail/services-detail.component';
import { ProductsDetailComponent } from '../products-detail/products-detail.component';
import { ReferencesComponent } from '../references/references.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesDetailComponent },
  { path: 'products', component: ProductsDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'references', component: ReferencesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
