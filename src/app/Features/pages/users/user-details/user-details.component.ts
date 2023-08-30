import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Shared/models/Dtos/user.models';
import { UserService } from 'src/app/Shared/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  user!: User;

  constructor(
    private activeRouter: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    let userId = this.activeRouter.snapshot.paramMap.get('id');
    this.userService.get(userId).subscribe(
      (data) => {
        this.user = data;
        console.log(this.user.status.toString());
      },
      (error) => {
        alert(error);
      }
    );
  }
}
