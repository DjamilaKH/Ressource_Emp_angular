import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RessourceComponent } from './ressource/ressource.component';
import { EmpruntComponent } from './emprunt/emprunt.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ressource', component: RessourceComponent },
  { path: 'emprunt', component: EmpruntComponent },

  { path: '**', redirectTo: '' } // Redirection en cas de route non trouvée
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
