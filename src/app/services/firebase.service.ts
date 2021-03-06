import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {

  posts: FirebaseListObservable<any[]>;
  hotnews: FirebaseListObservable<any[]>;
  videonews: FirebaseListObservable<any[]>;

  post: FirebaseObjectObservable<any[]>;
  video: FirebaseObjectObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.posts = db.list('/posts');
    this.hotnews = db.list('/hotnews');
    this.videonews = db.list('/videonews');
  }


  getHotNews() {
    this.hotnews = this.db.list('/hotnews',
      {
        query: {
          //orderByChild: "startedAt",
          limitToLast : 3
        }
      }) as FirebaseListObservable<Post[]>
    return this.hotnews;
  }

  addPost(post) {
    return this.posts.push(post);
  }

  addHotNews(hotNews) {
    return this.hotnews.push(hotNews);
  }

  addvideopost(video) {
    //console.log(video);
    return this.videonews.push(video);
  }

  getPosts() {
    this.posts = this.db.list('/posts',
      {
        query: {
          limitToLast: 12
        }
      }) as FirebaseListObservable<Post[]>
    return this.posts;
  }

  getVideoPosts() {
    this.posts = this.db.list('/videonews',
      {
        query: {
          limitToLast: 3
        }
      }) as FirebaseListObservable<Post[]>
    return this.posts;
  }


  getTopViewPosts() {
    this.posts = this.db.list('/posts',
      {
        query: {
          orderByChild: "view",
          startAt: 1,
          endAt: 100,
          limitToFirst : 8
        }
      }) as FirebaseListObservable<Post[]>
    return this.posts;
  }

  getPostDetails(id) {
    this.post = this.db.object('/posts/' + id) as FirebaseObjectObservable<Post>
    return this.post;
  }

  getVideoDetails(id) {
    this.video = this.db.object('/videonews/' + id) as FirebaseObjectObservable<Video>
    return this.video;
  }


  getAllPosts() {
    this.posts = this.db.list('/posts') as FirebaseListObservable<Post[]>
    return this.posts;
  }

  getAllVideo() {
    this.videonews = this.db.list('/videonews') as FirebaseListObservable<Video[]>
    return this.videonews;
  }

}

interface Post {
  $key?: string;
  title?: string;
  description?: string;
  type?: string;
  imageUrl?: string;
  youtubeUrl?: string;
  startedAt?: string;
  view? : number;
  like? : number;
}

interface Video {
  $key?: string;
  title?: string;
  type?: string;
  imageUrl?: string;
  youtubeUrl?: string;
  startedAt?: string;
  view? : number;
  like? : number;
}
