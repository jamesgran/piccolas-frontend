import { Injectable } from '@angular/core';
import { environment } from '../../../environments/configuracion/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const base_url = environment.base_url
@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private httpClient: HttpClient) { }
  sendEmail(emailData: { name: string, email: string, message: string }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<any>(`${base_url}/email`, emailData, { headers });
  }
}
