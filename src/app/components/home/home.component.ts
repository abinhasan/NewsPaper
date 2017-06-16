import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

posts: any;
vedioPosts: any;

  constructor(
    public afAuth: AngularFireAuth,
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {

    this.firebaseService.getPosts().subscribe(posts => {
      this.posts = posts;
    });

    this.firebaseService.getVideoPosts().subscribe(vedioPosts => {
      this.vedioPosts = vedioPosts;
      //console.log(vedioPosts);
    });
  }

}
