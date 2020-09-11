import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
  }

  getArtistsServiceV2( search, typeSearch ) {
    const accessToken = 'BQDkKW_LdDcOgjrfkSDUtypHM9d-KQT336y39rY0r_NHKFB1Gl3L5EE6p-UDXAmFKEdD-zfBf4JfM4eVY_0';
    const headers = this.createHeaders( accessToken );

    const baseUrl = 'https://api.spotify.com';
    const pathSearch = '/v1/search';
    const urlRequest = this.createUrlRequest(baseUrl, pathSearch, search, typeSearch);

    let typeSearchPlural = typeSearch + 's';


    return this.http.get(urlRequest, { headers })
              .pipe( map( data => {
                return data[typeSearchPlural].items;
              }))
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
