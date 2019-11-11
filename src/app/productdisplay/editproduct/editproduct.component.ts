import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductdataService } from "../productdata.service";
import { Product } from "../product";
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent implements OnInit {
  id: number;
  name: string = "";
  desc: string = "";
  price: number;
  qty: number;
  mfg: string = "";
  img: string = "";
  constructor(
    private _act: ActivatedRoute,
    private _data: ProductdataService,
    private _route:Router
  ) {}

  ngOnInit() {
    this.id = this._act.snapshot.params["pro_id"];

    this._data.getProductById(this.id).subscribe(
      (data: Product[]) => {
        this.name=data[0].pro_name;
        this.price=data[0].pro_price;
        this.desc=data[0].pro_desc;
        this.mfg=data[0].pro_mfg;
        this.qty=data[0].pro_qty;
        this.img=data[0].pro_img;
    });
  }
  onEditProduct(f){
      this._data.editProduct(this.id,f.value).subscribe(
        (data:any)=>{

          alert('updated');
          this._route.navigate(['/product']);
        }
      );
  }
}
