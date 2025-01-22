import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.css']
})
export class DetailedComponent implements OnInit {
  data: any;
  selectedSamplingTime: string;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
      this.selectedSamplingTime = data.Datas[0].SamplingTime;
    });
  }

  onSave(): void {
    this.dataService.saveData(this.data).subscribe(() => {
      alert('Data saved successfully');
    });
  }
}
