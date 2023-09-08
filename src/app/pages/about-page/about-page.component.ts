import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  public year: number = 2023;

  constructor(private title: Title) { }

  public ngOnInit(): void {
    this.title.setTitle("About - MoviesCenter")
    const date = new Date();
    this.year = date.getFullYear();
  }
}
