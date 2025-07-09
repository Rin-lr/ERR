import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
 
export class ApiService {
  // Kust API infot taotleda
  private apiUrl = 'https://services.err.ee/api/v2/category/getByUrl?url=video&domain=jupiter.err.ee';
  
  // Taotletakse infot API'st ja 'constructor' loob objekte info põhjal
  constructor(private http: HttpClient) {}
 
  // API info saamine, edasi saatmine kasutamiseks
  getImg(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
