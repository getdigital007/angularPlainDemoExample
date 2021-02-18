import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutData = [];
  constructor(private apiService: ApiService) { }
 
  ngOnInit(): void {
    this.apiService.get('sample').subscribe((data: any[])=>{  
			console.log(data);  
			this.aboutData = data;  
		})
  }

}
