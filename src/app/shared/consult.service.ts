import { Injectable } from '@angular/core';
import { Consult } from './consult.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConsultService {

  formData  : Consult;
  list : Consult[];
  readonly rootURL ="http://localhost:53095/api"

  constructor(private http : HttpClient) { }

  postConsult(formData : Consult){
    return this.http.post(this.rootURL+'/Consult',formData);
     
   }
 
   refreshList(){
     this.http.get(this.rootURL+'/Consult')
     .toPromise().then(res => this.list = res as Consult[]);
   }
 
   putConsult(formData : Consult){
     return this.http.put(this.rootURL+'/Consult/'+formData.ConsultID,formData);
      
    }
 
    deleteConsult(id : number){
     return this.http.delete(this.rootURL+'/Consult/'+id);
    }
 }
