import { Injectable } from '@angular/core';
import * as io from 'io';

@Injectable()
export class PokerService {
	private endPoint: string = 'http://localhost:5050';
	private socket: SocketIOClient.Socket;

	constructor() {
		this.init();
	}

	private init(): void {
		this.socket = io(this.endPoint);
	}

	public joinRoom(playerName: string, roomName: string): void {
		this.socket.emit('joinRoom', roomName, playerName);
	}
}
