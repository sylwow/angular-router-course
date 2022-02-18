import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }


  /*
  old way broken!!! currently does not work
    <button
      mat-raised-button
      [routerLink]="['../', { outlets: { chat: null } }]"
      (click)="closeChat()"
    >
      Close Chat
    </button>
  */
  closeChat(): void {
    this.router.navigate(
      [
        {
          outlets: {
            chat: null
          }
        }
      ], {
      relativeTo: this.route.parent // <--- PARENT activated route.
    }
    );
  }
}
