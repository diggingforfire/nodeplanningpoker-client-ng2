import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokerService } from '../poker.service';

@Component({
	templateUrl: './app/room/room.component.html'
})

export class RoomComponent implements OnInit {
	constructor(private pokerService: PokerService, private route: ActivatedRoute) {

	}

	public ngOnInit() {
		let roomName = this.route.snapshot.params['roomName'];
		let playerName = this.route.snapshot.params['playerName'];

		this.pokerService.joinRoom(roomName, playerName, this.updateRoom);
	}

	private updateRoom(room: any) {
		console.log(room);
	}
}
