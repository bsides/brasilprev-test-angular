import { Component, OnInit, ViewChild } from '@angular/core'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { MatSortable } from '@angular/material/sort'
import { User, UserDetail } from '../app.model'
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
    this.getSelectedUser()
  }

  selectUser(userFromTable: UserDetail): void {
    this.appService.selectUser(userFromTable)
  }

  private getUsers(): void {
    this.appService.getUsers().subscribe(users => {
      this.users = users
      this.dataSource = new MatTableDataSource(users)
      this.sort.sort({ id: 'name', start: 'asc' } as MatSortable)
      this.dataSource.sort = this.sort
    })
  }

  private getSelectedUser(): void {
    this.appService.selectedUser.subscribe(user => (this.userSelected = user))
  }
}
