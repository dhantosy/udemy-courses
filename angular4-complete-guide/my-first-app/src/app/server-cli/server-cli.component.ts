import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-cli',
  // selector: '.app-server-cli', // use class
  // selector: '[app-server-cli]', // use attribute
  templateUrl: './server-cli.component.html',
  // template: `
		// <app-server-cli></app-server-cli>
  // `,
  styleUrls: ['./server-cli.component.css']
  // styles: [`
		// h1 {
		// 	color: blue;
		// }
  // `]
})
export class ServerCliComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
