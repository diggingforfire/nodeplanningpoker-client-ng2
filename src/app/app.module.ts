import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LobbyComponent } from './lobby/lobby.component';
import { RoomComponent } from './room/room.component';

@NgModule(
	{
		imports: [ BrowserModule, FormsModule ],
		declarations: [ AppComponent, LobbyComponent, RoomComponent ],
		bootstrap: [ AppComponent ]
	}
)

export class AppModule { }
