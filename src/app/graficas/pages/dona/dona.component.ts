import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent {

  color:Color[]=[
    'blue',
    'rgb(54, 162, 235)',
    'rgb(255, 205, 86)'
   ]

   // Doughnut
   public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
   public doughnutChartData: ChartData<'doughnut'> = {
     labels: this.doughnutChartLabels,
     datasets: [
       { data: [ 350, 450, 100 ],
         backgroundColor:this.color
       },
     ],
   };
   public doughnutChartType: ChartType = 'doughnut';
 
   // events
   public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
     console.log(event, active);
   }
 
   public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
     console.log(event, active);
   }
}
