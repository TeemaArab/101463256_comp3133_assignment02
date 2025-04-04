import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];
  showAddModal = false;
  showViewModal = false;
 
 searchTerm: string = '';


  newEmployee: any = {
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    designation: '',
    salary: null,
    date_of_joining: '',
    department: '',
    employee_photo: ''
  };
  selectedEmployee: any = null

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getAllEmployees().subscribe({
      next: (data: any) => {
        this.employees = data;
      },
      error: (err: any) => {
        console.error('Error loading employees:', err);
      }
    });
  }

  openAddModal() {
    this.showAddModal = true;
  }

  closeAddModal() {
    this.showAddModal = false;
  }

  addEmployee() {
    console.log(' Saving employee:', this.newEmployee);
  
    this.employeeService.addEmployee(this.newEmployee).subscribe({
      next: (res: any) => {
        console.log(' Employee added:', res);
        this.closeAddModal();
        this.getEmployees();
      },
      error: (err: any) => {
        console.error(' Error adding employee:', err);
      }
    });
  }
  
  viewEmployee(emp: any) {
    this.selectedEmployee = emp;
    this.showViewModal = true;
  }

  closeViewModal() {
    this.showViewModal = false;
    this.selectedEmployee = null;
  }


  // Edit modal
showEditModal = false;
editedEmployee: any = null;

editEmployee(emp: any) {
  this.editedEmployee = { ...emp }; 
  this.showEditModal = true;
}

closeEditModal() {
  this.showEditModal = false;
  this.editedEmployee = null;
}

updateEmployee() {
  this.employeeService.updateEmployee(this.editedEmployee).subscribe({
    next: (res: any) => {
      console.log('Employee updated:', res);
      this.closeEditModal();
      this.getEmployees(); 
    },
    error: (err: any) => {
      console.error('Error updating employee:', err);
    }
  });
}


// delete modal
deleteEmployee(id: string) {
  if (confirm('Are you sure you want to delete this employee?')) {
    this.employeeService.deleteEmployee(id).subscribe({
      next: (res: any) => {
        console.log('Employee deleted:', res);
        this.getEmployees(); // Refresh the list
      },
      error: (err: any) => {
        console.error('Error deleting employee:', err);
      }
    });
  }
}

// search modal

search() {
  this.employeeService.searchEmployees(this.searchTerm).subscribe({
    next: (res: any) => {
      this.employees = res.data.searchEmployees;
    },
    error: (err) => {
      console.error('Search failed:', err);
    }
  });
}

resetSearch() {
  this.searchTerm = '';
  this.getEmployees(); // reload full list
}


// handling photo
handlePhotoUpload(event: any): void {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      this.newEmployee.employee_photo = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}


}

