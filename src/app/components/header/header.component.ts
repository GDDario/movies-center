import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild("searchBar", { static: true }) searchBar: ElementRef;
  constructor(private router: Router) { }

  public ngOnInit(): void {
    this.searchBar.nativeElement.addEventListener("keydown", (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        this.changeRoute();
      }
    });
  }

  public changeRoute(): void {
    if (this.searchBar.nativeElement.value != "") {
      this.router.navigate(["/search"], { queryParams: { search: this.searchBar.nativeElement.value } });
      this.searchBar.nativeElement.value = "";
    }
  }
}
