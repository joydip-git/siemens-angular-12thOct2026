import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TokenStorageService } from '../../services/token-storage-service';

@Component({
  imports: [RouterLink],
  selector: 'app-dash-board',
  styleUrl: './dash-board.css',
  templateUrl: './dash-board.html',
})
export class DashBoard {
  private tss = inject(TokenStorageService)
}
