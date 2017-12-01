import { Component, OnInit } from '@angular/core';
import { GenresService } from "../../services/genres.service";
import { Genres } from "../../models/genres.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private genres: Genres[];

  constructor(private genresService: GenresService) {
  }
  
  public ngOnInit() {
    this.getGenres();
  }

  private getGenres() {
    this.genresService.getGenres().subscribe(
      (res) => {
        this.genres = res
      },
      (err) => console.log(err),
      () => console.log("success")
    )
  }

}
