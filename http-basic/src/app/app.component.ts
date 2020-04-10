import {Component} from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titles: Array<string> = ['lorem 1', 'lorem 2', 'lorem 3', 'lorem 4'];

  constructor(private http: HttpClient) {

  }

  getData() {
    this.http.get<[string]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(map(rsp => {
        return rsp.slice(0, 10).map(el => el['title']);
      }))
      .subscribe(response => {
        this.titles = response;
      });
  }

  postData() {
    const postData = {title: 'Terminator'};
    this.http.post('https://postman-echo.com/post', postData);
    // to post data
  }

  updateData() {
    // to update data
  }

  deleteData() {
    this.http.delete('https://jsonplaceholder.typicode.com/posts/1');
  }
}
