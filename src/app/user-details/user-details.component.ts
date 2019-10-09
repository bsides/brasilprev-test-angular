import { Component, OnInit } from '@angular/core'
import { AppService } from '../app.service'
import { UserDetail } from '../app.model'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userSelected: UserDetail | {}

  constructor(private data: AppService) {}

  ngOnInit() {
    this.data.selectedUser.subscribe(user => (this.userSelected = user))
  }

  newMessage() {
    // this.data.selectUser()
  }
}
