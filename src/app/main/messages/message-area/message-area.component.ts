import { Component, OnInit } from '@angular/core';
import { MsgComponent } from './msg/msg.component';

@Component({
  standalone: true,
  selector: 'app-message-area',
  templateUrl: './message-area.component.html',
  styleUrls: ['./message-area.component.css'],
  inputs: [MsgComponent],
})
export class MessageAreaComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
