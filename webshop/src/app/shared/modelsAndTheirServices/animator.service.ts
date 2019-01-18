import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {ApiService} from "../api.service";
import {AuthorizationService} from "../authorization.service";
import {Animator} from "./animator";

@Injectable({
  providedIn: ApiService,
})
export class AnimatorService {

  constructor(private api: ApiService,
              private authService: AuthorizationService,
              private router: Router) { }

  public getAll(): Observable<Animator[]> {
    return this.api.get<Animator[]>('animators');
  }

  public getOne(animatorID: number): Observable<Animator[]> {
    return this.api.get<Animator[]>('animators/' + animatorID);
  }

  public create(animator: Animator): void {
    const data = animator.getData();
    this.api.post<void>('animators', data).subscribe (
      data => {
        alert('Animator aangemaakt.');
        location.reload();
      },
      error => {
        alert('Could not make a new animator.');
      }
    );
  }

  public delete(animatorID: number): Observable<Animator[]> {
    return this.api.delete<Animator[]>('animators/' + animatorID);
  }

  public register(animator: Animator): void {
    const data = animator.getData();
    this.api.post<void>('animators', data).subscribe (
      data => {
        console.log(data);
      },
      error => {
        alert('Het registreren is mislukt');
      }
    );
  }
}
