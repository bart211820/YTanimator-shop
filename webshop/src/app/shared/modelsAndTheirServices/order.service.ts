import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {ApiService} from "../api.service";
import {AuthorizationService} from "../authorization.service";
import {Order} from "./order";
import {User} from "./user";

@Injectable({
  providedIn: ApiService,
})
export class OrderService {

  constructor(private api: ApiService,
              private authService: AuthorizationService,
              private router: Router) { }

  public getAll(): Observable<Order[]> {
    return this.api.get<Order[]>('orders');
  }

  public getOne(orderID: number): Observable<Order[]> {
    return this.api.get<Order[]>('orders/' + orderID);
  }

  public getFromUser(orderUserID: number): Observable<Order[]> {
    return this.api.get<Order[]>('orders/from/' + orderUserID);
  }

  public create(order: Order): void {
    const data = order.getData();
    this.api.post<void>('orders', data).subscribe (
      data => {
        alert('Order aangemaakt.');
        location.reload();
      },
      error => {
        alert('Could not make a new order.');
      }
    );
  }

  public update(order: Order): void {
    const data = order.getData();
    this.api.put<void>('orders/' + order.getOrderID(), data).subscribe (
      data => {
        console.log('Order has been updated.');
      },
      error => {
        console.log('Order has NOT been updated!!! D:');
      }
    );
  }

  public delete(orderID: number): Observable<Order[]> {
    return this.api.delete<Order[]>('orders/' + orderID);
  }

  public deleteFromUser(orderUserID: number): Observable<Order[]> {
    return this.api.delete<Order[]>('orders/from/' + orderUserID);
  }

  public register(order: Order): void {
    const data = order.getData();
    this.api.post<void>('orders', data).subscribe (
      data => {
        console.log(data);
      },
      error => {
        alert('Het registreren is mislukt');
      }
    );
  }
}
