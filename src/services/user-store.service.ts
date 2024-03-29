import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  getfullNameForStore(unique_name: any) {
    throw new Error('Method not implemented.');
  }

  private fullName$ = new BehaviorSubject<string>('');
  private role$ = new BehaviorSubject<string>('');
  public fullName :string ="";

  constructor() { }

  public getRoleFromStore(){
    return this.role$.asObservable();
  }

  public setRoleForStore(role:string){
    this.role$.next(role);
  }

  public getfullNameFromStore(){
    return this.fullName$.asObservable();
  }

  public setfullNameForStore(fullName:string){
    this.fullName$.next(fullName);
  }
}
