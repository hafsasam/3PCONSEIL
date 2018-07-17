import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AlertModule } from 'ngx-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';

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
import { ReferencesComponent } from './references/references.component';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';

import { ProductService } from './service/product.service';
import { Services3pService } from './service/services3p.service';

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
    ReferencesComponent,
    ProductDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTabsModule
  ],
  entryComponents: [ ProductDialogComponent ],
  providers: [
    ProductService,
    Services3pService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
