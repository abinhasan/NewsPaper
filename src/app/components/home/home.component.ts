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
topPostArray: any;
VideoPosts: any;
topVideoPostArray: any;
topViewArray: any;
hotnews: any;

  constructor(
    public afAuth: AngularFireAuth,
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {

    this.firebaseService.getPosts().subscribe(posts => {

      let data = posts.sort((n1,n2) => {
        return n2.startedAt - n1.startedAt;
      });

      let topPostArray = [];

      for (let i in data) {

        let date = new Date(data[i].startedAt);

        topPostArray.push({
          key: data[i].$key,
          title: data[i].title,
          description: data[i].description,
          type: data[i].type,
          imageUrl: data[i].imageUrl,
          youtubeUrl: data[i].youtubeUrl,
          view: data[i].view,
          like: data[i].like,
          startedAt: date.getDate()  + "/" + (date.getMonth()+1) + "/" + date.getFullYear()
        });
      }

      this.topPostArray = topPostArray;
      //console.log(posts);
    });

    this.firebaseService.getVideoPosts().subscribe(VideoPosts => {

      let data = VideoPosts.sort((n1,n2) => {
        return n2.startedAt - n1.startedAt;
      });

      let topVideoPostArray = [];

      for (let i in data) {

        let date = new Date(data[i].startedAt);

        topVideoPostArray.push({
          key: data[i].$key,
          title: data[i].title,
          description: data[i].description,
          type: data[i].type,
          imageUrl: data[i].imageUrl,
          youtubeUrl: data[i].youtubeUrl,
          view: data[i].view,
          like: data[i].like,
          startedAt: date.getDate()  + "/" + (date.getMonth()+1) + "/" + date.getFullYear()
        });
      }

      this.topVideoPostArray = topVideoPostArray;
      console.log(topVideoPostArray);
    });

    this.firebaseService.getTopViewPosts().subscribe(topViewPosts => {

      let topView = topViewPosts.sort((n1, n2) => {
        return n2.view - n1.view;
      });

      let topViewArray = [];

      for (let i in topView) {

        let date = new Date(topViewPosts[i].startedAt);

        topViewArray.push({
          key: topView[i].$key,
          title: topView[i].title,
          description: topView[i].description,
          type: topView[i].type,
          imageUrl: topView[i].imageUrl,
          youtubeUrl: topView[i].youtubeUrl,
          view: topView[i].view,
          like: topView[i].like,
          startedAt: date.getDate()  + "/" + (date.getMonth()+1) + "/" + date.getFullYear()
        });
      }
      
      this.topViewArray = topViewArray;

    });
  }

}
