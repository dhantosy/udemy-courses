import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-databinding',
  templateUrl: './server-databinding.component.html',
  styleUrls: ['./server-databinding.component.css']
})

export class ServerDatabindingComponent {
	serverId: number = 10;
	serverStatus: string = 'offline';

	getServerStatus() {
		return this.serverStatus;
	}
}

@Component({
  selector: 'app-server-databinding-property',
  templateUrl: './server-databinding-property.component.html',
  styleUrls: ['./server-databinding.component.css']
})

export class ServerDatabindingPropertyComponent implements OnInit {
	allowNewServer = false;
	serverCreationStatus = 'No server was created';

	constructor() {
		setTimeout(() => {
			this.allowNewServer = true;
		}, 2000);
	}

	ngOnInit() {
	}

	onCreateServer() {
		this.serverCreationStatus = 'Server was created';
	}

	onUpdateServerName(event: any) {
		console.log(event);
	}
}
