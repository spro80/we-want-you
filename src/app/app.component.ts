import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from './services/spotify.service';
//import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form = {
    search: '',
    typeSearch: 'album'
  }
  title = 'SPOTIFY SEARCH';

  nuevasCanciones: any[] = [];
  artists: any[] = [];
  items: any[] = [];


  constructor(private http: HttpClient,
              private spotify: SpotifyService
  ) {
  }

  searchInSpotify(){
    let search = this.form.search;
    console.log( search );
  }

  getArtistsV2( search, typeSearch ) {

    this.spotify.getArtistsServiceV2( search, typeSearch )
        .subscribe( (data: any) => {
          console.log(data);
          this.items = data;
        });

  }

}
