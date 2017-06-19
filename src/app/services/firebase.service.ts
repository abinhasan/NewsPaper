import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {

  posts: FirebaseListObservable<any[]>;

  hotnews: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.posts = db.list('/posts');
    this.hotnews = db.list('/hotnews');
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

  addpost(post) {
    return this.posts.push(post);
    //return this.hotnews.push(post);
  }



  getPosts() {
    this.posts = this.db.list('/posts',
      {
        query: {
          limitToLast: 12,
          orderByChild: "youtubeUrl",
          equalTo: "NA"
        }
      }) as FirebaseListObservable<Post[]>
    return this.posts;
  }

  getVideoPosts() {
    this.posts = this.db.list('/posts',
      {
        query: {
          limitToLast: 3,
          orderByChild: "type",
          equalTo: "ভিডিও"
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
          endAt: 30,
          limitToFirst : 8
        }
      }) as FirebaseListObservable<Post[]>
    return this.posts;
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
