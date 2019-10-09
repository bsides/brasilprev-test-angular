import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AppService } from './app.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { UsersComponent } from './users/users.component'
import { UserDetailsComponent } from './user-details/user-details.component'

import { MatSortModule } from '@angular/material/sort'
import { MatTableModule } from '@angular/material/table'

@NgModule({
  declarations: [AppComponent, UsersComponent, UserDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
