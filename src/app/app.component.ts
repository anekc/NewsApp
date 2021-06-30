import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newsApp';
  listNoticias: any[]=[];
  loading= false;

  constructor(private noticia: NoticiaService){}

  buscarNoticias(parametros: any){
  this.loading = true;
  this.listNoticias =[];
    this.noticia.getNoticias(parametros).subscribe(resp => {console.log(resp);
      this.loading=false;
      this.listNoticias = resp.articles;}, error => {
        console.log(error);
        this.loading=false;
      })


  }
}
