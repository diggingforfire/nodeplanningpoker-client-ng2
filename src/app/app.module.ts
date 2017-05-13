import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LobbyComponent } from './lobby/lobby.component';


@NgModule(
	{
		imports: [ BrowserModule ],
		declarations: [ AppComponent, LobbyComponent ],
		bootstrap: [ AppComponent ]
	}
)

export class AppModule { }
