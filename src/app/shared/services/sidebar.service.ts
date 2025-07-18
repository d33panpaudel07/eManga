import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebarOpen$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // Exposing the variable as observable
  sidebarState$:Observable<boolean> = this.sidebarOpen$.asObservable() //ensures no one can modify from outside
  //use case example is below
  /**
   * this.sidebarService.sidebarState$.subscribe(...)
   *
   *                        OR
   *
   * sidebarService.sidebarState$.subscribe(open => {
   *   this.sidebarOpen = open;
   * });
   * */

  constructor() { }

  toggleSidebar(){
    this.sidebarOpen$.next(!this.sidebarOpen$.value);
  }

  setSidebar(active:boolean){
    this.sidebarOpen$.next(active);
  }

  get sidebarState(){
    return this.sidebarOpen$.value;
  }
}
