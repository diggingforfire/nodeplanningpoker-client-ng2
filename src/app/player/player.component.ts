import { Component, Input } from '@angular/core';

@Component({
	selector: 'player',
	templateUrl: './app/player/player.component.html'
})

export class PlayerComponent {

	@Input() public name: string;
	@Input() public currentEstimate: string = '0';
}