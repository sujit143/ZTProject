import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserResolved } from './user';
import { Observable, of } from 'rxjs';
import { UserdataService } from './userdata.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<UserResolved> {

  constructor(private _userdata:UserdataService) { }
  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any>{
    return this._userdata.getAllUsers().pipe(
      map(x=>({data:x,errormessage:''})),
      catchError(err=>{
        return of({data:null,errormessage:'something went wrong'})
      }
      )
    );
  }
}
