import { Component, OnInit, Input } from '@angular/core';
import { AlbumsService } from "../../services/albums.service";
import { Albums } from "../../models/albums.model";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  @Input() data: Albums;


  constructor(private albumsService: AlbumsService) {}

  ngOnInit() {
    this.getAlbum();
  }

  private getAlbum(): void {
    this.albumsService.getAlbum(1).subscribe(
      (res) => console.log(res)
    )
  }

}
