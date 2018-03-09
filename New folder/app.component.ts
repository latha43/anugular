﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from './Validation.Service'; 


@Component({
    selector: 'app',
    template: `<div *ngIf="!show">
    <div class=image align="center">
    <h1><b>Welcome to UST Global</b> </h1>
 

   <br><br><br>
    <form [formGroup]="loginform">
           <input type="text"  placeholder="enter your username" formControlName="EmpName"#user>
            <control-messages [control]="loginform.controls.EmpName"></control-messages>
             <br><br>
		  <input type="password"  placeholder="enter your password" formControlName="pwd" #pwd>
		   <control-messages [control]="loginform.controls.pwd"></control-messages>
			  <br><br><br>
			<button (click)="onclick(user.value,pwd.value)"  [disabled]="!loginform.valid" class="button5">Login</button>
			</form>
			<h2>{{status}}</h2>
    </div>
    
    </div>
      
        <div align="center" *ngIf="show">
        <h1><b><marquee> Welcome User </marquee></b></h1>
          	<button (click)="onclick1()" class="button5" id="pos">Logout</button>
        <Staff-list></Staff-list>
        </div>
        `,
        styles:[`h1{color:red;}`]

})

export class AppComponent { name='register';
loginform: any;
clickMessage:string;
show:boolean=false;
status:string;
constructor(private formBuilder: FormBuilder) {
    
this.loginform = this.formBuilder.group({
 'EmpName': ['', Validators.required],
  'pwd':['',Validators.required]
});

console.log(this.loginform);
}
onclick(u:string,p:string) {

if(u==p && u!=""){
    this.status='Login successful';
    this.show=!this.show;
    console.log(status);

}
else{
    this.status='Login failed';
    console.log(status);

}
}
onclick1() {
	 window.location.replace('/logout'); 
    this.show=!this.show;
}
}