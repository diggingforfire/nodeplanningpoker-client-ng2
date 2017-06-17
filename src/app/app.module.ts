import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LobbyComponent } from './lobby/lobby.component';
import { RoomComponent } from './room/room.component';
import { PlayerComponent } from './player/player.component';

@NgModule(
	{
		imports: [ BrowserModule, FormsModule, RouterModule.forRoot([
				{ path: 'room/:roomName/player/:playerName', component: RoomComponent }
			]) 
		],
		declarations: [ AppComponent, LobbyComponent, RoomComponent, PlayerComponent ],
		bootstrap: [ AppComponent ]
	}
)

export class AppModule { }
