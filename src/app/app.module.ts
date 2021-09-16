import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ProfilComponent} from './profil/profil.component';
import {QuestionsComponent} from './questions/questions.component';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {PhoneComponent} from './phone/phone.component';
import {IndexComponent} from './index/index.component';
import {PartenairesComponent} from './partenaires/partenaires.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuestionsComponent,
    NavbarComponent,
    ProfilComponent,
    PhoneComponent,
    IndexComponent,
    PartenairesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
