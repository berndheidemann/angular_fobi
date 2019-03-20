import {Injectable} from '@angular/core';
import {Show} from '../models/show';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowDataService {


  detailShow: Show;


  shows: Show[] = [];

  // verlange im Konstruktor-Parameter nach Dependencies, hier HttpClient
  constructor(private http: HttpClient) {
    this.shows.push(new Show(0, 'Fighters'));
    this.shows.push(new Show(1, 'Breaking Bad'));
  }

  save(show: Show) {
    this.shows.push(show);
    show.id = this.shows.length;
  }


  delete(show: Show) {
    this.shows = this.shows.filter(s => s.id !== show.id);
  }

  // async-Methode die, vom normalen Kontrollfluss entkoppelt ist
  // ist notwendig um await nutzen zu können!
  async showDetail(show: Show) {
    // warte auf das Ergebnis
    // nur auf Promises kann gewartet werden
    try {
      const data = await this.http.get('http://api.tvmaze.com/singlesearch/shows?q=' + show.title).toPromise();
      this.detailShow = show;
      show.summary = data['summary'];
      show.image = data['image']['medium'];
    } catch (e) {
      alert('Serie nicht gefunden');
    }
  }
}
