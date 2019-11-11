import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdisplay/userdata.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private _userdata: UserdataService) { }

  ngOnInit() {
  }
  onLogOut(){
    this._userdata.logout();
  }
  isLoggedIn(){
    return this._userdata.isLoggedIn;
  }
}
