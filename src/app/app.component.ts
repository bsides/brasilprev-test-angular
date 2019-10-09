import { Component, OnInit } from '@angular/core'
import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userSelected: any

  constructor(private data: AppService) {}

  ngOnInit() {
    this.data.selectedUser.subscribe(user => (this.userSelected = user))
  }
}
