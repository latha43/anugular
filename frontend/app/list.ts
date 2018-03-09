
import { EmployeeService } from './test.service';
import { Component,OnInit } from '@angular/core' 

@Component({
  selector:'list',
  template:`<h2>Staff Details </h2><br>




 <button (click)="listClick()" class="btn1">list Staff Members</button>
           
                 
                <br><br><br><br>
                 <table>  
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Phone_no</th>
                                 
                           </tr>
                           <tr *ngFor = "let cust of employees">
                            <td>{{cust.id}}</td>
                            <td>{{cust.name}}</td>
                            <td>{{cust.dept}}</td>
                            <td>{{cust.ph_no}}</td>
                            
   
 
                           </tr>

  
                    </table>
<br><br>




                   `,

providers:[EmployeeService]
  
})
export class ListComponent {
  employees:any[];
  status1:string;
  status:string;
  constructor(private _employeeService:EmployeeService){}
 
  listClick(){
	   

	     this._employeeService.listEmployee()
	      .subscribe((resEmployeeData:any) => this.employees=(resEmployeeData));
	  }
  
}
  