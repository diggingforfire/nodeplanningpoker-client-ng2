import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'

@Injectable()
export class PokerService {
	private endPoint: string = 'http://192.168.178.23:5050';
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

	public leaveRoom() {
		this.socket.emit('leaveRoom');
	}
}
