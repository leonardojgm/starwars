import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-naves',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './naves.component.html',
  styleUrl: './naves.component.css'
})
export class NavesComponent {

}
