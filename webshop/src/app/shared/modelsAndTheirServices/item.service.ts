import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {ApiService} from "../api.service";
import {AuthorizationService} from "../authorization.service";
import {Item} from "./item";
import {Basket} from "./basket";

@Injectable({
  providedIn: ApiService,
})
export class ItemService {

  constructor(private api: ApiService,
              private authService: AuthorizationService,
              private router: Router) { }

  public getAll(): Observable<Item[]> {
    return this.api.get<Item[]>('items');
  }

  public getOne(itemID: number): Observable<Item[]> {
    return this.api.get<Item[]>('items/' + itemID);
  }

  public create(item: Item): void {
    const data = item.getData();
    this.api.post<void>('items', data).subscribe (
      data => {
        alert('Item aangemaakt.');
        location.reload();
      },
      error => {
        alert('Could not make a new item.');
      }
    );
  }

  public delete(itemID: number): Observable<Item[]> {
    return this.api.delete<Item[]>('items/' + itemID);
  }

  public register(item: Item): void {
    const data = item.getData();
    this.api.post<void>('items', data).subscribe (
      data => {
        console.log(data);
      },
      error => {
        alert('Het registreren is mislukt');
      }
    );
  }
}
