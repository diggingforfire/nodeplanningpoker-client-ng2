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

			Object.keys(roomState.players).forEach(key => {
				this.players.push(roomState.players[key]);
			});
		}

		console.log(this.players);
	}
}
