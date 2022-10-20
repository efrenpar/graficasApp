import { Component, OnInit } from '@angular/core';
import { ChartData, ChartDataset } from 'chart.js';
import { _DeepPartialObject } from 'chart.js/types/utils';

@Component({
  selector: 'app-barras-dobles',
  templateUrl: './barras-dobles.component.html',
  styleUrls: ['./barras-dobles.component.css']
})
export class BarrasDoblesComponent{

  public labels: string[] = ['2021', '2022','2023','2024','2025'];

  productoData:any[] = [
    { data: [ 200, 300,400,300, 100 ], label: 'Carros', backgroundColor: 'blue' },
  ]

  proveedoresData:any[] = [
    { data: [ 100,200,300,400,500 ], label: 'Vendedor A' },
    { data: [ 50,250,30, 450,200 ], label: 'Vendedor B' },
  ]

}
