import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  public year: number = 2023;

  public ngOnInit(): void {
    const date = new Date();
    this.year = date.getFullYear();
  }
}
