import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = "http://localhost:8000";

  constructor(private httpClient: HttpClient) { }

  public get(path){  
		return this.httpClient.get(this.SERVER_URL+'/'+path);  
	}  
}
