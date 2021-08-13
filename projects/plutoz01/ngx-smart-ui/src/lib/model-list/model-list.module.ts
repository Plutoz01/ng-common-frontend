import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelListComponent } from './model-list/model-list.component';

@NgModule({
  declarations: [
    ModelListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModelListComponent
  ]
})
export class ModelListModule { }
