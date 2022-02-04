import { NgModule } from '@angular/core';
import { UiImageDirective } from './ui-image.directive';

@NgModule({
  declarations: [
    UiImageDirective
  ],
  exports: [
    UiImageDirective
  ]
})
export class UiImageModule {}
