import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.css']
})
export class DetailsPostComponent implements OnInit {

  id: any;
  post: any;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

     // Get Id
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getPostDetails(this.id).subscribe(post => {

      let date = new Date(post["startedAt"]);

      let customPost = {
        key: post["$key"],
        title: post["title"],
        description: post["description"],
        imageUrl: post["imageUrl"],
        like: post["like"],
        view: post["view"],
        type: post["type"],
        startedAt: date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
      };
      this.post = customPost;
      //console.log(customPost);
    });
  }

}
