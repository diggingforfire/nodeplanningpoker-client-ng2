import { Component } from '@angular/core';
import { LobbyComponent } from './lobby/lobby.component';
import { PokerService } from './shared/poker.service';

@Component({
	selector: 'app',
	templateUrl: './app/app.component.html',
	providers: [ PokerService ]
})

export class AppComponent {
	public pageTitle: string = 'Node Planning Poker';
}
