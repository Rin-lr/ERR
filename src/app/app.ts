import { Component } from '@angular/core';
import { ApiData } from './api/api-data/api-data';

@Component({
  selector: 'app-root',
  imports: [ApiData],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ERR_1';
}
