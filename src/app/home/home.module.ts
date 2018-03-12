import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

import { AppMaterialModule } from './../app-material/app-material.module';
import { FormsModule }    from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppMaterialModule,
    FormsModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
