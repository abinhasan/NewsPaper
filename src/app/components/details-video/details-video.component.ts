import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details-video',
  templateUrl: './details-video.component.html',
  styleUrls: ['./details-video.component.css']
})
export class DetailsVideoComponent implements OnInit {

  id: any;
  video: any;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getVideoDetails(this.id).subscribe(video => {

      let date = new Date(video["startedAt"]);

      let customVideo = {
        key: video["$key"],
        title: video["title"],
        youtubeUrl: video["youtubeUrl"],
        like: video["like"],
        view: video["view"],
        type: video["type"],
        startedAt: date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
      };
      this.video = customVideo;
      console.log(customVideo);
    });
  }

}
