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

	public joinRoom(roomName: string, playerName: string, listener: any): void {
		this.socket.on('updateRoom', listener);
		this.socket.emit('joinRoom', roomName, playerName);
	}

	public setEstimate(estimate: string) {
		this.socket.emit('setEstimate', estimate);
	}

	public setNextStory(nextStory: string) {
		this.socket.emit('nextStory', nextStory);
	}

	public toggleCards() {
		this.socket.emit('toggleCards');
	}
}
