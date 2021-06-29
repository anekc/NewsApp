import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() parametrosSeleccionados = new EventEmitter;
  categoriaSeleccionada ='bussiness';
  paisSeleccionado = 'mx'
categorias: any[]=[
  {
  value:'general', nombre: 'General'
},
{value: 'bussiness', nombre: 'Negocios'}];

paises: any[]=[
  {value:'mx', nombre: 'Mexico'},
  {value:'br', nombre: 'Brazil'}
]
  constructor() { }

  ngOnInit(): void {
  }

  buscarNoticia(){
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }
    this.parametrosSeleccionados.emit(PARAMETROS);
    console.log(this.categoriaSeleccionada);
    console.log(this.paisSeleccionado);
  }

}
