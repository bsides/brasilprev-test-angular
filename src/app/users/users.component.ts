import { Component, OnInit, ViewChild } from '@angular/core'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { User } from '../app.model'
import { AppService } from '../app.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[]
  userSelected: User | {}
  dataSource: MatTableDataSource<User>
  displayedColumns: string[] = ['name', 'email']

  @ViewChild(MatSort, { static: true }) sort: MatSort

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getUsers()
  }

  getUsers(): void {
    this.appService.getUsers().subscribe(users => {
      this.users = users
      this.dataSource = new MatTableDataSource(users)
      this.dataSource.sort = this.sort
    })
    this.appService.selectedUser.subscribe(
      message => (this.userSelected = message)
    )
  }
}
