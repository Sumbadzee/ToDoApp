import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component'; 
import { UserComponent } from './user/user.component';
// import { DUMMY_USERS } from './dummy-users';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, 
  imports: [HeaderComponent, UserComponent, TasksComponent] 
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
    // console.log('Selected user with id: ' + id);
  }
}