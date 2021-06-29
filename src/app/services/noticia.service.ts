import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  constructor(private http: HttpClient) { }
  
  getNoticias(parametros:any): Observable<any>{
    const url = `https://newsapi.org/v2/top-headlines?country=${parametros.pais}&category=${parametros.categoria}&apiKey=5d11892048a140978787490b8d6e8e88`
    return this.http.get(url);
    
  }
}
