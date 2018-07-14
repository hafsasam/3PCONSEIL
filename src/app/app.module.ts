import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AlertModule } from 'ngx-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FragmentPolyfillModule } from './fragment-polyfill/fragment-polyfill.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { PresentationComponent } from './presentation/presentation.component';
import { WhoRComponent } from './who-r/who-r.component';
import { PartnersComponent } from './partners/partners.component';
import { ValuesSliderComponent } from './values-slider/values-slider.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesDetailComponent } from './services-detail/services-detail.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { ReferencesComponent } from './references/references.component';

import { ProductService } from './service/product.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    PresentationComponent,
    WhoRComponent,
    PartnersComponent,
    ValuesSliderComponent,
    ServicesComponent,
    ProductsComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    ServicesDetailComponent,
    ProductsDetailComponent,
    ReferencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatToolbarModule,
    FragmentPolyfillModule.forRoot({
      smooth: true
    })
  ],
  providers: [ ProductService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
