import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {A2sCommModule} from 'a2s-comm';
import {AppComponent} from './app.component';
import {HangarComponent} from './hangar/hangar.component';
import {SpaceShipComponent} from "./ships/space-ship/space-ship.component";
import {PilotComponent} from './pilots/pilot/pilot.component';
import {PilotRoomComponent} from './pilots/pilot-room/pilot-room.component';
import {EngineersRoomComponent} from './ships/engineers-room/engineers-room.component';
import {HttpClientModule} from '@angular/common/http';
import {SpaceImageDirective} from './shared/space-image.directive';
import {ShipNamePipe} from './ships/ship-name.pipe';
import {AppRoutingModule} from "./app-routing.module";
import {BlackHoleComponent} from './black-hole/black-hole.component';
import {EngineersTrashComponent} from './ships/engineers-trash/engineers-trash.component';
import {ReactiveFormsModule} from '@angular/forms';
import {PilotFormComponent} from './pilots/pilot-form/pilot-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HangarComponent,
    SpaceShipComponent,
    PilotComponent,
    PilotRoomComponent,
    EngineersRoomComponent,
    SpaceImageDirective,
    ShipNamePipe,
    BlackHoleComponent,
    EngineersTrashComponent,
    PilotFormComponent
  ],
  imports: [
    BrowserModule, A2sCommModule, FormsModule, HttpClientModule,
    AppRoutingModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
