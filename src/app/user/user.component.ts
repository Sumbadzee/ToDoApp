import { Component, EventEmitter, Input, output, Output } from '@angular/core';

import { type User } from './user.model';
// import { CardComponent } from '../shared/card/card.component';

// type User = {
//     id: string;
//     avatar: string;
//     name: string;
// }

// interface User {
//     id: string;
//     avatar: string;
//     name: string;
// }


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter();
  // select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
