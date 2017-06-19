import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  title: any;
  description: any;
  type: any;
  imageUrl: any;
  youtubeUrl: any;
  view: any;
  like: any;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit() {
    let post = {
      title: this.title,
      description: this.description,
      type: this.type,
      imageUrl: this.imageUrl,
      view: this.view,
      like: this.like,
      startedAt : firebase.database.ServerValue.TIMESTAMP
    }

    this.firebaseService.addPost(post);
    this.router.navigate(['/']);
  }

  onAddVideoSubmit() {
    let video = {
      title: this.title,
      type: this.type,
      youtubeUrl: this.youtubeUrl,
      view: this.view,
      like: this.like,
      startedAt : firebase.database.ServerValue.TIMESTAMP
    }

    this.firebaseService.addvideopost(video);
    this.router.navigate(['/']);
  }


  onAddHotNewsSubmit() {
    let hotNews = {
      title: this.title,
      description: this.description,
      type: this.type,
      imageUrl: this.imageUrl,
      view: this.view,
      like: this.like,
      startedAt : firebase.database.ServerValue.TIMESTAMP
    }

    this.firebaseService.addHotNews(hotNews);
    this.router.navigate(['/']);
  }

}
