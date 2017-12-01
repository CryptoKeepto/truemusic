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
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';

// service
import { GenresService } from "./services/genres.service";
import { AlbumsService } from "./services/albums.service";
import { ChatRoomsService } from "./services/chat-rooms.service";


const appRouter: Routes = [
  { path: "", component: HomeComponent },
  { path: "albums", component: AlbumsComponent },
  { path: "doc", component: DocComponent },
  { path: "chatroom", component: ChatRoomComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DocComponent,
    AlbumsComponent,
    AlbumDetailComponent,
    ChatRoomComponent
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
    AlbumsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
