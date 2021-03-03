import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-left-panel',
  templateUrl: './employee-left-panel.component.html',
  styleUrls: ['./employee-left-panel.component.css']
})
export class EmployeeLeftPanelComponent implements OnInit {
@Input() departmentStruct;
@Input() designationStruct;
@Input() genderStruct;
@Input() salaryStruct;

@Output() selectedData = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
sendData(){
  this.selectedData.emit();
}
}
