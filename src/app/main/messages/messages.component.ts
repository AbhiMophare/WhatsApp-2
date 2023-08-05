import { Component, OnInit } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { MessageAreaComponent } from './message-area/message-area.component';
import { MessageHeaderComponent } from './message-header/message-header.component';

@Component({
  standalone: true,
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  imports: [FooterComponent, MessageAreaComponent, MessageHeaderComponent],
})
export class MessagesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
