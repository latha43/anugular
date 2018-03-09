
import {Injectable} from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService{
  private _url:string='http://localhost:8082/CustomerSearch/';
  constructor(private _http:Http){}
  getEmployee(staffid:string)
  {
    let time= new Date();
	let url=this._url+"search/"+staffid+"/"+time.getTime();
    return this._http.get(url)
      .map((response:Response) => response.json());
    
  }
  listEmployee()
{
  let time= new Date();
  let url=this._url+"list/"+time.getTime();
  return this._http.get(url)
    .map((response:Response) => response.json());
  
}
  addEmp(id:string,name:string,Dept:string,ph_no:string){
	    let url=this._url+"create";
	    let bodyObj={
	      "id":id,
	      "name":name,
	      "department":Dept,
	      "ph_no":ph_no
	    }
	    return this._http.put(url,JSON.stringify(bodyObj)).map((res:Response)=>res.json());
	  }
delete(id:string){
	let url=this._url+"delete/"+id;
   return this._http.get(url).map((response:Response) => response.json());
}
edit(id:string,name:string,Dept:string,ph_no:string){
	let url=this._url+"edit";
	let bodyObj={
	      "id":id,
	      "name":name,
	      "dept":Dept,
	      "ph_no":ph_no
	    }
	    return this._http.put(url,JSON.stringify(bodyObj)).map((res:Response)=>res.json());
	}
}
