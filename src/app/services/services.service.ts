import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ServicesService {
  response = new BehaviorSubject(null);
  getResonse = this.response.asObservable();
  constructor(private http: HttpClient) {}

  postMethod(url, body): Observable<any> {
    return this.http.post(url, body).pipe(map((response: any) => response));
  }

  responseData(data) {
    this.response.next(data);
  }
}
