import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { SignInComponent } from 'src/components/sign-in/sign-in.component';
import { SignUpComponent } from 'src/components/sign-up/sign-up.component';
import { TokenInterceptor } from 'src/interceptors/token.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    NavBarComponent,
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
    MatListModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass :TokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }