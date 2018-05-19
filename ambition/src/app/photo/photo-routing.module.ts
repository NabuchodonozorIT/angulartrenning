import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PhotoBrowserComponent} from "./photo-browser/photo-browser.component";

const routes: Routes = [
  {path: 'chackData', component: PhotoBrowserComponent},
  {path: '', redirectTo: 'chackData', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoRoutingModule {
}
