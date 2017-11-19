import { Component, OnInit, Input } from '@angular/core';
import { AlbumsService } from "../../services/albums.service";
import { Songs } from "../../models/songs.model";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  @Input() data: Songs;
  @Input() albumTitle: any;

  constructor() {}

  ngOnInit() {
  }



}
