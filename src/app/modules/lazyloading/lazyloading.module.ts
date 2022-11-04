import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyloadingRoutingModule } from './lazyloading-routing.module';
import { LazyloadingComponent } from './lazyloading.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    LazyloadingComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    LazyloadingRoutingModule
  ]
})
export class LazyloadingModule { }
