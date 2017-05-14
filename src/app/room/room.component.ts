import { Component, OnInit, Optional } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokerService } from '../poker.service';

@Component({
	templateUrl: './app/room/room.component.html'
})

export class RoomComponent implements OnInit {
	public players: any[] = [];

	constructor(private pokerService: PokerService, private route: ActivatedRoute) {

	}

	public ngOnInit() {
		let roomName = this.route.snapshot.params['roomName'];
		let playerName = this.route.snapshot.params['playerName'];

		this.pokerService.joinRoom(roomName, playerName, (roomState: any) => {
			this.updateRoom(roomState);
		});
	}

	private updateRoom(roomState: any) {
		// if (roomState) {
		// 	this.players = this.players.slice();

		// 	Object.keys(roomState.players).forEach(key => {
		// 		this.players.push(roomState.players[key]);
		// 	});
		// }
	}
}
