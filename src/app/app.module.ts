import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { AppService } from './app.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { UsersComponent } from './users/users.component'
import { UserDetailsComponent } from './user-details/user-details.component'

import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list'
import { MatSortModule } from '@angular/material/sort'
import { MatTableModule } from '@angular/material/table'

import { LOCALE_ID } from '@angular/core'
import { registerLocaleData } from '@angular/common'
import localePt from '@angular/common/locales/pt'
registerLocaleData(localePt)

@NgModule({
  declarations: [AppComponent, UsersComponent, UserDetailsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [AppService, { provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
