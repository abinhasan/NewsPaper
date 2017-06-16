import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {

  posts: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.posts = db.list('/posts');
  }

  addpost(post) {
    return this.posts.push(post);
  }


  getPosts() {
    this.posts = this.db.list('/posts',
      {
        query: {
          limitToLast: 12,
          orderByChild : "youtubeUrl",
          equalTo : "NA"
        }
      }) as FirebaseListObservable<Post[]>
    return this.posts;
  }

  getVideoPosts() {
    this.posts = this.db.list('/posts',
      {
        query: {
          limitToLast: 2,
          orderByChild : "type",
          equalTo : "ভিডিও"
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
}
