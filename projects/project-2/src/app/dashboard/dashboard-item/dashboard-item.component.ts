import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  // we have to give the inputs to this component from outside
  // and this component make the use of given input data
  // to display the image and title
  @Input({ required: true }) image!: { src: string; alt: string };
  @Input({ required: true }) title!: string;
}
