// app.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';  // Import the ApiService

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="data">
      <h1>Data from API</h1>
      <pre>{{ data | json }}</pre>
    </div>
  `,
})
export class AppComponent implements OnInit {
  data: any;

  constructor(private apiService: ApiService) {}

  // Fetch data on component initialization
  ngOnInit(): void {
    this.apiService.getData().subscribe(
      (response) => {
        this.data = response;  // Assign API response to component's data property
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
