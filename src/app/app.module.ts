import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DataEditComponent } from './data-edit/data-edit.component';
import { HeaderComponent } from './header/header.component';

import { Routes,RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { AuthComponent } from './auth/auth.component';

import { AngularFireModule } from '@angular/fire/compat';
import { FirebaseService } from './services/firebase.service';

const routes:Routes=[
  {path:'datatable',component:DatatableComponent},
  {path:'data-edit',component:DataEditComponent},
  {path:'header',component:HeaderComponent},
  {path:'data-edit/:index',component:DataEditComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    DatatableComponent,
    DataEditComponent,
    HeaderComponent,
    HomecomponentComponent,
    ThemeSwitcherComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC-xAGD6Gp4sRfhC00j9CUbrCsHrkHrWhM",
      authDomain: "angular-auth-2c467.firebaseapp.com",
      projectId: "angular-auth-2c467",
      storageBucket: "angular-auth-2c467.appspot.com",
      messagingSenderId: "260805271056",
      appId: "1:260805271056:web:54eb4655fe478a930c7495"
    }) 
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
