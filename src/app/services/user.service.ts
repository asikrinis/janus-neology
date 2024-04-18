// En tu user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../model/user.model';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private usersCache: User[] | null = null;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    if (this.usersCache) {
      return of(this.usersCache); // Si ya hay una caché, la devuelve
    }
    return this.http.get<User[]>(this.apiUrl).pipe(
      tap(users => this.usersCache = users) // Guarda los usuarios en la caché
    );
  }

  getUserByName(name: string): Observable<User | undefined> {
    // Si ya hay una caché, busca en ella, si no, hace una petición HTTP
    return this.usersCache ?
      of(this.usersCache.find(user => user.name === name)) :
      this.getUsers().pipe(
        map(users => users.find(user => user.name === name))
      );
  }
}
