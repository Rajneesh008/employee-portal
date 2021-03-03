import { Router } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
employeeDetail: FormGroup;
departments = ['Finance', 'Operations', 'Technology', 'HR'];
designations = ['Trainee','Junior Manager', 'Manager', 'General Manager', 'Vice President'];

  constructor(private service: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.employeeDetail = new FormGroup({
      id: new FormControl('',[
        Validators.required,
        Validators.pattern('^[A-Z][A-Z][0-9][0-9]')
      ]),
      name: new FormControl('',[Validators.required,
        Validators.minLength(6),

      ]),
      department: new FormControl(null,[
        Validators.required,

      ]),
      designation: new FormControl(null,[
        Validators.required
      ]),
      salary: new FormControl('',[
        Validators.required
      ]),
      gender: new FormControl('',[
        Validators.required
      ])
    });
  }
startChar():ValidatorFn{
  return (control: AbstractControl): {[key:string]:any} | null => {
    var s1 =control.value;
    var len = s1.length;
    var ok  = false;
    if(len>6){
      var ch = s1.charAt(0);
      if((ch >= 'A' && ch<='Z')||(ch >= 'a' && ch <='z'))
       ok = true;
    }
    else {
      ok = false;
    }
    return (ok ? null : {'startChar': true});
  }
}
get id() { return this.employeeDetail.get('id');}
get name() {return this.employeeDetail.get('name');}
get department() {return this.employeeDetail.get('department');}
get designation() {return this.employeeDetail.get('designation');}
get salary() {return this.employeeDetail.get('salary');}
get gender() {return this.employeeDetail.get('gender');}

onSumbit(){
  let d1 = {};
  d1["id"]= this.employeeDetail.get("id").value;
  d1["name"]= this.employeeDetail.get("name").value;
  d1["department"] = this.employeeDetail.get("department").value;
  d1["designation"] = this.employeeDetail.get("designation").value;
  d1["salary"] = this.employeeDetail.get("salary").value;
  d1["gender"] = this.employeeDetail.get("gender").value;
  this.service.postData("https://us-central1-yibrds.cloudfunctions.net/app/addEmployee", d1).subscribe(data => {
    console.log(data);
  });
  this.router.navigate(['/all-employee']);
}
}
