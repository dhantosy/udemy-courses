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
