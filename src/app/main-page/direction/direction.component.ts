import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent {
  @Input() url: string = "";
  @Input() title: string = "";
  @Input() image: string = "";
}
