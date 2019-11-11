export class Product {
  public constructor(
    public pro_id: number,
    public pro_name: string,
    public pro_price: number,
    public pro_desc: string,
    public pro_qty: number,
    public pro_mfg: string,
    public pro_img: string
  ) {}
}
export class productResolved{
  public constructor(public data:any[],public errormsg:string ){}
}
