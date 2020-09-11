import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { 
    console.log("Spotify service listo")
  }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'BQDrKjMGvA0G1dkdTPT4Ql52gqaZCvU6casuMcouZL5lUFRSlQnKGKc_WoYU8Ytgkpp0X1Kea9_K2BpexaA'
    })

    /*this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .subscribe( (response: any) => {
        console.log(response)
    })*/

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

  getArtistsService( search, typeSearch ) {

    const accessToken = 'BQDrKjMGvA0G1dkdTPT4Ql52gqaZCvU6casuMcouZL5lUFRSlQnKGKc_WoYU8Ytgkpp0X1Kea9_K2BpexaA';
    const headers = this.createHeaders( accessToken );
    /*const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD8z6V65ADTJjZ-KoQjNyGc__dn38GbXHrUwstnhcl6RwVVbNkm3ERdhWAxjtDN0bMs-rcrVni3zGHhbMk'
    });*/

    const baseUrl = 'https://api.spotify.com';
    const pathSearch = '/v1/search';
    const urlRequest = this.createUrlRequest(baseUrl, pathSearch, search, typeSearch);
    console.log(urlRequest);
    //return this.http.get(`https://api.spotify.com/v1/search?q=${search}&type=${typeQuery}`, { headers });
    //return this.http.get(`${baseUrl}/v1/search?q=${search}&type=${typeQuery}`, { headers });
    //return this.http.get(`${baseUrl}${pathSearch}?q=${search}&type=${typeQuery}`, { headers });

    return this.http.get(urlRequest, { headers });
  }


  getArtistsServiceV2( search, typeSearch ) {
    const accessToken = 'BQDrKjMGvA0G1dkdTPT4Ql52gqaZCvU6casuMcouZL5lUFRSlQnKGKc_WoYU8Ytgkpp0X1Kea9_K2BpexaA';
    const headers = this.createHeaders( accessToken );

    const baseUrl = 'https://api.spotify.com';
    const pathSearch = '/v1/search';
    const urlRequest = this.createUrlRequest(baseUrl, pathSearch, search, typeSearch);
    //return this.http.get(`https://api.spotify.com/v1/search?q=${search}&type=${typeQuery}`, { headers });
    //return this.http.get(`${baseUrl}/v1/search?q=${search}&type=${typeQuery}`, { headers });
    //return this.http.get(`${baseUrl}${pathSearch}?q=${search}&type=${typeQuery}`, { headers });

    let typeSearchPlural = typeSearch + 's';


    return this.http.get(urlRequest, { headers })
              .pipe( map( data => {
                return data[typeSearchPlural].items;
              }) )
  }



  createUrlRequest(baseUrl, pathSearch, search, typeSearch) {
    return `${baseUrl}${pathSearch}?q=${search}&type=${typeSearch}`;
  }

  createHeaders( accessToken ) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`
    });
    return headers;
  }
}
