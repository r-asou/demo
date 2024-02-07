import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private baseUrl: string = 'http://localhost:8080/api/'
  constructor(private http: HttpClient) {

  }

  public get(apiPath: string, config?: HttpParams) {
    return this.http.get(this.baseUrl + apiPath, {params: config})
  }

  public post(apiPath: string, config?: HttpParams, requestBody?: any) {
    return this.http.post(this.baseUrl + apiPath, requestBody, {params: config})
  }

  public put(apiPath: string, config?: HttpParams, requestBody?: any) {
    return this.http.put(this.baseUrl + apiPath, requestBody, {params: config})
  }

  public delete(apiPath: string, config?: HttpParams) {
    return this.http.delete(this.baseUrl + apiPath, {params: config})
  }
}
