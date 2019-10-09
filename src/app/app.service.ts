import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of, BehaviorSubject } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { UserDetail, User, APIResultUser } from './app.model'

// In real world, this would be separated for each entity
// I'm keeping it tight though
@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = 'https://randomuser.me/api/?results=50&nat=br'
  private userSource = new BehaviorSubject({})
  selectedUser = this.userSource.asObservable()

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<APIResultUser>(this.apiUrl).pipe(
      map(json =>
        json.results.map(user => ({
          ...user,
          name: user.name.first,
          fullName: user.name.first + ' ' + user.name.last
        }))
      ),
      catchError(this.handleError<User[]>('getUsers', []))
    )
  }

  selectUser(user: UserDetail | {}) {
    this.userSource.next(user)
  }

  // In real world we would need to query again with the id from
  // the list above but in this case we already have all data

  // getUser(id?: number): Observable<UserDetail[]> {
  //   // In real world apps the api needs an id
  //   // This one throws everything at us so we don't need it
  //   // const url = `${this.apiUrl}`
  //   return this.http.get<APIResult>(this.apiUrl).pipe(
  //     map(json => json.results),
  //     catchError(
  //       this.handleError<UserDetail[]>(
  //         id ? `getUser id=${id}` : `getUser with no id`
  //       )
  //     )
  //   )
  // }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error) // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`)

      // Let the app keep running by returning an empty result.
      return of(result as T)
    }
  }
}
