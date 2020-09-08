import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  formulario = {
    album_or_artist: ''
  }

  title = 'SPOTIFY SEARCH';

  searchInSpotify(){
    let search_by_album_or_artist = this.formulario.album_or_artist
    console.log( search_by_album_or_artist )
  }


}
