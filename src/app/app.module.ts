import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GenresPageComponent } from './pages/genres-page/genres-page.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { GenreCardComponent } from './components/genre-card/genre-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationInterceptor } from './services/authentication-interceptor.service';
import { GenreLabelComponent } from './components/genre-label/genre-label.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SearchGenrePageComponent } from './pages/search-genre-page/search-genre-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactPageComponent,
    HomePageComponent,
    GenresPageComponent,
    MoviePageComponent,
    AboutPageComponent,
    MovieCardComponent,
    FooterComponent,
    HeaderComponent,
    GenreCardComponent,
    TextFieldComponent,
    GenreLabelComponent,
    SearchPageComponent,
    SearchGenrePageComponent,  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
