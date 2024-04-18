import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  standalone: false,
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(200)
      ]),
    ]),
  ]
})
export class UserListComponent implements OnInit {
  constructor(private userService: UserService) { }
  userList: User[] = [];

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.userList = data;
    });
  }
}
