
import { EmployeeService } from './test.service';
import { Component,OnInit } from '@angular/core' 

@Component({
  selector:'add',
  template:`<h2>Staff Details </h2><br>
  Staff ID <input type="text" #id>
  Name <input type="text" #name>
  Department <input type="text" #Dept>
  Phone_no <input type="text" #ph_no>
 <br><br>
<p>Status:{{status1}}</p><br>
<button (click)="addEmployee(id.value,name.value,Dept.value,ph_no.value)">INSERT</button>
<button (click)="Edit(id.value,name.value,Dept.value,ph_no.value)">EDIT</button>
                   `,

providers:[EmployeeService]
  
})
export class AddUpComponent {
  employees:any[];
  status1:string;
status2:string;
  constructor(private _employeeService:EmployeeService){}
  
  addEmployee(id:string,name:string,Dept:string,ph_no:string){
	    
	     this._employeeService.addEmp(id,name,Dept,ph_no)
	      .subscribe(resEmployeeData => this.status1=(resEmployeeData));
	  }
  


Edit(id:string,name:string,Dept:string,ph_no:string){
	 this._employeeService.edit(id,name,Dept,ph_no).subscribe((resEmployeeData:any) => this.status1=(resEmployeeData));	
	
}
}
  