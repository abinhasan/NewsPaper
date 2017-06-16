import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

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
      youtubeUrl: this.youtubeUrl
    }

    this.firebaseService.addpost(post);
    this.router.navigate(['/']);
  }

}
