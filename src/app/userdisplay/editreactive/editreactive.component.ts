import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserdataService } from '../userdata.service';
import { CheckEmail } from '../checkemail';

@Component({
  selector: 'app-editreactive',
  templateUrl: './editreactive.component.html',
  styleUrls: ['./editreactive.component.scss']
})
export class EditreactiveComponent implements OnInit {

  constructor(private fb: FormBuilder,private _actroute: ActivatedRoute, private _userdata: UserdataService, private _router: Router) { }
  editSignupForm: FormGroup;
  email = '';
  displayUser: User;
  ngOnInit() {
    this.email = this._actroute.snapshot.params["user_email"];
    this._userdata.getUserByEmail(this.email).subscribe((data: User[]) => {
      this.displayUser = data[0];
      console.log(data);
      console.log(this.displayUser);
      this.editSignupForm.patchValue({
        user_email: this.displayUser.user_email,
        user_name: this.displayUser.user_name,
        user_mobile_no: this.displayUser.user_mobile_no,
        user_password_group: {
          user_password: this.displayUser.user_password,
          user_confirm_password: this.displayUser.user_password
        }
      });
    });
    this.editSignupForm = this.fb.group({
      user_email: new FormControl(null, [
        Validators.required,
        Validators.email
      ],CheckEmail.emailValidator(this._userdata)),
      user_name: new FormControl(null, Validators.required),
      user_password_group: new FormGroup(
        {
          user_password: new FormControl(null, Validators.required),
          user_confirm_password: new FormControl(null, Validators.required)
        },
        this.matchPassword.bind(this)
      ),
      user_mobile_no: new FormControl()
    });
  }
  matchPassword(x: AbstractControl): { [y: string]: boolean } {
    let password = x.get("user_password").value;
    let cnfmpassword = x.get("user_confirm_password").value;
    if (password != cnfmpassword) {
      return { passwordNotMatched: true };
    }
    return null;
  }
  onUserEdit() {
    this._userdata
      .editUser(
        new User(
          this.editSignupForm.value.user_email,
          this.editSignupForm.value.user_name,
          this.editSignupForm.value.user_password_group.user_password,
          this.editSignupForm.value.user_mobile_no
        )
      )
      .subscribe(
        (data:any)=>{
          this._router.navigate(['/user']);
        }
      );
  }
  }
