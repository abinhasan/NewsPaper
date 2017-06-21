import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {
  allPostArray: any;

  constructor(
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.firebaseService.getAllPosts().subscribe(allPosts => {

      let data = allPosts.sort((n1, n2) => {
        return n2.startedAt - n1.startedAt;
      });

      let allPostArray = [];

      for (let i in data) {

        let date = new Date(data[i].startedAt);

        allPostArray.push({
          key: data[i].$key,
          title: data[i].title,
          description: data[i].description,
          type: data[i].type,
          imageUrl: data[i].imageUrl,
          view: data[i].view,
          like: data[i].like,
          startedAt: date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
        });
      }

      this.allPostArray = allPostArray;
      //console.log(allPostArray);
    });
  }

}
