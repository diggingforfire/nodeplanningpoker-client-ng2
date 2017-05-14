import { Component } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { PokerService } from '../poker.service';

@Component({
	selector: 'lobby',
	templateUrl: './app/lobby/lobby.component.html'
})

export class LobbyComponent {

	public playerName: string;
	public roomName: string;
	public password: string;

	constructor(private pokerService: PokerService) {
		this.playerName = Cookie.get('playerName');
		this.roomName = Cookie.get('roomName');
	}

	public joinRoom() {
		Cookie.set('playerName', this.playerName, 30);
		Cookie.set('roomName', this.roomName, 30);

		this.pokerService.joinRoom(this.playerName, this.roomName);
	}
}
