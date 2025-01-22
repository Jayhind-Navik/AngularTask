import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Data {
  Id: number;
  Name: string;
  Datas: Array<{
    SamplingTime: string;
    Properties: Array<{ Label: string; Value: any }>;
  }>;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://localhost:5001/api/data';

  constructor(private http: HttpClient) {}

  getData(): Observable<Data> {
    return this.http.get<Data>(this.apiUrl);
  }

  saveData(data: Data): Observable<void> {
    return this.http.post<void>(this.apiUrl, data);
  }
}
