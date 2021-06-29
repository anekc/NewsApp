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

  constructor(private noticia: NoticiaService){}

  buscarNoticias(parametros: any){
    console.log('soy el padre');
    console.log(parametros);
    this.noticia.getNoticias(parametros).subscribe(resp => {console.log(resp);
      this.listNoticias = resp.articles;}, error => {
        console.log(error);
      })


  }
}
