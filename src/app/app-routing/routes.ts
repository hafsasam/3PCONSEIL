import { Routes } from '@angular/router';

import { ProductsComponent } from '../products/products.component';
import { ContactComponent } from '../contact/contact.component';
import { HomeComponent } from '../home/home.component';
import { ServicesDetailComponent } from '../services-detail/services-detail.component';
import { ReferencesComponent } from '../references/references.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesDetailComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'references', component: ReferencesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '/home', redirectTo: '/home', pathMatch: 'full' },
  { path: '/services', redirectTo: '/services', pathMatch: 'full' },
  { path: '/products', redirectTo: '/products', pathMatch: 'full' },
  { path: '/contact', redirectTo: '/contact', pathMatch: 'full' },
  { path: '/references', redirectTo: '/references', pathMatch: 'full' }
];
