import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.css']
})
export class GraficaBarraComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input() horizontal:boolean = false;
  @Input() barChartLabels:string[]=[];
  @Input() dataset:any[]=[];

  barChartOptions: ChartConfiguration['options'];
  barChartType!: ChartType;
  barChartData!: ChartData<'bar'>;


  ngOnInit(): void {
    this.barChartOptions = {
      responsive: true,
      indexAxis: this.horizontal?'y':'x',
      // We use these empty structures as placeholders for dynamic theming.
    };
  
    this.barChartType="bar";

    this.barChartData= {
      labels: this.barChartLabels,
      datasets: this.dataset
    };
  }

  

  public randomize(): void {
    // Only Change 3 values
    // this.barChartData.datasets[0].data = [
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100), ];

    this.barChartData.datasets.forEach(element=>{
      element.data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100), ]
    })

    this.chart?.update();
  }

}
