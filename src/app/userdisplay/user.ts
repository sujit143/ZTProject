export class User {
  public constructor(
    public user_email:string,
    public user_name:string,
    public user_password:string,
    public user_mobile_no:string

  ){}
}
 export class UserResolved{
   constructor(private data:any[],private errormessage:string){}
 }
