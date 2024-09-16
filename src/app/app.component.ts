import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId = '';

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
   this.selectedUserId = id
  }
}