import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  nomes = [
    {
      name: 'Silvio da Costa Hinkelman',
      cpf: '111.000.000-00',
      idade: '11',
    },
    {
      name: 'Adão Carlos',
      cpf: '222.000.000-00',
      idade: '22',
    },
    {
      name: 'Armando Hinkelman',
      cpf: '333.000.000-00',
      idade: '33',
    },
    {
      name: 'Leticia Nunes Winck',
      cpf: '444.000.000-00',
      idade: '44',
    },
  ];
}
