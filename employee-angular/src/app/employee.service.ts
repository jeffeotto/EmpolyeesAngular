import { Injectable } from '@angular/core';
import{Employee} from './employee';
import {Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
employee:Employee;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private employeesUrl = 'https://localhost:44354/api/employees';
  errorMsg: string;
  
  
  constructor(private http: HttpClient) { }



private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    //this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  /** POST: add a new hero to the server */
addEmployee(employee: Employee): Observable<Employee> {
  return this.http.post<Employee>(this.employeesUrl, employee, this.httpOptions);
  
}
  
  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this. employeesUrl)
    .pipe(
      catchError(this.handleError<Employee[]>('getEmployees', []))
    );
    
  
  }

  
getEmployee(id: number): Observable<Employee> {
    const url = `${this.employeesUrl}/${id}`;
    return this.http.get<Employee>(url)
    .pipe(
     catchError(this.handleError<Employee>(`getEmployee id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
updateEmployee(employee: Employee): Observable<any> {
  return this.http.put(this.employeesUrl, employee, this.httpOptions).pipe(
    catchError(this.handleError<any>('updateEmployee'))
  );
}

/** DELETE: delete the hero from the server */
deleteEmployee(employee: Employee | number): Observable<Employee> {
  const id = typeof employee === 'number' ?employee :employee.id;
  const url = `${this.employeesUrl}/${id}`;

  return this.http.delete<Employee>(url, this.httpOptions).pipe(
    
    catchError(this.handleError<Employee>('deleteEmployee'))
  );
}

}
