import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit{
  disciplina = [{disciplina: 'Portugues', liberado: true},{disciplina: 'Matematica', liberado: false}];

  ngOnInit(): void {
  }

}
