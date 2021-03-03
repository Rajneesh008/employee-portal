import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

getData(url){
  return this.httpClient.get(url);
}
postData(url, data){
  return this.httpClient.post(url, data);
}
}
