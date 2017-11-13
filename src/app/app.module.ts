import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// component
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { DocComponent } from './components/doc/doc.component';
import { AlbumsComponent } from './components/albums/albums.component';

// service
import { GenresService } from "./services/genres.service";
import { AlbumsService } from "./services/albums.service";
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';

const appRouter: Routes = [
  { path: "", component: HomeComponent },
  { path: "albums", component: AlbumsComponent },
  { path: "doc", component: DocComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DocComponent,
    AlbumsComponent,
    AlbumDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [
    GenresService,
    AlbumsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
