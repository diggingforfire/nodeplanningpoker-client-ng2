import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LobbyComponent } from './lobby/lobby.component';
import { FormsModule } from '@angular/forms';

@NgModule(
	{
		imports: [ BrowserModule, FormsModule ],
		declarations: [ AppComponent, LobbyComponent ],
		bootstrap: [ AppComponent ]
	}
)

export class AppModule { }
