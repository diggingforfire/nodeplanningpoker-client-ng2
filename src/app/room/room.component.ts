import { Component, OnInit, OnDestroy, Optional } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokerService } from '../shared/poker.service';

@Component({
	selector: 'room',
	templateUrl: './app/room/room.component.html'
})

export class RoomComponent implements OnInit, OnDestroy {
	public players: any[] = [];
	public roomName: string;
	private playerId: string;

	constructor(private pokerService: PokerService, private route: ActivatedRoute) {

	}

	public ngOnInit() {
		this.roomName = this.route.snapshot.params['roomName'];
		let playerName = this.route.snapshot.params['playerName'];

		this.pokerService.joinRoom(this.roomName, playerName, (roomState: any) => {
			this.updateRoom(roomState);
		});
	}

	public ngOnDestroy() {
		this.pokerService.leaveRoom();
	}

	private updateRoom(roomState: any) {
		if (roomState) {
			this.players = [];
			var currentPlayerId = this.pokerService.getPlayerId();

			Object.keys(roomState.players).forEach(key => {
				let player = roomState.players[key];
				player.isYou = player.id === currentPlayerId;
				this.players.push(player);


			});
		}

		console.log(this.players);
	}
}
