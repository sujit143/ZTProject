import { Component, OnInit } from '@angular/core';
import { Product } from '../productdisplay/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolverproduct',
  templateUrl: './resolverproduct.component.html',
  styleUrls: ['./resolverproduct.component.scss']
})
export class ResolverproductComponent implements OnInit {

  arr:Product[]=[];
  productData:any;
  errormessage:string;
    constructor(private _actroute:ActivatedRoute) {
      this.productData=this._actroute.snapshot.data["pdata"];
      console.log(this.productData);
     }

    ngOnInit() {
      this.arr=this.productData.products;
      console.log(this.arr);
      this.errormessage=this.productData.errormsg;

    }


}
