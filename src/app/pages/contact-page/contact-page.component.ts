import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  constructor(private title: Title) { }

  public ngOnInit(): void {
    this.title.setTitle("Contact - MoviesCenter")
  }
}
