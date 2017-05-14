import { Component } from '@angular/core';
import { LobbyComponent } from './lobby/lobby.component';

@Component({
	selector: 'app',
	templateUrl: './app/app.component.html'
})

export class AppComponent {
	public pageTitle: string = 'Node Planning Poker';
}
