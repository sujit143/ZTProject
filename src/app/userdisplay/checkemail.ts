import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { map, delay, switchMap } from 'rxjs/operators';
import { Observable, timer } from "rxjs";
import { User } from './user';
import { UserdataService } from './userdata.service';

export class CheckEmail {

static  emailValidator(x:UserdataService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return x.getUserByEmail(control.value)
        .pipe(
          map((res:User[]) => {
            if (res.length==1) {
              return { 'emailInUse': true};
            }
          })
        );
    };

  }
}
