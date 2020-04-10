import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titles: any = ['lorem 1', 'lorem 2', 'lorem 3', 'lorem 4'];

  constructor(private http: HttpClient) {

  }

  getData() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(response => {
      this.titles = response.slice(0, 10).map(rsp => rsp.title);
    });
  }

  postData() {
    // to post data
  }

  updateData() {
    // to update data
  }

  deleteData() {
    // to delete data
  }
}
