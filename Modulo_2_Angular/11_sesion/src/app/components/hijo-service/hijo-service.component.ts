import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-hijo-service',
  standalone: true,
  imports: [],
  templateUrl: './hijo-service.component.html',
  styleUrl: './hijo-service.component.css'
})
export class HijoServiceComponent {
  message = "";
  constructor(private dataService: DataService){}

  ngDoCheck(){
    this.message = this.dataService.getMessage();
  }
}
