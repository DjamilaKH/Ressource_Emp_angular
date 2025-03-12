// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
// import { HomeComponent } from './home/home.component';
// import { ProfileComponent } from './profile/profile.component';
// import { BoardAdminComponent } from './board-admin/board-admin.component';
// import { BoardEmployeComponent } from './board-employe/board-employe.component';
// import { FormsModule } from '@angular/forms';

// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     HomeComponent,
//     ProfileComponent,
//     BoardAdminComponent,
//     BoardEmployeComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     HttpClientModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardEmployeComponent } from './board-employe/board-employe.component';
import { RegisterComponent } from './register/register.component';
import { RessourceComponent } from './ressource/ressource.component';
import { EmpruntComponent } from './emprunt/emprunt.component';

@NgModule({
  declarations: [
    AppComponent,
        LoginComponent,
        HomeComponent,
        ProfileComponent,
        BoardAdminComponent,
        BoardEmployeComponent,
        RegisterComponent,
        RessourceComponent,
        EmpruntComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }