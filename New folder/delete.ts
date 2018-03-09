
import { EmployeeService } from './test.service';
import { Component,OnInit } from '@angular/core' 

@Component({
  selector:'delete',
  template:        `<h2>Staff Details </h2><br>
	  				Staff ID <input type="text" #staffid>
      							
      				<button (click)="delete(staffid.value)" class="button3">DELETE</button>
                   `,
                   	providers:[EmployeeService]
  
})
export class DeleteComponent {
  employees:any[];
  status1:string;
  status:string;
  constructor(private _employeeService:EmployeeService){}
 
  
delete(id:string){
	
	  this._employeeService.delete(id).subscribe((resEmployeeData:any) => this.employees=(resEmployeeData));
	  alert('Record deleted successfully');
  }


}
  