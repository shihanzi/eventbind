import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { SignInComponent } from 'src/components/sign-in/sign-in.component';
import { SignUpComponent } from 'src/components/sign-up/sign-up.component';
import { TokenInterceptor } from 'src/interceptors/token.interceptor';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule, MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from 'src/components/home/home.component';
import { SideNavComponent } from 'src/components/side-nav/side-nav.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LocationComponent } from 'src/components/location/location.component';
import { CustomerComponent } from 'src/components/customer/customer.component';
import { RepComponent } from 'src/components/rep/rep.component';
import { LotComponent } from 'src/components/lot/lot.component';
import {FormBuilder, FormControl} from '@angular/forms';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';
import { DialogcustomerComponent } from 'src/components/dialogcustomer/dialogcustomer.component';
import { DialoglocationComponent } from 'src/components/dialoglocation/dialoglocation.component';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    NavBarComponent,
    HomeComponent,
    LocationComponent,
    CustomerComponent,
    LotComponent,
    RepComponent,
    SideNavComponent,
    DialogcustomerComponent,
    DialoglocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    MatSliderModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass :TokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }