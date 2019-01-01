import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {ApiService} from "../../shared/api.service";
import {AuthorizationService} from "../../shared/authorization.service";
import {Item} from "./item";

@Injectable({
  providedIn: ApiService,
})
export class ShopService {

  constructor(private api: ApiService,
              private authService: AuthorizationService,
              private router: Router) { }

  public getAll(): Observable<Item[]> {
    return this.api.get<Item[]>('items');
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
