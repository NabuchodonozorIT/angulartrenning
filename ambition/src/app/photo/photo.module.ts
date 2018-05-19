import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoRoutingModule } from './photo-routing.module';
import { PhotoBrowserComponent } from './photo-browser/photo-browser.component';

@NgModule({
  imports: [
    CommonModule,
    PhotoRoutingModule
  ],
  declarations: [PhotoBrowserComponent]
})
export class PhotoModule { }
