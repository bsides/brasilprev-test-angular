import { Component, OnInit } from '@angular/core'
import { AppService } from './app.service'
import { UserDetail } from './app.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userSelected: UserDetail | {}

  constructor(private data: AppService) {}

  ngOnInit() {
    this.data.selectedUser.subscribe(user => (this.userSelected = user))
  }
}
