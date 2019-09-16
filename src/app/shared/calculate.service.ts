import { Injectable } from '@angular/core';
import { Consult } from './consult.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  readonly rootURL ="http://localhost:53095/api"

  constructor(private http : HttpClient) { }

  fetchBonus(){

  }
  clearBonus(){

  }
}
