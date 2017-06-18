import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  hotnews: any;

  constructor (
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {

    this.firebaseService.getHotNews().subscribe(hotnews => {
      let hotdata = hotnews.sort((n1,n2) => {
        return n2.startedAt - n1.startedAt;
      });
      
      this.hotnews = hotdata;
    });

  }
  today: number = Date.now();
}
