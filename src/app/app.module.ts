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
    HomecomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
