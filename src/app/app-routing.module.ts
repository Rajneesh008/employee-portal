import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AllEmployeeComponent } from './all-employee/all-employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AllEmployeeComponent
  },
  {
    path:'all-employee',
    component: AllEmployeeComponent
  },
  {
    path: 'addEmployee',
    component: AddEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
