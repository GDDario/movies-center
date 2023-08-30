import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactPageComponent } from "../pages/contact-page/contact-page.component";
import { HomePageComponent } from "../pages/home-page/home-page.component";
import { MoviePageComponent } from "../pages/movie-page/movie-page.component";
import { AboutPageComponent } from "../pages/about-page/about-page.component";
import { GenresPageComponent } from "../pages/genres-page/genres-page.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', component: HomePageComponent
  },
  {
    path: "contact", component: ContactPageComponent
  },
  {
    path: "genres", component: GenresPageComponent
  },
  {
    path: "movie", component: MoviePageComponent
  },
  {
    path: "about", component: AboutPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
