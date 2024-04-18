import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>user-details works!</p>`,
  styleUrl: './user-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent { }
