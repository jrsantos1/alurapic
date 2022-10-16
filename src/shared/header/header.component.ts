import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/user/user';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user$?: Observable<User>;
  user?: User;


  constructor(userService: UserService) {
    this.user$ = userService.getUser();
    console.log(this.user$);
    this.user$.subscribe(user => {
    this.user = user;}
    )

  }

  ngOnInit(): void {
  }

}
