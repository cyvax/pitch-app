import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfilComponent} from "./profil/profil.component";
import {PhoneComponent} from "./phone/phone.component";
import {IndexComponent} from "./index/index.component";
import {PartenairesComponent} from "./partenaires/partenaires.component";

const routes: Routes = [
  {path: 'profiles', component: ProfilComponent},
  {path: 'demo', component: PhoneComponent},
  {path: 'partenaires', component: PartenairesComponent},
  {path: '', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
