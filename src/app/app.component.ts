import { Component } from '@angular/core';
import { LobbyComponent } from './lobby/lobby.component';

@Component({
	selector: 'app',
	templateUrl: './app/app.component.html'
})

export class AppComponent {

	public navigateToNode() {
		window.location.href = 'https://nodejs.org';
	}
}
