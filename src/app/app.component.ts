import { Component } from '@angular/core';
import { NavigationComponent } from './features/front-office/navigation/navigation.component';
import { ContainerComponent } from './features/front-office/container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationComponent, ContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Flanimas---Frontend';
}
