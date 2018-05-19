import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IntelRoutingModule} from './intel-routing.module';
import {IntelBrowserComponent} from './intel-browser/intel-browser.component';

@NgModule({
  imports: [
    CommonModule,
    IntelRoutingModule
  ],
  declarations: [IntelBrowserComponent]
})
export class IntelModule {
}
