import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../service/data.service';
import { HijoServiceComponent } from '../../components/hijo-service/hijo-service.component';

@Component({
  selector: 'app-service-page',
  standalone: true,
  imports: [FormsModule, HijoServiceComponent],
  templateUrl: './service-page.component.html',
  styleUrl: './service-page.component.css'
})
export class ServicePageComponent {
  newMessage = "";

  constructor(private dataService: DataService){

  }

  updateMessage(){
    this.dataService.setMessage(this.newMessage);
  }
}
