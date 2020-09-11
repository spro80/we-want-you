import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from './services/spotify.service';

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

  artists: any[] = [];
  items: any[] = [];

  constructor(private http: HttpClient,
              private spotify: SpotifyService
  ) {
  }

  validateForm( search ) {
    let validationForm = true;
    if ( search === '') {
      alert('Debe ingresar un valor para buscar.');
      validationForm = false;
    }
    return validationForm;
  }

  searchInSpotify() {
    const { search } = this.form;
    //console.log( search );
  }

  getArtistsV2( search, typeSearch ) {
    const validation = this.validateForm( search );

    if ( validation ){
      this.spotify.getArtistsServiceV2( search, typeSearch )
      .subscribe( (data: any) => {
        console.log(data);
        this.items = data;
      });
    }
  }

  cleanItems( option ) {
      this.items = [];
  }

}
