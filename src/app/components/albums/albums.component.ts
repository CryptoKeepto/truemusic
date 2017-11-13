import { Component, OnInit } from '@angular/core';
import { Albums } from "../../models/albums.model";
import { AlbumsService } from "../../services/albums.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  private albums: Albums[];
  private album: Albums[];
  private id: number;

  constructor(private albumsService: AlbumsService) { }

  ngOnInit() {
    this.getAlbums();
  }


  private getAlbums() {
    this.albumsService.getAlbums().subscribe(
      (res) => {
        this.albums = res
      },
      (err) => console.log(err),
      () => console.log("success")
    )
  }

  private goDetail(album): void {
    this.album = album;
  }



}
