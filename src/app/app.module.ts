import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { DocComponent } from './components/doc/doc.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { GenresService } from "./services/genres.service";
import { AlbumsService } from "./services/albums.service";
import { ChatRoomsService } from "./services/chat-rooms.service";
import { LoginComponent } from './components/login/login.component';
import { AuthService } from "./services/auth.service";



const appRouter: Routes = [
  { path: "", component: HomeComponent },
  { path: "albums", component: AlbumsComponent },
  { path: "doc", component: DocComponent },
  { path: "chatroom", component: ChatRoomComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DocComponent,
    AlbumsComponent,
    AlbumDetailComponent,
    ChatRoomComponent,
    LoginComponent
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
    ChatRoomsService,
    AlbumsService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
