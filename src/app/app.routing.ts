import { HomeComponent } from './home/home.component';
import { AddtaskComponent } from './taskdisplay/addtask/addtask.component';
import { Routes, RouterModule } from '@angular/router';
import { EdittaskComponent } from './taskdisplay/edittask/edittask.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { SignupreactiveComponent } from './userdisplay/signupreactive/signupreactive.component';
import { EditreactiveComponent } from './userdisplay/editreactive/editreactive.component';
import { UserResolverService } from './userdisplay/user-resolver.service';
import { LoginComponent } from './login/login.component';
import { UserGuardService } from './user-guard.service';
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { ProductaddComponent } from './productdisplay/productadd/productadd.component';
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
import { productResolved } from './productdisplay/product';
import { ResolverproductComponent } from './resolverproduct/resolverproduct.component';
import { ProductresolverService } from './productresolver.service';
import { EditproductComponent } from './productdisplay/editproduct/editproduct.component';
const arr : Routes=[
  {path:'',component:HomeComponent},
  {path:'product',canActivate:[UserGuardService],component:ProductdisplayComponent},
  {path:'task',component:TaskdisplayComponent},
  {path:'product1',resolve:{pdata:ProductresolverService},component:ResolverproductComponent},
  {path:'editproduct/:pro_id',component:EditproductComponent},
  {path:'addproduct',component:ProductaddComponent},
  {path:'addtask',component:AddtaskComponent},
  {path:'edittask/:Id',component:EdittaskComponent},
  {path:'user',resolve:{udata:UserResolverService},component:UserdisplayComponent},
  {path:'adduser',component:SignupreactiveComponent},
  {path:'edituser/:user_email',component:EditreactiveComponent},

  {path:'login',component:LoginComponent},
  {path:'pagenotfound',component:PagenotfoundComponent},
  {path:'**',redirectTo:'/pagenotfound'}
];

export const routing=RouterModule.forRoot(arr);
