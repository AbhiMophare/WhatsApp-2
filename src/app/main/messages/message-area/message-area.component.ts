import { Component, OnInit } from '@angular/core';
import { InoutmsgComponent } from './inoutmsg/inoutmsg.component';

@Component({
  standalone: true,
  selector: 'app-message-area',
  templateUrl: './message-area.component.html',
  styleUrls: ['./message-area.component.css'],
  imports: [InoutmsgComponent],
})
export class MessageAreaComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
