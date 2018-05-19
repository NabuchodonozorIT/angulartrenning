import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HangarComponent} from './hangar/hangar.component';
import {BlackHoleComponent} from './black-hole/black-hole.component';
import {EngineersRoomComponent} from './ships/engineers-room/engineers-room.component';
import {EngineersTrashComponent} from './ships/engineers-trash/engineers-trash.component';
import {EngineersTrashGuard} from "./ships/engineers-trash.guard";
import {PilotResolver} from "./pilots/pilot.resolver";
import {PilotFormComponent} from "./pilots/pilot-form/pilot-form.component";

const routes: Routes = [
  {
    path: 'hangar',
    component: HangarComponent,
    children: [
      {path: 'trash', component: EngineersTrashComponent, canActivate: [EngineersTrashGuard]},
      {path: '', component: EngineersRoomComponent},
    ]
  },
  {path: 'pilots/new', component: PilotFormComponent, resolve: {pilot: PilotResolver}},
  {path: 'pilots/:id/edit', component: PilotFormComponent, resolve: {pilot: PilotResolver}},
  {path: 'intel', loadChildren: 'src/app/intel/intel.module#IntelModule'},
  {path: 'photo', loadChildren: 'src/app/photo/photo.module#PhotoModule'},
  {path: '', redirectTo: 'hangar', pathMatch: 'full'},
  {path: '**', component: BlackHoleComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
