import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './Movie';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  private baseUrl = environment.BASE_URL_API;
  constructor(private http: HttpClient) { }
  getTrending(): Observable<any> {
    return this.http
      .get<any>(this.baseUrl + '/top/anime')
  }
}
