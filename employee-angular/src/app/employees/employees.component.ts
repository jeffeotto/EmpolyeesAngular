import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
import { Location } from '@angular/common';
import{EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})


export class EmployeesComponent implements OnInit {
  employee: Employee;
 employees: Employee[];
  constructor(private employeeService: EmployeeService,
    private location: Location) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  add(name: string,secondName:string,position:string,salary:number): void {
   
    if (!name) { return; }
    this.employeeService.addEmployee({ name,secondName,position,salary } as Employee)
      .subscribe(employee => {
        this.employees.push(employee);
      });
  }

   getEmployees(): void{
     this.employeeService.getEmployees()
     .subscribe(employees => this.employees = employees);
   }

   delete(employee: Employee): void {
    this.employees = this.employees.filter(h => h !== employee);
    this.employeeService.deleteEmployee(employee).subscribe();
  }

  save(): void {
    this.employeeService.updateEmployee(this.employee)
     
  }
}
