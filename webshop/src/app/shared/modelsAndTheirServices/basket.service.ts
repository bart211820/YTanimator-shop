import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {ApiService} from "../api.service";
import {AuthorizationService} from "../authorization.service";
import {Basket} from "./basket";
import {Item} from "./item";

@Injectable({
  providedIn: ApiService,
})
export class BasketService {

  constructor(private api: ApiService,
              private authService: AuthorizationService,
              private router: Router) { }

  public getAll(): Observable<Basket[]> {
    return this.api.get<Basket[]>('baskets');
  }

  public getOne(basketID: number): Observable<Basket[]> {
    return this.api.get<Basket[]>('baskets/' + basketID);
  }

  public getFromUser(basketUserID: number): Observable<Basket[]> {
    console.log('baskets/from/' + basketUserID);
    return this.api.get<Basket[]>('baskets/from/' + basketUserID);
  }

  public create(basket: Basket): void {
    const data = basket.getData();
    this.api.post<void>('baskets', data).subscribe (
      data => {
        alert('Basket aangemaakt.');
        location.reload();
      },
      error => {
        alert('Could not make a new basket.');
      }
    );
  }

  public update(basket: Basket): void {
    const data = basket.getData();
    this.api.put<void>('baskets/' + basket.getBasketID(), data).subscribe (
      data => {
        console.log('Basket has been updated.');
      },
      error => {
        console.log('Basket has NOT been updated!!! D:');
      }
    );
  }

  public delete(basketID: number): Observable<Basket[]> {
    return this.api.delete<Basket[]>('baskets/' + basketID);
  }

  public deleteFromUser(basketUserID: number): Observable<Basket[]> {
    return this.api.delete<Basket[]>('baskets/from/' + basketUserID);
  }

  public register(basket: Basket): void {
    const data = basket.getData();
    this.api.post<void>('baskets', data).subscribe (
      data => {
        console.log(data);
      },
      error => {
        alert('Het registreren is mislukt');
      }
    );
  }
}
