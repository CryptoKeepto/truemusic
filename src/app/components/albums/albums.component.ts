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
  public album: any;
  public albumTitle: any;

  constructor(private albumsService: AlbumsService) { }

  ngOnInit() {
    this.getAlbums();
  }


  private getAlbums() {
    this.albumsService.getAlbums().subscribe(
      (res) => {
        this.albums = res
      },
      (err) => console.log(err)
    )
  }

  private goDetail(album): void {
    // send to child
    this.albumTitle = album;

    let id = album.album_id;
    this.albumsService.getAlbum(id).subscribe(
      (res) => this.album = res,
      (err) => alert(err)
    )
  }



}
