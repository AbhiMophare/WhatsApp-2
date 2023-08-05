import { Component, OnInit } from '@angular/core';
import { MessagesComponent } from './messages/messages.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@Component({
  standalone: true,
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  imports: [SidenavComponent, MessagesComponent],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
