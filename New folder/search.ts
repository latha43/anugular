﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿
import { EmployeeService } from './test.service';
import { Component,OnInit } from '@angular/core' 

@Component({
    selector: 'search',
    template: `<h2>Staff Details </h2><br>
             <br><br>Staff ID <input type="text" #staffid><br><br>
      <button (click)="onClick(staffid.value)" class="button3">SEARCH</button>
           
                 
             <br><br><br><br>   
                 <table >  
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
    							`,

    							providers:[EmployeeService]
  
})
   
export class SearchComponent {
  employees:any[];
  status1:string;
  status:string;
  constructor(private _employeeService:EmployeeService){}
  onClick(staffid:string){
   

     this._employeeService.getEmployee(staffid)
      .subscribe((resEmployeeData:any) => this.employees=(resEmployeeData));
  
  }
     
  }