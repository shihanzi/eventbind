import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from 'src/components/customer/customer.component';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { DialoglocationComponent } from 'src/components/dialoglocation/dialoglocation.component';
import { LocationComponent } from 'src/components/location/location.component';
import { LotComponent } from 'src/components/lot/lot.component';
import { SignInComponent } from 'src/components/sign-in/sign-in.component';
import { SignUpComponent } from 'src/components/sign-up/sign-up.component';
import { AuthGuard } from 'src/guards/auth.guard';

const routes: Routes = [
  {path:'signin',component:SignInComponent},
  {path:'signup',component:SignUpComponent},
  {path:'location',component:LocationComponent,canActivate:[AuthGuard]},
  {path:'dialoglocation',component:DialoglocationComponent,canActivate:[AuthGuard]},
  {path:'lot',component:LotComponent},
  {path:'customer',component:CustomerComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
