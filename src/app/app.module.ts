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

// service
import { GenresService } from "./services/genres.service";

const appRouter: Routes = [
  { path: "", component: HomeComponent },
  { path: "doc", component: DocComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DocComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [
    GenresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
