import { Component } from '@angular/core';
import { LobbyComponent } from './lobby/lobby.component';

@Component({
	selector: 'app',
	templateUrl: './app/app.component.html'
})

export class AppComponent {

	private test() {
		let x = 5;
		let y = 10;

		[x, y] = [y, x];


		return x;
	}
}
