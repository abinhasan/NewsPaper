import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-all-video',
  templateUrl: './all-video.component.html',
  styleUrls: ['./all-video.component.css']
})
export class AllVideoComponent implements OnInit {
  allVideoArray: any;

  constructor(
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {

    this.firebaseService.getAllVideo().subscribe(allVideos => {

      let data = allVideos.sort((n1, n2) => {
        return n2.startedAt - n1.startedAt;
      });

      let allVideoArray = [];

      for (let i in data) {

        let date = new Date(data[i].startedAt);

        allVideoArray.push({
          key: data[i].$key,
          title: data[i].title,
          type: data[i].type,
          youtubeUrl: data[i].youtubeUrl,
          view: data[i].view,
          like: data[i].like,
          startedAt: date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
        });
      }

      this.allVideoArray = allVideoArray;
      //console.log(allVideoArray);
    });
  }

}
