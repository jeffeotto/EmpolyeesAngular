import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
import {EMPLOYEES} from '../employee-fakedata';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
 employees = EMPLOYEES;
  constructor() { }

  ngOnInit(): void {
  }

}
