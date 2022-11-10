import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl="http://localhost:50309/";

  constructor(private http:HttpClient) { }

  //departmentAPI------------>
  getDepList():Observable<any[]> {
    return this.http.get<any>(this.APIUrl+'/department');
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/department',val);
  }

  upDateDepartment(val:any){
    return this.http.put(this.APIUrl+'/department',val);
  }
 
  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/department',val);
  }

  //EmployeeAPI ------------>
  getEmpList():Observable<any[]> {
    return this.http.get<any>(this.APIUrl+'/Employee');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/Employee',val);
  }

  upEmployee(val:any){
    return this.http.put(this.APIUrl+'/Employee',val);
  }
 
  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/Employee',val);
  }

  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee/getAllDepartmentNames');
  }

}
