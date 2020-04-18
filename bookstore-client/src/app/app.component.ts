import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

import {Books} from './books'
import { ApiService } from './api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'bookstore-client';

  // books = new Array<Books>();
 
  constructor( empService:ApiService ) {
 
    // empService.getBooks().subscribe(response => 
    // {     
    //   this.books = response.map(item => 
    //   {
    //     return new Books( 
    //         item.id,
    //         item.title,
    //         item.description,
    //         item.author
    //     );
    //   });
    // });  
  }
}
