import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Cookie } from 'ng2-cookies';

@Component({
	selector: 'lobby',
	templateUrl: './app/lobby/lobby.component.html'
})

export class LobbyComponent {

	public roomName: string;
	public playerName: string;
	public password: string;

	constructor(private router: Router, private location: Location) {
		this.roomName = Cookie.get('roomName');
		this.playerName = Cookie.get('playerName');
	}

	public joinRoom() {
		Cookie.set('roomName', this.roomName, 30);
		Cookie.set('playerName', this.playerName, 30);

		this.router.navigate(['/room', this.roomName, 'player', this.playerName]);
	}

	public isHidden(): boolean {
		return this.location.path() !== '';
	}
}
