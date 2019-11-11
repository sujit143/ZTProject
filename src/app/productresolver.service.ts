import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProductdataService } from './productdisplay/productdata.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { productResolved } from './productdisplay/product';

@Injectable({
  providedIn: 'root'
})
export class ProductresolverService implements Resolve<productResolved> {

  constructor(private _productdata:ProductdataService) { }
  resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<any>{
    return this._productdata.getAllProducts().pipe(
      map(x=>({products:x,errormsg:''})),
      catchError(error=>{
        return of({products:null,errormsg:'Something went wrong'});
      })
    );
  }
}
