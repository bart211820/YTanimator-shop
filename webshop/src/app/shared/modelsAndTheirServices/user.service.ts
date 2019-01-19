import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import {ApiService} from "../api.service";
import {AuthorizationService} from "../authorization.service";

import { User } from './user';
import {Order} from "./order";

@Injectable({
  providedIn: ApiService,
})
export class UserService
{
  constructor(private api: ApiService,
              private authService: AuthorizationService,
              private router: Router)
  {

  }

  public getAll(): Observable<User[]>
  {
    return this.api.get<User[]>('users');
  }

  public register(user: User): void
  {
    let data = user.getData();

    this.api.post<void>('users', data).subscribe
    (
      data =>
      {
        this.goHome();
      },
      error =>
      {
        alert('Het registreren is mislukt');
      }
    );
  }

  public login(user: User, remember: boolean): void
  {
    this.authService.setAuthorization(user.getEmailAdress(), user.getPassword());

    this.api.get<User>('users/me').subscribe
    (
      authenticator =>
      {
        this.authService.storeAuthorization(authenticator, remember);

        this.goHome();
      },
      error =>
      {
        alert('Het inloggen is mislukt');
      }
    );
  }

  public logout()
  {
    this.authService.deleteAuthorization();

    this.goHome();
  }

  private goHome()
  {
    this.router.navigate(['']);
  }

  public update(user: User): void {
    const data = user.getData();
    this.api.put<void>('users' + user.getUserID(), data).subscribe (
      data => {
        console.log('User has been updated.');
      },
      error => {
        console.log('User has NOT been updated!!! D:');
      }
    );
  }

  public delete(userID: number): Observable<Order[]> {
    return this.api.delete<Order[]>('users/' + userID);
  }
}
