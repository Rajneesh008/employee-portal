import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
  styleUrls: ['./all-employee.component.css']
})
export class AllEmployeeComponent implements OnInit {
departmentStruct = { departments : ['Finance', 'Operations', 'Technology', 'HR'], selected: null};
designationStruct = {  designations: ['Trainee','Junior Manager', 'Manager', 'General Manager', 'Vice President'], selected: null};
genderStruct = {gender: ['Male', 'Female'], selected: null};
salaryStruct={amount: ['<15000', '15000-25000', '>25000'], selected: null};
employeeDetail;
page = 1;

  constructor(private serivce: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.departmentStruct.selected = null;
    this.designationStruct.selected = null;
    this.genderStruct.selected = null;
    this.salaryStruct.selected = null;
    this.page = 1;
    this.getData();
  }
getData() {
  this.serivce.getData("https://us-central1-yibrds.cloudfunctions.net/app/employeeDetails").subscribe(data =>{
  this.employeeDetail = data;
  this.router.navigate(['/all-employee'],{queryParams: {page: this.page}});
  });
}
selectedData(){
  console.log("designation",this.designationStruct.selected);
  if(this.departmentStruct.selected
    || this.designationStruct.selected
    || this.genderStruct.selected
    || this.salaryStruct.selected){
      this.router.navigate(['/all-employee'],
      {queryParams: {department: this.departmentStruct.selected,
       designation: this.designationStruct.selected,
      gender: this.genderStruct.selected,
    salary: this.salaryStruct.selected,
    page: this.page }});
      this.serivce.getData("https://us-central1-yibrds.cloudfunctions.net/app/employeeDetails?designation="+
      this.designationStruct.selected+"&department="+this.departmentStruct.selected+
      "&gender="+this.genderStruct.selected+"&salary="+this.salaryStruct.selected+"&page="+this.page
      ).subscribe(data =>{
        this.employeeDetail = data;
      })
    }
}
nextPage(){
  this.page += 1;
  if(this.departmentStruct.selected
    || this.designationStruct.selected
    || this.genderStruct.selected
    || this.salaryStruct.selected)
  this.selectedData();
  else {
    this.getData();
  }
}
previousPage(){
  if(this.page > 1){
  this.page -= 1;}
  else {
    this.page = 1;
  }
  if(this.departmentStruct.selected
    || this.designationStruct.selected
    || this.genderStruct.selected
    || this.salaryStruct.selected)
  this.selectedData();
  else {
    this.getData();
  }

}

}
