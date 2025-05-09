import { Component } from '@angular/core';
import { ApiServiceService } from '../../service/api-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hyrule-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hyrule-list.component.html',
  styleUrl: './hyrule-list.component.css'
})
export class HyruleListComponent {
  creatures: any[] = [];

  constructor(private apiService: ApiServiceService){}

  ngOnInit(){
    this.apiService.getCreatures().subscribe(data => {
      this.creatures = data.data;
      console.log(this.creatures);
    });
  }
}
