import { Component, OnInit } from '@angular/core';
import { UserdataService } from './userdata.service';
import { User } from './user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userdisplay',
  templateUrl: './userdisplay.component.html',
  styleUrls: ['./userdisplay.component.scss']
})
export class UserdisplayComponent implements OnInit {
  arr:User[]=[];
  userData:any;
  errormessage:string='';
    constructor(private _actroute:ActivatedRoute, private _router: Router,private _data: UserdataService) {
      this.userData=this._actroute.snapshot.data["udata"];
    }
    ngOnInit() {
      this.arr=this.userData.data;
      this.errormessage=this.userData.errormessage;
    }

    onUserEditReactive(user) {
      this._router.navigate(['/edituser', user.user_email]);
    }

    onUserDelete(item:User){
      this._data.deleteUser(item.user_email).subscribe(
        (data:any)=>{
          this.arr.splice(this.arr.indexOf(item),1);
          alert('deleted');
        }
      );
    }
}
