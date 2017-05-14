import { Component, OnInit } from '@angular/core';
import { PokerService } from '../poker.service';

@Component({
	selector: 'room',
	templateUrl: './app/room/room.component.html'
})

export class RoomComponent implements OnInit {
	constructor(private pokerService: PokerService) {

	}

	public ngOnInit() {
		this.pokerService.addRoomUpdateListener(this.updateRoom);
	}

	private updateRoom(room: any) {
		console.log(room);
	}
}
