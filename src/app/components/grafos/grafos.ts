import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@Component({
  selector: 'app-grafos',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './grafos.html',
  styleUrls: ['./grafos.scss']
})
export class Grafos {

  data = [
    { name: 'Marta', value: 8.5 },
    { name: 'Laura', value: 9.0 },
    { name: 'Pedro', value: 7.5 },
    { name: 'Juan', value: 6.0 },
    { name: 'Ana', value: 8.0 },
    { name: 'Luis', value: 9.5 },
    { name: 'Sofía', value: 7.0 },
    { name: 'Carlos', value: 8.2 },
    { name: 'Elena', value: 9.1 },
    { name: 'Javier', value: 6.8 }
  ];

  dataLine = [
    {
      name: 'Notas',
      series: [
        { name: 'Marta', value: 8.5 },
        { name: 'Laura', value: 9.0 },
        { name: 'Pedro', value: 7.5 },
        { name: 'Juan', value: 6.0 },
        { name: 'Ana', value: 8.0 },
        { name: 'Luis', value: 9.5 },
        { name: 'Sofía', value: 7.0 },
        { name: 'Carlos', value: 8.2 },
        { name: 'Elena', value: 9.1 },
        { name: 'Javier', value: 6.8 }

      ]
    }
  ];

}
