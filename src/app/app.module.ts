import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeNavbarComponent } from './employee-navbar/employee-navbar.component';
import { AllEmployeeComponent } from './all-employee/all-employee.component';
import { EmployeeLeftPanelComponent } from './employee-left-panel/employee-left-panel.component';
@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EmployeeNavbarComponent,
    AllEmployeeComponent,
    EmployeeLeftPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
