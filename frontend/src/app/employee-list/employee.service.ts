import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = `${environment.backendUrl}/graphql`;;

  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<any[]> {
    const query = `
      {
        getAllEmployees {
          id
          first_name
          last_name
          email
          gender
          designation
          salary
          date_of_joining
          department
          employee_photo
        }
      }
    `;
    return this.http.post<any>(this.apiUrl, { query }).pipe(
      map(res => res.data.getAllEmployees)
    );
  }

addEmployee(employee: any): Observable<any> {
  const mutation = `
    mutation AddEmployee(
      $first_name: String!,
      $last_name: String!,
      $email: String!,
      $gender: String!,
      $designation: String!,
      $salary: Float!,
      $date_of_joining: String!,
      $department: String!,
      $employee_photo: String
    ) {
      addEmployee(
        first_name: $first_name,
        last_name: $last_name,
        email: $email,
        gender: $gender,
        designation: $designation,
        salary: $salary,
        date_of_joining: $date_of_joining,
        department: $department,
        employee_photo: $employee_photo
      ) {
        id
        first_name
      }
    }
  `;

  const variables = {
    first_name: employee.first_name,
    last_name: employee.last_name,
    email: employee.email,
    gender: employee.gender,
    designation: employee.designation,
    salary: parseFloat(employee.salary) || 0,
    date_of_joining: employee.date_of_joining,
    department: employee.department,
    employee_photo: employee.employee_photo
  };

  return this.http.post<any>(this.apiUrl, {
    query: mutation,
    variables
  });
}

updateEmployee(emp: any): Observable<any> {
  const query = `
    mutation {
      updateEmployee(
        eid: "${emp.id}",
        first_name: "${emp.first_name}",
        last_name: "${emp.last_name}",
        email: "${emp.email}",
        gender: "${emp.gender}",
        designation: "${emp.designation}",
        salary: ${emp.salary},
        date_of_joining: "${emp.date_of_joining}",
        department: "${emp.department}",
        employee_photo: "${emp.employee_photo}"
      ) {
        id
        first_name
        last_name
        email
        gender
        designation
        salary
        date_of_joining
        department
        employee_photo
      }
    }
  `;

  return this.http.post<any>('http://localhost:5000/graphql', { query })
    .pipe(map((res: any) => res.data.updateEmployee));
}

deleteEmployee(id: string): Observable<any> {
  const query = `
    mutation {
      deleteEmployee(eid: "${id}")
    }
  `;

  return this.http.post<any>('http://localhost:5000/graphql', { query })
    .pipe(map((res: any) => res.data.deleteEmployee));
}

searchEmployees(searchTerm: string) {
  const query = `
    query {
      searchEmployees(searchTerm: "${searchTerm}") {
        id
        first_name
        last_name
        email
        gender
        designation
        salary
        date_of_joining
        department
        employee_photo
      }
    }
  `;

  return this.http.post<any>('http://localhost:5000/graphql', { query });
}

}